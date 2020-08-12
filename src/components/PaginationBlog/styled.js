import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    padding: 0 9rem;

    ${media.lessThan("small")`
      padding: 0;
    `}
`

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #000;
  color: #000;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {

    color: #222;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
  
  ${media.lessThan("small")`
      font-weight: 700;
    `}  
  `