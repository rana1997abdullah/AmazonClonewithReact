import { Box, Button, Typography, styled } from "@mui/material";
import SharedLink from "../../components/StyledLink";

export const StyledOuterBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    padding:'2em',
  
})
export const StyledInnerBox = styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  })
export const StyledListBox = styled(Box)(({ theme }) => ({
    display:'flex',
   
    flexWrap:'wrap',
    marginTop:'1em',
    marginBottom:'4em'
   
}))
export const StyledTypography = styled(Typography)({
    
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '36px',
    color:'#0f1111',
    paddingLeft:'0.5em'
 

})
export const StyledButton = styled(Button)({
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '8px',
    padding:' 8px 18px',
    textAlign: 'center',
    margin:'1em',
    fontWeight:700,
    marginTop:'2em',
}
)
export const StyledSharedLink = styled(SharedLink)({
    fontSize:'18px',
    lineHeight:'24px',
    textTransform:'capitalize'
})