# TODO: floss-finder

- ~~Make entering an RGB value greater than 255 default to 255 eg 345 -> 255~~

- Fix inputs to have dark-bg and white font link in design

- Create ColorMatch component
    - Use mock props

- Create ColorMatchList component
    - Use mock props

- Get DMC floss RGB values and store appriately
    - const hashmap?

- Create distance function from rgb -> rgb

- Add derived state to ColorMatchList to create ColorMatch components for best 5 matches

- Get Anchor data

- Add toggle to switch between DMC and Anchor floss

- Pick a font style

- Change font color from white->black when inputColor is too bright

- Set meta tag 'theme-color' for both prefers light and dark: 
    - ```<meta name="theme-color" content="#f9f9f9" media="(prefers-color-scheme: light)">```
    - ```<meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)">```


- ~~Make pressing the needle icon change the color to a random color~~

- Create a thread needle SVG that animates on page load / click