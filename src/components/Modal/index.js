import React, { useState } from 'react'
import * as S from './styled'
import * as Form from '../FormContact/styled'

const Modal = ({open, setModal, productList}) => {

    const [ products, setProducts] = useState([])

    function handleAddProduct(e) {
        const value = e.target.value
        const index = products.indexOf(value)
        if(index === -1) {
            setProducts([...products, e.target.value])
        }
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
                <Form.ContactForm name="Produtos" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <Form.GroupForm>
                        <Form.LabelForm htmlFor="ListaProdutos">Escolha um Produto:</Form.LabelForm>
                        <Form.Select onChange={(e) => handleAddProduct(e)}>
                            {productList.map(({node}, id) => (
                                <Form.Option value={node.frontmatter.title} key={id}>{node.frontmatter.title}</Form.Option>
                            ))}
                        </Form.Select>
                    </Form.GroupForm>
                    <ul>
                        {products.map(product => 
                            (<Form.ListSelected key={product}>
                                    {product}
                                    <S.ButtonExclude onClick={() => handleRemoveProduct(product)}
                                    >X</S.ButtonExclude>
                            </Form.ListSelected>) )}
                    </ul>
                    <Form.GroupForm className="field">
                        <Form.LabelForm htmlFor="message">Mensagem:</Form.LabelForm>
                        <Form.TextArea name="message" id="message" rows="6" />
                    </Form.GroupForm>
                        <Form.MenuButton className="actions">
                        <li>
                        <Form.ButtonForm type="reset" onClick={() => setProducts([])}>Limpar</Form.ButtonForm>
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