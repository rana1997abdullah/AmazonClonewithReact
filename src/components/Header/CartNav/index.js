import { Box,Badge,IconButton,Typography, styled } from "@mui/material";
import { StyledHeaderLink } from "../../SharedStyles";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const StyledCartBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  "&:hover":{
      border:'1px solid white',
      paddingLeft: '0.5em',
      paddingRight:'0.5em',
    
  }
})
const StyledTypography = styled(Typography)({
  marginTop:'1em',
  marginLeft:'-1em'
});
const StyledShoppingCartIcon = styled(ShoppingCartOutlinedIcon)({
  fontSize:'28px'
});
const CartNav = ()=>{
   

    return(
        <StyledHeaderLink underline="none" >
        <StyledCartBox >
          <IconButton
            size="large"
            aria-label="show  new notifications"
            color="inherit"
            
          >
            <Badge badgeContent={1} color="error">
              <StyledShoppingCartIcon/>
            </Badge>
          </IconButton>
        <StyledTypography> Cart</StyledTypography> 
    
        </StyledCartBox>
        </StyledHeaderLink>
    )
}
export default CartNav;
