import styled from "@emotion/styled";
import { Link } from "@mui/material";
const StyledLink = styled(Link)({
    color:'#007185',
    fontSize:'10px',
    '&:hover':{
        color:'#C7511F',
        textDecorationColor:'#C7511F'
    }
})
const SharedLink = (props)=>{

    return(
        <StyledLink 
        {...props}
        underline="hover" 
      
        > {props.title}</StyledLink>
    )
}
export default SharedLink;