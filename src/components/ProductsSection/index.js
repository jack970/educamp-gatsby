import React from 'react'
import * as S from './styled'
import {MainContent, PostHeader, TitleProduct} from '../Post/styled'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs'

const ProductsSection = ({title, conteudo, price, image, image1, image2}) => {
    return(
        <S.LayoutWrapper>
            <S.ProductsDetails>
                <S.ProductsImage>
                    <Tabs>
                        <TabPanel>
                            <S.CustomPanel>
                                <Tab>
                                    <S.ProductsImages fluid={image.childImageSharp.fluid} />
                                </Tab>
                            </S.CustomPanel>
                        </TabPanel>
                        {image1 && (
                            <TabPanel>
                                <S.CustomPanel>
                                    <Tab>
                                        <S.ProductsImages fluid={image1.childImageSharp.fluid} />
                                    </Tab>
                                </S.CustomPanel>
                            </TabPanel>
                        )}
                        {image2 && (
                            <TabPanel>
                                <S.CustomPanel>
                                    <Tab>
                                        <S.ProductsImages fluid={image2.childImageSharp.fluid} />
                                    </Tab>
                                </S.CustomPanel>
                            </TabPanel>
                        )}              
                        <TabList>
                            <Tab>
                                <S.ProductsImages fluid={image.childImageSharp.fluid} />
                            </Tab>

                        {image1 && (
                            <Tab>
                                <S.ProductsImages fluid={image1.childImageSharp.fluid} />
                            </Tab>
                        )}
                        {image2 && (
                            <Tab>
                                <S.ProductsImages fluid={image2.childImageSharp.fluid} />
                            </Tab>
                        )}
                        </TabList>
                    </Tabs>
                </S.ProductsImage>
                <PostHeader>
                    <TitleProduct >
                        {title}
                    </TitleProduct>
                    {/* <S.ProductsPrice>Preço: R${price.toLocaleString(undefined, {maximumFractionDigits:2})}</S.ProductsPrice> */}
                </PostHeader>
                <MainContent>
                    <div dangerouslySetInnerHTML={conteudo} />
                </MainContent>
            </S.ProductsDetails>
        </S.LayoutWrapper>
    )
}

export default ProductsSection