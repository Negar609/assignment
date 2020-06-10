# API Course Final Project

## Use Case

As a traveller, I want to discover what photos and videos are nearby based on geocode coordinates or keyword(s). I want search results to contain a thumbnail image and title. When I select a video search result the video player will play the corresponding video.

## Setup
I am providing this [starter code inside the *history* app](https://github.com/danactive/history). Be sure to use [GitHub to fork the *history* project code](https://guides.github.com/activities/forking/). This will allow you to own the changes as GitHub is a programmer's portfolio.

### Verify the Video player
- [Search for Vancouver video](http://localhost:3000/explore?geocode=49.2,-123.1) in the *history* project
<img width="989" alt="Screen Shot 2020-02-05 at 23 33 17" src="https://user-images.githubusercontent.com/1093286/73915315-f0fe7880-486f-11ea-9c62-bf222b7bf74f.png">

## Resources
- [YouTube Data API v3](https://developers.google.com/youtube/v3/docs/search)
- [Flickr Photos API](https://www.flickr.com/services/api/flickr.photos.search.html)
- [Convert address to geo-location](http://www.latlong.net/convert-address-to-lat-long.html)
- [How-to clone & pull the code from GitHub](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Assessment
- [ ] JavaScript in browser
- [ ] 1 point - Input field to request coordinates (latitude and longitude) or keyword
- [ ] 3 points - Display thumbnails of photos (from Flickr) and videos within 2 km of coordinates
- [ ] 6 points - No AirBnb lint errors
- [ ] 4 points - Upgrade browser code from Promises to async await
- [ ] 12 points - Apply layout & style (styled components is recommended, but React Bootstrap or others is allowed, or inline CSS-in-JS, or native CSS)
- [ ] 8 points - Search results include Flickr resources
- [ ] 6 points - Search results include YouTube resources
- [ ] 4 points - Search results may be sorted by Relevance or Date of creation order for both Flickr and YouTube resources
- [ ] 2 points - Create a pull request from your repository to danactive's source
- [x] ~6 _bonus_ points Upgrade from ES6 classes to [React Hooks](https://reactjs.org/docs/hooks-intro.html)~ Delivered with this [Pull Request](https://github.com/danactive/history/pull/394)
- _3 points are subtracted_ for every 4 hours your solution is submitted after the deadline

## Technologies
- React
- ES6 - ES2018
- YouTube Search API
- Flickr Photos API
- Fetch
- Async Await
- node.js

## Deadline
- To qualify for all 46 points submit your solution before **Friday, Feb 28 at 23:59**
- Email your solution files as zip or GitHub repository hyperlink to dan@vanarts.com
