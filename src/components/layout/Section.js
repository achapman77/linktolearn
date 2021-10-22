import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-flow: column;
    /* justify-content: center; */
    align-items: center;
    min-height: 100vh;
    padding: 5rem calc((100vw - 2000px) / 2 );
`

export const SectionHeader = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
    ${props => props.theme.lg`
        padding-bottom: 2rem;
    `}
    h2 {
        margin-bottom: 1rem;
        text-align: center;
    }
    p {
        margin: 0 1rem;
        text-align: center;
        max-width:50rem;
        /* max-width: 80vw; */
    }
    hr {
        background: ${props => props.theme.colors.primary.main};
        width: 45vw;
        height: 0.25em;
    }
  
    
    ${props => props.theme.xs`
       p{text-align: left;}
    `}

`
export const Container = styled.div`
    width: -webkit-fill-available;
    padding: 0rem calc((100vw - 2000px) / 2 );
    display: flex;
    justify-content: center;
    align-items: center;
`

