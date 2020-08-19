import React from 'react'
import * as S from './styled'
import {MenuIcon, XCircleMobile} from '../SideBarBlog/Icon'

const MenuMobile = ({open, setOpen}) => {
    return (
        <S.LayoutWrapper>
            <S.Button  onClick={() => setOpen(!open)}>
                <span>
                    {open ?  <XCircleMobile /> : <MenuIcon />}
                </span>
            </S.Button>
        </S.LayoutWrapper>

    )
}

export default MenuMobile