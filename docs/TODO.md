# TODO: floss-finder

- Add up arrow icon in matches heading
    - when clicked, scroll to top of list

- Add sliders to RGB inputs

- Add an option to 'flip' ColorMatch info to show rgb and hex values

- Change needle emoji to have down arrow as well
    - On click show drop down menu of options
        - Shuffle for random color
        - Info button - show in main panel
        - Settings - show in main panel

- Make DMC code in ColorMatch component a link to the DMC page
    - See if its possible to automatically input the code in the search via the link

- Manage color better
    - Invert background colors and needle emoji when too dark
    - Use dark input background color for light input colors and light for dark input colors
        - Use rgba(255, 255, 255, 0.1) for border / bg color for dark matches
    - Change caret-color to input color except invert when too dark or bright
    - Set meta tag 'theme-color' for both prefers light and dark: 
        - ```<meta name="theme-color" content="#f9f9f9" media="(prefers-color-scheme: light)">```
        - ```<meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)">```

- Add transitions on input change

- Add other flosss brand codes

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