import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
    }
    ::-webkit-scrollbar {
        width: 6px;
	    background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0d0d0d;
        /* background-color: #FFF;
	    background-image: -webkit-gradient(linear,
									   40% 0%,
									   75% 84%,
									   from(#4D9C41),
									   to(#19911D),
									   color-stop(.6,#54DE5D)) */
    }
`