### Adding an `npm` dependency

One common way of delivering and using other institutions' customizations is through the [npm repository](http://npmjs.com/). Let's try adding one of these customizations.

1. Ensure your `custom` folder is mounted as a volume, then open an Alpine shell process in the Docker container defined by the `web` service
      ```sh
      docker-compose run web sh # Opens a shell within the container
      ```
1. Navigate to the `NYU` directory and add the dependency with yarn.
      ```sh
      # Within the container...
      cd primo-explore/custom/NYU
      yarn add primo-explore-search-bar-sub-menu
      ```

      You will then see the changes reflected in your `package.json` file (read with `cat package.json`)!

      ```js
      {
        "name": "primo-explore-nyu",
        "version": "1.0.0",
        "description": "This the NYU Consortium primo-explore view package.",
        "main": "js/main.js",
        "dependencies": {
          "primo-explore-search-bar-sub-menu": "^1.0.7"
        }
      }
      ```
1. To implement this in your running development instance, we can [follow the module's documentation](primo-explore-search-bar-sub-menu)

      ```js
      // Imports the module
      import 'primo-explore-search-bar-sub-menu';

      // Defines the modules on the angular instance
      let app = angular.module('viewCustom', [
        'searchBarSubMenu',
      ]);

      // Configures the modules
      app.constant('searchBarSubMenuItems', [{
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

      // 'Injects' the module
      app.component('prmSearchBarAfter', {
        template: '<search-bar-sub-menu></search-bar-sub-menu>'
      });
      ```