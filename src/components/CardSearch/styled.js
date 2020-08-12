import styled from 'styled-components'
import { Link } from 'gatsby'

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 30px;
    margin: 4rem auto;
    max-width: 1140px;
    padding: 0 2rem;
`

export const LayoutWrapper = styled.article`
    background-color: #fff;
    flex-direction: column;
    display: flex;
    padding: 1.25rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .3rem;
    box-shadow: 0 6px 30px rgb(0 0 0 / 51%);
    overflow: hidden;

    #input-group {
        display: flex;
    }
`

export const LinkPost = styled(Link)``

export const TitlePost = styled.h1`
    margin-bottom: .75rem;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
    font-family: Encode Sans Semi Expanded,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    color: #106541;
`

export const ContentPost = styled.p`
    margin-bottom: 1rem;
    color: #333;
    font-weight: 500;`
    

export const DatePost = styled.p`
    color: #333;
`

export const InputSearch = styled.input`
    display: inline-block;
    width: 100%;
    height: 50px;
    padding: 9px 10px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    color: #33475b;
    border-radius: .25rem;
    border: 1px solid #cbd6e2;

    :focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(3 111 66 / 95%);
    }
`

export const Button = styled.button`
    color: #fff;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    padding: .7rem 1rem;
    background-color: #036ff4;
    border-color: #036ff4;

`