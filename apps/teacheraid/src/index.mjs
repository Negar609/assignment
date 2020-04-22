import Slack from '@slack/web-api';
import express from 'express';

import assessment from '../../../src/js/assessment.js';
import credentials from '../credentials.mjs';
import roster from '../student-roster.mjs';

const router = express.Router();

const buildSlackMessage = (studentKey, isHomework) => {
  const student = roster.assessment.students[studentKey];
  const finalOrHomework = isHomework ? 'homework' : 'final';
  const marks = student[finalOrHomework];
  const { latestNote } = student;
  const additionalNote = (latestNote) ? `Additional notes: ${latestNote}` : '';
  const docUrlStem = roster.assessment.course === 'api' ? 'social-apis' : 'jQuery';

  if (isHomework) {
    const message = `Hello ${studentKey.replace('_', ' ')}
Class ${roster.assessment.classNumber} - Homework mark update ${JSON.stringify(marks)}
Your homework is calculated at ${assessment.calculatePercent(marks)}% for this course
Documentation https://github.com/VanArts/course-files/tree/master/public/${docUrlStem}#assessment
${additionalNote}`;

    return message;
  }

  const message = `Hello ${studentKey}
Final project marks before My VanArts ${JSON.stringify(marks)}
Your final project is calculated at ${assessment.calculatePercent(marks)}% for this course
Documentation https://github.com/VanArts/course-files/blob/master/public/social-apis/final.md#assessment
${additionalNote}`;

  return message;
};

const sendSlackDirectMessage = (slack) => async ({ studentName, message }) => {
  const student = roster.assessment.students[studentName];
  const { error } = await slack.chat.postMessage({
    text: message,
    channel: student.slackUserId,
  });

  if (error) {
    return {
      error,
      message: `Slack Direct Message failed to ${studentName}`,
    };
  }

  return { message: `Slack Direct Message sent to ${studentName}:\n${message}`, studentName };
};

router.get('/send', async (request, response) => {
  try {
    if (!credentials || !credentials.slack || !credentials.slack.access_token_secret) {
      throw new ReferenceError('Slack token missing');
    }

    const slack = new Slack.WebClient(credentials.slack.access_token_secret);
    const sendDM = await sendSlackDirectMessage(slack);

    const studentNames = Object.keys(roster.assessment.students);
    const messages = await Promise.all(
      studentNames.map((studentName) => {
        const isHomework = !(request.query.is_homework === 'false' || request.query.is_homework === false);
        const message = buildSlackMessage(studentName, isHomework);
        if (request.query.preview === 'false' || request.query.preview === false) {
          return sendDM({ studentName, message, sent: true });
        }

        return { studentName, message, sent: false };
      }),
    );

    response.send(messages);
  } catch (error) {
    response.send({ error: error.message });
  }
});

// TODO check user names before creating channel to avoid failure
router.get('/newChannel', async (request, response) => {
  const slack = new Slack.WebClient(credentials.slack.access_token_secret);
  const studentNames = Object.keys(roster.assessment.students);
  const userIds = studentNames
    .filter((name) => roster.assessment.students[name].slackUserId)
    .map((name) => roster.assessment.students[name].slackUserId);
  const channelStem = roster.assessment.course === 'api' ? 'apis' : 'jquery';

  try {
    // https://api.slack.com/methods/conversations.create
    const { channel } = await slack.conversations.create({
      name: `vanarts-${channelStem}-web${roster.cohort}`,
      is_private: true,
    });

    // https://api.slack.com/methods/conversations.setTopic
    await slack.conversations.setTopic({
      channel: channel.id,
      topic: `${roster.conversation_welcome_message} (Cohort Web${roster.cohort})`,
    });
    // https://api.slack.com/methods/conversations.invite
    await slack.conversations.invite({
      channel: channel.id,
      topic: `${roster.conversation_welcome_message} (Cohort Web${roster.cohort})`,
      users: userIds.join(','),
    });

    response.send({ channel: `https://app.slack.com/client/T0425RJBD/${channel.id}` });
  } catch (error) {
    response.send(error);
  }
});

export default router;
