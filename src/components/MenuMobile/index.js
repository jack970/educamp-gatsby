import React from 'react'
import * as S from './styled'
import {MenuIcon} from './icon'

const MenuMobile = ({open, setOpen}) => {
    return (
        <S.LayoutWrapper>
            <S.Button  onClick={() => setOpen(!open)}>
                <span>
                    <MenuIcon />
                </span>
            </S.Button>
        </S.LayoutWrapper>

    )
}

export default MenuMobile