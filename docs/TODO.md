# TODO: floss-finder

- Instead of clamping size of components, clamp size of AppContainer and let components fill its width

- Create ColorMatchList component
    - Use mock props
    - Make it a scrollable div with as many color match components as you want
        - Make div take up same portion of screen for any device but still scrollable

- Get DMC floss RGB values and store appriately
    - const hashmap?

- Create distance function from rgb -> rgb

- Render ColorMatchList to contain all matches

- Get Anchor data

- Add toggle to switch between DMC and Anchor floss

- Create a thread needle SVG that animates on page load / click

- Manage color better
    - Invert background colors and needle emoji when too dark
    - Use dark input background color for light input colors and light for dark input colors
    - Change caret-color to input color except invert when too dark or bright
    - Set meta tag 'theme-color' for both prefers light and dark: 
        - ```<meta name="theme-color" content="#f9f9f9" media="(prefers-color-scheme: light)">```
        - ```<meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)">```

- Add transitions on input change

## Done
- ~~Make entering an RGB value greater than 255 default to 255 eg 345 -> 255~~
- ~~Create ColorMatch component~~
    - ~~Use mock props~~
- ~~Pick a font style~~
- ~~Make pressing the needle icon change the color to a random color~~
- ~~Add max width to components by using clamp (make responsive for desktops)~~
- ~~Make it more obvious that needle icon is a button~~