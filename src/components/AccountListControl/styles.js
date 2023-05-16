import { Box, ListItem,styled,Button } from "@mui/material";

export const StyledFlexBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    margin:'1em',
    width:'100%',
    justifyContent:'space-between',
    columnGap:'2em'
  });
  export const StyledColumnFlexBox = styled(Box)({
    display: "flex",
    alignItems: "flex-start",
    flexDirection:'column',
    paddingTop:'0.5em'

   
  });
  
  export const StyledBasicFlexBox = styled(StyledColumnFlexBox)({
    alignItems: "center",

  });
 export  const StyledSigninButton = styled(Button)({
    background: '#FFD814',
    border:'1px solid #FCD200',
    color:'black',
    height:'33px',
    borderRadius:'8px',
    width:'100%',
    boxShadow: '0 2px 5px 0 rgba(213,217,217,.5)',
    fontSize:'13px',
    textTransform:'capitalize',
    "&:hover":{
        background: '#FFD814',
        textDecoration:'underline'
    }

  })
 export const StyledListItem = styled(ListItem)({
    paddingLeft:0,
    paddingRight:0
  })
  export const StyledInnerColumnBox = styled(StyledColumnFlexBox)({
    marginTop:'-279.4px'
  })
