import { Box,styled ,Typography,Link} from "@mui/material";
export const StyledFlexBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    "&:hover":{
        border:'1px solid white',
        padding:'0.5em'

    }
  });
 export const StyledColumnFlexBox = styled(Box)({
    display: "flex",
    flexDirection:'column',
   
   
  });
  export const StyledMainTitle = styled(Typography)({
    fontSize: "14px",
  });
  export const StyledHeaderLink = styled(Link)({
   color:'white'
  })