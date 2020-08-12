import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    margin: auto;
    padding: 2rem 0;
    max-width: 40rem;
`

export const ContactForm = styled.form``

export const ContactInput = styled.input`
    display: inline-block;
    width: 100%;
    // max-width: 500px;
    height: 40px;
    padding: 9px 10px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    color: #33475b;
    border: 1px solid #cbd6e2;
`

export const GroupForm = styled.div`
    margin: 2rem 0;
`

export const ButtonForm = styled.button`
    cursor: pointer;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    background: #37AA53;
    border-color: #37AA53;
    color: #ffffff;
    font-size:17px;
    font-weight: 700;
    line-height: 12px;
    padding: 12px 24px;
    font-family: arial, helvetica, sans-serif;
`

export const LabelForm = styled.label`
    font-size: 17px;
    width: 130px;
    text-align: right;
    color: #33475b;
    display: block;
    float: none;
    width: auto;
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    padding-top: 0;
    margin-bottom: 4px;
`

export const TextArea = styled.textarea`
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    width: 100%;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`

export const MenuButton = styled.ul`
    display: flex;
    justify-content: space-between;
`