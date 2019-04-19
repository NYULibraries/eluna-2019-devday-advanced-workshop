/* Notice how we import the index file, which is the compiled version of our source code. */
/* We need to run 'yarn build --watch' in order to continually recompile if we make changes to the module */
/* When the module is published to NPM, we can just import 'primo-explore-custom-search-bar-sub-menu' instead */
import '../../../modules/primo-explore-custom-search-bar-sub-menu/dist/index';

let app = angular.module('viewCustom', [
  // injecting the dependency
  'primoExploreCustomSearchBarSubMenu',
]);

app.constant('customSearchBarSubMenuConfig', {
  backgroundColor: '#CCD0D5',
  items: [{
      name: 'Library Website',
      description: 'Library Website',
      link: 'https://library.nyu.edu',
      icon: {
        set: 'communication',
        icon: 'ic_forum_24px'
      }
    },
    {
      name: 'Library Hours',
      description: 'Library Hours',
      link: 'https://guides.nyu.edu/library-hours',
      icon: {
        set: 'av',
        icon: 'ic_av_timer_24px'
      }
    }
  ],
});

app.component('prmSearchBarAfter', {
  template: '<custom-search-bar-sub-menu />'
});