import React, { useEffect } from 'react'
import * as S from './styled'

const FormContact = () => {

    useEffect(() => {
        console.log('atualizado')
    })
    return(
        <S.LayoutWrapper>
            <S.ContactForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <S.ContactInput type="hidden" name="bot-field" />
                <S.ContactInput type="hidden" name="form-name" value="contact" />
                <S.GroupForm className="field half first">
                    <S.LabelForm htmlFor="name">Nome:</S.LabelForm>
                    <S.ContactInput type="text" name="name" id="name" />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="email">Email:</S.LabelForm>
                    <S.ContactInput type="text" name="email" id="email" />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="telefone">Telefone:</S.LabelForm>
                    <S.ContactInput type="text" name="telefone" id="telefone" />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="cidade">Cidade:</S.LabelForm>
                    <S.ContactInput type="text" name="cidade" id="cidade" />
                </S.GroupForm>
                <S.GroupForm className="field">
                    <S.LabelForm htmlFor="message">Mensagem:</S.LabelForm>
                    <S.TextArea name="message" id="message" rows="6" />
                </S.GroupForm>
                <S.MenuButton className="actions">
                    <li>
                    <S.ButtonForm type="reset">Limpar</S.ButtonForm>
                    </li>
                    <li>
                    <S.ButtonForm type="submit" className="special">Enviar Mensagem</S.ButtonForm>
                    </li>
                </S.MenuButton>
            </S.ContactForm>

        </S.LayoutWrapper>
    )
}

export default FormContact