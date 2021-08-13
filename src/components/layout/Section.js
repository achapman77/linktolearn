import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const SectionHeader = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    h2 {
        margin-bottom: 1rem;
    }
`
export const Container = styled.div`
    width: -webkit-fill-available;
    padding: 0rem calc((100vw - 2000px) / 2 );
    display: flex;
    justify-content: center;
    align-items: center;
`

