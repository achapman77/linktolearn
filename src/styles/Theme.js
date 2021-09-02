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
            light:'rgb(244, 157, 120)',
            main:'rgb(242, 106, 46)',
            dark:'rgb(191, 83, 36)'
        },
        secondary: {
            light:'rgb(81, 163, 244)',
            main:'rgb(7, 123, 241)',
            dark:'rgb(38, 76, 115)'
        },
        gray:{
            light:'rgb(247, 247, 247)',
            main:'rgb(113, 113, 113)',
            dark:"rgb(65, 65, 65)"
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