import styled,{css} from "styled-components"
const H1=styled.h1`

${(props)=>props.as==="h1"&&
css`
font-size:54rem;
color:#5389
`

}

`
export default H1;