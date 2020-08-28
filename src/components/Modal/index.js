import React, { useState } from 'react'
import * as S from './styled'
import * as Form from '../FormContact/styled'
import { maskphone, maskemail, maskname, handleAddMask} from './Masks'
import { useEffect } from 'react'

const Modal = ({open, setModal, productList}) => {

    const [ products, setProducts] = useState([])
    const [ input, setInput] = useState({})

    useEffect(() => {
        setInput(inputs => ({...inputs, 'Produtos': products}))
    }, [products])

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3002/send',{
            method: "POST",
            body: JSON.stringify(input),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
                }).then(
                    (response) => (response.json())
                ).then((response)=>{
                    if (response.status === 'success'){
                        alert("Mensagem enviada.")
                        resetForm()
                }
                    else if(response.status === 'fail'){
                        alert("Falha ao enviar a mensagem.")
                }
        })
    }

    const resetForm = () => {
        setInput({})
        setProducts([])
    }

    function handleAddProduct(e) {
        const value = e.target.value
        const index = products.indexOf(value)
        
        if(index === -1) {
            setProducts([...products, value])
        }
        console.log(input)
    }
    
    const handleRemoveProduct = productItem => {
        setProducts(products.filter(product => product !== productItem))
    }

    return(
    <S.LayoutWrapper open={open}>
        <S.FadeWrapper/>
        <div>
            <S.ModalWrapper >
                <S.ButtonClose onClick={() => setModal(!open)}>X</S.ButtonClose>
                <S.ModalTitle>Solicite Orçamento</S.ModalTitle>
                <Form.ContactForm 
                    name="Produtos" 
                    method="post" 
                    onSubmit={(e) => handleSubmit(e)}
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    >
                    <Form.GroupForm className="field">
                        <Form.LabelForm htmlFor="nome">Nome:</Form.LabelForm>
                        <Form.ContactInput 
                        name="Nome" 
                        id="nome" 
                        value={input.Nome || ''}
                        onChange={(e) => handleAddMask(e, maskname, setInput, products)} 
                        required/>
                    </Form.GroupForm>
                        <Form.GroupForm className="field half">
                        <Form.LabelForm htmlFor="email">Email:</Form.LabelForm>
                        <Form.ContactInput type="text" 
                        name="email" 
                        value={input.email || ''}
                        onChange={(e) => handleAddMask(e, maskemail, setInput)} 
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                        required/>
                    </Form.GroupForm>
                    <Form.GroupForm className="field half">
                        <Form.LabelForm htmlFor="telefone">Telefone:</Form.LabelForm>
                        <Form.ContactInput type="text" name="telefone"
                         id="telefone" 
                         value={input.telefone || ''}
                         onChange={(e) => handleAddMask(e, maskphone, setInput)} 
                         />
                    </Form.GroupForm>
                    <Form.GroupForm className="field half">
                        <Form.LabelForm htmlFor="cidade">Cidade:</Form.LabelForm>
                        <Form.ContactInput type="text" 
                            name="cidade" 
                            id="cidade" 
                            value={input.cidade || ''}
                            onChange={(e) => handleAddMask(e, null, setInput)} 
                            required/>
                    </Form.GroupForm>
                    <Form.GroupForm>
                        <Form.LabelForm htmlFor="ListaProdutos">Escolha um Produto:</Form.LabelForm>
                        <Form.Select name={`Produtos${products}`}  onChange={(e) => handleAddProduct(e)}>
                            {productList.map(({node}, id) => (
                                <Form.Option value={node.frontmatter.title} key={id}>{node.frontmatter.title}</Form.Option>
                            ))}
                        </Form.Select>
                    </Form.GroupForm>
                    <ul>
                        {products.map((product, id) => {
                            return(
                            <Form.ListBadge key={id}>
                                    {product}
                                    <Form.CloseBadge onClick={() => handleRemoveProduct(product)}
                                    >X</Form.CloseBadge>
                            </Form.ListBadge>
                        ) })}
                    </ul>
                    <Form.GroupForm className="field">
                        <Form.LabelForm htmlFor="message">Mensagem:</Form.LabelForm>
                        <Form.TextArea name="message" id="message" rows="6" 
                            value={input.message || ''}
                            onChange={(e) => handleAddMask(e, null, setInput)} 
                        />
                    </Form.GroupForm>
                        <Form.MenuButton className="actions">
                        <li>
                        <Form.ButtonForm type="reset" onClick={resetForm}>Limpar</Form.ButtonForm>
                        </li>
                        <li>
                        <Form.ButtonForm type="submit" className="special">Enviar Mensagem</Form.ButtonForm>
                        </li>
                    </Form.MenuButton>
                </Form.ContactForm>
            </S.ModalWrapper>
        </div>
    </S.LayoutWrapper>

)}

export default Modal