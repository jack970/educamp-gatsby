import React, { useState } from 'react'
import { maskname, maskphone, maskemail } from '../Modal/Masks'
import * as S from './styled'

const FormContact = () => {
    const [ contato, setContato ] = useState({
        nome: "",
        email: "",
        telefone: "",
        cidade: "",
        mensagem: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/.netlify/functions/hello-world',{
            method: "POST",
            body: JSON.stringify(
                contato
            ),
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
                }).then(
                    (response) => (response.json())
                ).then((messages) => {console.log(messages)})
        clearForm()
    }

    const handleAddContato = (e, mask) => {
        const { name, value } = e.target
        setContato(prevState => ({...prevState, [name]: mask ? mask(value) : value}) )
    }

    const clearForm = () => {
        setContato({})
    }

    console.log(contato)
    return(
        <S.LayoutWrapper>
            <S.ContactForm name="contact" method="post" onSubmit={(e) => handleSubmit(e)}>
                <S.ContactInput type="hidden" />
                <S.ContactInput type="hidden" />
                <S.GroupForm className="field half first">
                    <S.LabelForm htmlFor="name">Nome:</S.LabelForm>
                    <S.ContactInput type="text" name="nome" id="nome" 
                        value={contato.nome || ''}
                        onChange={(e) => handleAddContato(e, maskname)}
                    />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="email">Email:</S.LabelForm>
                    <S.ContactInput type="text" name="email" id="email" 
                        value={contato.email || ''}
                        onChange={(e) => handleAddContato(e, maskemail)}
                    />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="telefone">Telefone:</S.LabelForm>
                    <S.ContactInput type="text" name="telefone" id="telefone" 
                        value={contato.telefone || ''}
                        onChange={(e) => handleAddContato(e, maskphone)}
                    />
                </S.GroupForm>
                <S.GroupForm className="field half">
                    <S.LabelForm htmlFor="cidade">Cidade:</S.LabelForm>
                    <S.ContactInput type="text" name="cidade" id="cidade" 
                        value={contato.cidade || ''}
                        onChange={(e) => handleAddContato(e, null)}
                    />
                </S.GroupForm>
                <S.GroupForm className="field">
                    <S.LabelForm htmlFor="message">Mensagem:</S.LabelForm>
                    <S.TextArea name="mensagem" id="mensagem" rows="6" 
                        value={contato.mensagem || ''}
                        onChange={(e) => handleAddContato(e, null)}
                    />
                </S.GroupForm>
                <S.MenuButton className="actions">
                    <li>
                    <S.ButtonForm type="reset" onClick={clearForm}>Limpar</S.ButtonForm>
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