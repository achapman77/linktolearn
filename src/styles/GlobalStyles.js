import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        overflow-x: hidden;
    }
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
	    background-color: ${props => props.theme.colors.gray.dark};
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
    h2 {
        font-size: clamp(1.2rem, 5vw, 3rem);
        color: #000;
    }
    h3 {
        font-size: clamp(1rem, 5vw, 2.25rem);
        color: #000;
    }
    h4 {
        font-size: clamp(1rem, 5vw, 1.75rem);
        color: #000;
    }
    p, input, label, select, textarea {
        font-size: clamp(1rem, 0.8125rem + 0.8333vw, 1.25rem);
    }
    .sectionHeader {
        display: flex;
        flex-flow: column;
        align-items: center;
        h2 {
            margin-bottom: 1rem;
        }
    }
`