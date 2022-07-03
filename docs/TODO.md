# TODO: floss-finder

- Add Anchor codes to ColoMatches

- Use a better color distance function
    - http://godsnotwheregodsnot.blogspot.com/2012/09/color-space-comparisons.html?m=1

- Add transitions on input change

- Add up arrow icon in matches heading
    - when clicked, scroll to top of list

- Add sliders to RGB inputs

- Add an option to 'flip' ColorMatch info to show rgb and hex values

- Change needle emoji to have down arrow as well
    - On click show drop down menu of options
        - Shuffle for random color
        - Info button - show in main panel
        - Settings - show in main panel


## Done
- ~~Make entering an RGB value greater than 255 default to 255 eg 345 -> 255~~
- ~~Create ColorMatch component~~
    - ~~Use mock props~~
- ~~Pick a font style~~
- ~~Make pressing the needle icon change the color to a random color~~
- ~~Add max width to components by using clamp (make responsive for desktops)~~
- ~~Make it more obvious that needle icon is a button~~
- ~~Instead of clamping size of components, clamp size of AppContainer and let components fill its width~~
- ~~Create ColorMatchList component~~
    - ~~Use mock props~~
    - ~~Make it a scrollable div with as many color match components as you want~~
        - ~~Make div take up same portion of screen for any device but still scrollable~~
- ~~Get DMC floss RGB values and store in JSON file~~
- ~~Fix view height issue on mobile where browser bars included in 100vh~~
    - ~~https://css-tricks.com/the-trick-to-viewport-units-on-mobile/~~
- ~~Create distance function from rgb -> rgb~~
- ~~Render ColorMatchList to contain all matches~~
- ~~Add a footer to the page~~
    - ~~Include link to repo (when public)~~
        - ~~Link to profile for now while repo is private~~
        - ~~Link to DMC floss site~~