import styled  from 'styled-components'

const SpanTask = styled.span`
    margin: 8px;
    cursor: pointer;
    background-color: ${({completed}) => completed ? "red" : "green" };
    ${({completed}) => completed && `text-decoration: line-through;` }
`

export default SpanTask