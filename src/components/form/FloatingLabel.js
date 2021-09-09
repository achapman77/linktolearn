import styled from "styled-components";



export const FloatingLabel = styled.div`
    position:relative; 
    margin:1.5rem 0;
    min-height: 62px;

    input, select, textarea {
        padding:7px 4px;
        padding-left: 35px;
        display:block;
        width:100%;
        height:auto;
        background-color: transparent;
        border:none;
        border-bottom:1px solid ${props => props.theme.colors.gray.dark};
        color: ${props => props.theme.colors.gray.dark};
        margin-bottom: 5px;
        
        &:focus{
            outline:none;
            border-bottom:2px solid ${props => props.theme.colors.primary.main}; 
        }
        &:focus ~ svg{
            color: ${props => props.theme.colors.primary.main}; 
        }
        
    }

    textarea {
        resize:vertical;
        min-height: fit-content;
        &:focus, &:not(:placeholder-shown){
            height: 200px;
        }
    }

    input, textarea {
        &:focus ~ label,  &:not(:placeholder-shown) ~ label {
            top:-18px;
            font-size:14px;
            color:${props => props.theme.colors.primary.main};
        }
        &:not(:focus) ~ label {
            color:${props => props.theme.colors.gray.main};
        }
    }

    select {
        &:focus ~ label, &.active ~ label {
            top:-18px;
            font-size:14px;
            color:${props => props.theme.colors.primary.main};
        }
        &:not(:focus) ~ label {
            color:${props => props.theme.colors.gray.main};
        }
    }

    label {
        color:${props => props.theme.colors.gray.main}; 
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        left:35px;
        top:5px;
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
        display: flex;
        align-items: center;
        svg {
            margin-right: 5px;
        }
    }
    svg {
        position:absolute;
        pointer-events:none;
        left:5px;
        top: 5px;  
        color:${props => props.theme.colors.gray.main};
        font-size: clamp(1rem, 5vw, 1.5rem);
    }

    .errorMessage {
        color: ${props => props.theme.colors.error.dark};
        margin-top: 5px;
        font-size: 0.8rem;
    }
`

