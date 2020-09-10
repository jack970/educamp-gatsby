import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
    text-align: center;
    margin: 2rem auto;
    padding: 2rem;

    ${media.greaterThan("large")`
        padding: 1rem 23rem;
    `}
`