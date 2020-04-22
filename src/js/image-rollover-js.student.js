/* global document */
function doImageChangeVanilla() {
    function hoverIn() {
      const mainPath = this.src;
      const secPath = this.getAttribute('data-secondary');
      this.setAttribute('data-primary', mainPath);
      this.src = secPath;
    }
    function doClick() {
      const terPath = this.getAttribute('data-tertiary');
      this.setAttribute('src', terPath);
    }
    function hoverOut() {
      const resetPath = this.getAttribute('data-primary');
      this.setAttribute('src', resetPath);
    }
    const getImages = document.querySelector('.imgRollover');
    getImages.addEventListener('mouseover', hoverIn);
    getImages.addEventListener('click', doClick);
    getImages.addEventListener('mouseout', hoverOut);
  }
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
      doImageChangeVanilla,
    };
  }