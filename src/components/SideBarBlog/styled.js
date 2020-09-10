import styled from 'styled-components'
import { Link } from 'gatsby'

export const SideBarWrapper = styled.aside`
    grid-column: 5/span 2;
    grid-row: 2;
    font-size: .8rem;
    display: grid;
    grid-gap: 60px;
    grid-auto-rows: -webkit-max-content;
    grid-auto-rows: max-content;
    margin-bottom: 30px;
`

export const Title = styled.h1`
    color: #000;
    font-size: 1.3rem;
    margin-bottom: .5rem;
    font-weight: 700;
    line-height: 1.3;
`

export const InputGroup = styled.div`
    display: flex;
    
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch; 
    width: 100%; 
`

export const Input = styled.input`
    border-radius: .25rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c6c9ce;
    font-size: .8rem;   
    width: 100%;
    padding: .9rem 2rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;   
`

export const Button = styled.button`
    color: #fff;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    padding: .7rem 1rem;
    background-color: #036ff4;
    border-color: #036ff4;

`

export const SearchWrapper = styled.aside``

export const ArchivesWrapper = styled.aside``

export const SelectArchives = styled.select`
    width: 100%;
    height: calc(1.7em + 1.4rem + 2px);
    padding: .7rem 1.2rem;
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: #555c65;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c6c9ce;
    border-radius: .25rem;
    appearance: menulist;
`

export const CategoriesWrapper = styled.aside``


export const CategoriasMenu = styled.ul`
    padding-left: 2em;
`

export const CategoriasList = styled.li`
    margin-top: 1em;

    
`

export const CategoriasLink = styled(Link)`
    color: currentColor;
    text-decoration: none;
    background-color: transparent;
    font-size: .9rem;
    margin-bottom: 30px;
`

export const ButtonModal = styled.button`
    padding: .5rem .9rem;
    border-radius: .2rem;
    -webkit-box-shadow: 0 6px 30px rgba(0,0,0,.15);
    box-shadow: 0 6px 30px rgba(0,0,0,.15);
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    font-size: 1.3rem;
    color: #fff;
    background-color: #37AA53;
    border-color: transparent;
    cursor: pointer;
`