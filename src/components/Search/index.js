import React,{ useState, useRef } from 'react'
import * as S from '../CardSearch/styled'
import {SearchIcon} from '../SideBarBlog/Icon'
import { navigate } from "@reach/router"

const Search = ({initialQuery = ""}) => {
    const [query, setQuery] = useState(initialQuery)

    const inputEl = useRef(null)

    const handleChange = e => {
        setQuery(e.target.value)
      }

    const handleSubmit = e => {
        e.preventDefault()
        const q = inputEl.current.value
        navigate(`/pesquisa?q=${q.trim()}`)
    }

    return(
    <form onSubmit={handleSubmit}>
        <div id="input-group" style={{ display: 'flex'}}>
            <S.InputSearch type="text" placeholder="Pesquise aqui..."
                ref={inputEl}
                value={query}
                onChange={handleChange}
            />
            <S.Button>
                <SearchIcon />
            </S.Button>
        </div>
    </form>
    )
}

export default Search