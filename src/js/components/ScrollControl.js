import $ from 'jquery';

export default class ScrollControl {

  oldHash = '';
  actionSent = false;

  //-- Touche variables
  touchStartPosition = 0;

  timeBeforeSwitchSection = 1000; // in ms
  ableToSwitch = true;

  destination = 0;
  deltaY = 0;
  orientation = 'bottom';

  allSectionInfo = [];
  currentSection = {};
  iLastSection = 0;

  el = null;

  disallowedSection = ['#preloader'];

  constructor( selector = 'main') {
    this.el = $(selector);

    //-- Init section's information
    //- Init all section's information 
    this.allSectionInfo = [];
    $.each(this.el.children(), (index, subEl) => {
      const jQsubEl = $(subEl);
      //-- Skip disallowed section
      if ( this.disallowedSection.includes('#'+jQsubEl.attr('id')) ) {
        return true;
      }
      
      const subElInfo = {
        index,
        selector: '#'+jQsubEl.attr('id'),
        min: jQsubEl.position().top,
        max: jQsubEl.position().top + jQsubEl.height()-1
      };

      this.allSectionInfo.push(subElInfo);
    });
    //- Init last index section
    this.iLastSection = this.allSectionInfo.length -1;
    //- Init the current section
    this.currentSection = this.allSectionInfo[0];
    
    this.el.on('mousewheel DOMMouseScroll', (e) => {
      this.deltaY = e.originalEvent.wheelDeltaY;
      console.log("mousewheel _deltaY : " + this.deltaY);
    })

    this.el.on('touchstart', (e) => {
      console.log("touchstart e.changedTouches[0].screenY : " + e.changedTouches[0].screenY);
    })

    this.el.on('touchend', (e) => {
      console.log("e.changedTouches[0].screenY : " + e.changedTouches[0].screenY);
    })

  }

}