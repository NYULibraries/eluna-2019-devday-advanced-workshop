import 'primo-explore-search-bar-sub-menu';

let app = angular.module('viewCustom', [
  // injecting the dependency
  'searchBarSubMenu',
]);

app.constant('searchBarSubMenuItems', [
  {
    name: "Provide Feedback",
    description: "Provide Feedback",
    action: "https://nyu.qualtrics.com/jfe/form/SV_blQ3OFOew9vl6Pb?Source=NYU",
    icon: {
      set: 'communication',
      icon: 'ic_forum_24px'
    }
  },
  {
    name: "Library Hours",
    description: "Library Hours",
    action: "https://guides.nyu.edu/library-hours",
    icon: {
      set: 'av',
      icon: 'ic_av_timer_24px'
    }
  }
]);

app.component('prmSearchBarAfter', {
  template: '<search-bar-sub-menu />'
});