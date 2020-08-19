import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
`

export const FadeWrapper = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background-color: #000;
    opacity: .5;
`

export const ModalWrapper = styled.div`
    margin: 30px auto;
    position: relative;
    padding: 2rem;
    width: 700px;
    height: auto;
    background-color: #FFF;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    background-clip: padding-box;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);

    ${media.lessThan("713px")`
        width: auto;
        height: 100%;
    `}
`

export const ButtonClose = styled.button`
    padding: 0;
    float: right;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`

export const ButtonExclude = styled.span`
    padding: 0;
    float: right;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`

export const ModalTitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: #1B552A;
    font-weight: 600;
`

export const ModalDescription = styled.p``