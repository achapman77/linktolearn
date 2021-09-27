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
        primary: {
            light:'rgb(224, 237, 206)',
            main:'rgb(140, 198, 63)', 
            dark:'rgb(77, 119, 17)'
        },
        secondary: {
            light:'rgb(0, 211, 252)',
            main:'rgb(0, 155, 195)',
            dark:'rgb(0, 81, 99)'
        },
        gray:{
            light:'rgb(237, 237, 237)',
            main:'rgb(88, 88, 90)',
            dark:"rgb(45, 45, 45)"
        },
        error:{
            light:'rgb(229, 115, 115)',
            main:'rgb(244, 67, 54)',
            dark:"rgb(211, 47, 47)"
        }
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