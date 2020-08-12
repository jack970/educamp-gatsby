import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    padding: 0 10rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
`

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background: white;
  display: flex;

  ${media.lessThan("small")`
      display: block;
    `}
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: white;
  color: black;
  display: flex;
  padding: 2rem 1rem;
  text-decoration: none;
  width: 50%;

  ${media.lessThan("small")`
      
      width: 100%;
    `}

  transition: color .15s ease-in-out;

  h1 {
      margin: 0 2rem;
  }

  p {
      line-height: 1.5rem;
      margin-top: 1rem;
      font-weight: 500;
      font-size: 20px;
  }
 
  &:hover {
    color: #196D31;
  }
  &.previous {
    border-right: 1px solid #dbe2e8;

    ${media.lessThan("small")`
      border-top: 1px solid #37aa53;
    `}
  }
  &.next {
    justify-content: flex-end;
    text-align: right;

    ${media.lessThan("small")`
      border-top: 1px solid #37aa53;
    `}
  }
  &.next:only-child {
    margin-left: auto;
    border-left: 1px solid #dbe2e8;
  }
`