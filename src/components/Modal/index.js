import React, { useState, useEffect} from 'react'
import * as S from './styled'
import * as Form from '../FormContact/styled'
import { maskphone, maskemail, maskname} from './Masks'

const Modal = ({open, setModal, productList}) => {
    const [ products, setProducts] = useState([])
    const [ input, setInput] = useState({})

    useEffect(() => {
        setInput(inputs => ({...inputs, "Produtos": products}))
        
    }, [products])

    const handleAddMask  = (e, mask, setInput) => {
        e.persist()
        setInput(inputs => ({ ...inputs, [e.target.name]: mask ? mask(e.target.value) : e.target.value }))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/.netlify/functions/hello-world',{
            method: "POST",
            body: JSON.stringify(
                input
            ),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
                }).then(
                    (response) => (console.log(response.json()))
                ).then((messages) => {console.log(messages)})

            resetForm()
    }

    const handleAddQuantidade = (e, id) => {
        const { value } = e.target
        const values = [...products]
        values[id].quantidade = value
        setProducts(values)
    }

    const handleAddProduct = (e) => {
        e.persist()
        const {name, value } = e.target
        
        if(products) {
            setProducts(produto => ([...produto, { [name]: value}]))
        }
    }

    const resetForm = () => {
        setInput({})
        setProducts([])
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
                    >
                    <Form.GroupForm className="field">
                        <Form.LabelForm htmlFor="nome">Nome:</Form.LabelForm>
                        <Form.ContactInput 
                        name="nome" 
                        id="nome" 
                        value={input.nome || ''}
                        onChange={(e) => handleAddMask(e, maskname, setInput)} 
                        required/>
                    </Form.GroupForm>
                        <Form.GroupForm className="field half">
                        <Form.LabelForm htmlFor="email">Email:</Form.LabelForm>
                        <Form.ContactInput type="text" 
                        name="email" 
                        value={input.email || ''}
                        onChange={(e) => handleAddMask(e, maskemail, setInput)} 
                        id="email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
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
                        <Form.Select name='nome' onChange={(e) => handleAddProduct(e)}>
                            {productList.map(({node}, id) => (
                                <Form.Option value={node.frontmatter.title} key={id}>{node.frontmatter.title}</Form.Option>
                            ))}
                        </Form.Select>
                    </Form.GroupForm>
                    <ul>
                        {products.map((product, id) => {
                            return(
                            <Form.ListBadge key={id}>
                                    {product.nome} &emsp; &ensp; Quantidade:
                                    <input style={{ width: '5rem'}} name="quantidade" type='number'
                                        value={product.quantidade || ''}
                                        onChange={(e) => handleAddQuantidade(e, id)}
                                    />
                                    <Form.CloseBadge onClick={() => handleRemoveProduct(product)}
                                    >X</Form.CloseBadge>
                            </Form.ListBadge>
                        ) })}
                    </ul>
                    <Form.GroupForm className="field">
                        <Form.LabelForm htmlFor="message">Mensagem:</Form.LabelForm>
                        <Form.TextArea name="mensagem" id="message" rows="6" 
                            value={input.mensagem || ''}
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