import React from 'react'
import { ThemeProvider } from 'styled-components'
import { respondTo } from './_respondTo'

// https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h

//Using Mixins
//https://stackoverflow.com/questions/50229154/reuse-a-mixin-with-styled-components-across-different-files

//Using Media Queries
//https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053

//Clamp
// https://blog.bitsrc.io/css-clamp-the-responsive-combination-weve-all-been-waiting-for-f1ce1981ea6e
//Clamp Calculator
// https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case

const theme = {
    ...respondTo,
    colors: {
        white: '#fff',
        darkGray: "#0d0d0d",
        orange: '#F26A2E',
        blue: '#077BF1',
    },
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    mobile: {
        fontSize: 12
    },
    tablet: {
        fontsize: 16
    },
    display: {
        fontSize: 18
    },
    sectionMixin: (radius) => `border-radius: ${radius};`,
    flexCenter: () => `display:flex;align-items: center;justify-content: center;`

}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme