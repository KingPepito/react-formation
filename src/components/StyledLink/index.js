import {Link} from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
 color: ${({theme}) => theme.colors.attineos}; 
`
export default StyledLink