import {
  Box,
  Button,
  Card,
  Drawer,
  FormControl,
  InputBase,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import SharedLink from "../../components/StyledLink";

export const StyledOuterBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display:'flex',
   
 
  [theme.breakpoints.down("md")]:{
    flexDirection:'column',
    alignItems:'center'
  }


}))

export const StyledTypography = styled(Typography)({
  fontSize: "18px",
  lineHeight: " 24px",
  color: "#0F1111",
});
export const StyledTitleTypography = styled(StyledTypography)({
  marginTop: "1em",
});
export const StyledCatTypography = styled(StyledTypography)({
  marginTop: "-3em",
  color:'#565959',
  fontSize:'12px'
});
export const StyledFormControl = styled(FormControl)({
    display: "flex",marginTop:'1em' ,
    marginBottom:'5em',
  
});
export const StyledInStockTypo = styled(StyledTypography)({
  color:  "#007600",
  marginTop:'4em'
})
export const StyledCartBox = styled(Box)({
  display: "flex",
  padding: "1em",
  paddingLeft: 0,
  marginBottom:'1em'
});
export const StyledRatingBox = styled(Box)({
  display: "flex",
  padding: "1em",
  alignItems: "center",
});
export const StyledPriceDetailsBox = styled(Box)({
    display: "flex", padding: "1em"
})
export const StyledPriceTypo = styled(StyledTypography)({
  fontSize: "28px",
});
export const StyledDetailsBox = styled(StyledTypography)({
  fontWeight: 700,
  margin:'1em'
});
export const StyledDetailsTypo = styled(StyledTypography)({
  padding: "1em",
  paddingTop: 0,
});
export const StyledLink = styled(SharedLink)({
  fontSize: "18px",
  lineHeight: "20px",
  marginRight:'1em'
});
export const StyledCartButton = styled(Button)({
  background: "#FFD814",
  width: "100%",
  borderColor: "#FCD200",
  borderRadius: "100px",
  color: "#0F1111",
  marginTop:'1em',
  '&:hover':{
    background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
  }
});
export const StyledLeftContainer = styled(Box)({
  height: " 100vh",
  top: " 0px",
  display: "flex",
  padding: "20px",
  marginTop: "9vh",
  flexDirection: "column",
});
export const StyledRightContainer = styled(Box)({
  width: "55%",
  margin: " 10px",
  marginTop: "30vh",
  marginRight: "39px",
});
export const StyledFlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
export const StyledCard = styled(Card)({
  minWidth: "200px",
  padding: "0 18px 0 43px",
  margin: "4em",
  paddingTop:'1em',
  paddingBottom:'1em'
});
export const SideImagesContainer = styled(Box)({
  height: "fit-content",
  border: "none",
  
});
export const DisplayImageContainer = styled("div")({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "100%",
});
export const StyledSideImage = styled(Box)({
  width: "60px",
  height: "60px",
  cursor: "pointer",
  margin: "10px",
  borderRadius:'8px',
  border: '1px solid #888C8C',
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  "&:hover":{
    boxShadow:'0 0 0 3px #C8F3FA',
    borderColor:'#007185'
  }
});
export const DisplayImage = styled(Box)({
  width: "90%",
  height: "70%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});
export const TextInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "1.5em",
    color: "black",
    height: "31px",
  },

  "& .MuiInputBase-input": {
    borderTopColor: "#949494",
    width:'30%',
    fontSize: 16,
    padding: "3px 7px",
    borderRadius: "7px",
    background: "#F0F2F2",
    boxShadow: "0 2px 5px rgba(15,17,17,.15)",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      borderColor: " #edfdff",
      boxShadow: " 0 0 3px 5px #edfdff",
    },
  },
}));
export const StyledInputLabel = styled(InputLabel)({
  color: "#0F1111",
  fontSize: "16px",
});
export const StyledDrawer = styled(Drawer)({
  position: 'fixed',
  zIndex:'5001',
  minWidth:' 675px',
  bottom: '0',
  
  margin: 0,
  borderWidth: 0,
  boxShadow: '-4px 0 5px rgba(0,0,0,.25)',
  ".MuiDrawer-paper":{
    minWidth:'675px'
  }
 
})
export const InnerDrawerBox = styled(Box)({
  display:'flex',
  columnGap:'1em',
  padding:'2em',
  background:'#fff'
 
 
})
export const AddedTypo = styled(Typography)({
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '24px',
})
export const DrawerOuterButtonsBox = styled(Box)({
  display:'flex',
  flexDirection:'column',
  rowGap:'0.5em'
})
export const DrawerButtonsBox = styled(Box)({
  display:'flex',
  flexDirection:'row',
  columnGap:'1em'
})
export const CartBtn = styled(Button)({
  background: '#FFF',
  borderRadius: '3px',
  borderColor: '#D5D9D9',
  borderStyle: 'solid',
  borderWidth:' 1px',
  
  textAlign: 'center',
  textDecoration:' none',
  verticalAlign: 'middle',
  color:' #0F1111',
  textTransform:'capitalize',


})
export const ProceedCheckoutBtn = styled(Button)({
  background: '#FFD814',
  borderColor:' #FCD200',
  marginLeft: '10px',
  minWidth: '236px',
  color:' #0F1111',
  textTransform:'capitalize',
  "&:hover":{
    background: '#FFD814',
    borderColor:' #FCD200',
  }
})
export const StyledSideDrawerImage = styled(Box)({
  width: "60px",
  height: "60px",
  cursor: "pointer",
  margin: "10px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
 
});
export const StyledImageDrawerBox = styled(Box)({
  display:'flex',
  flexDirection:'column',
  rowGap:'1em',
  justifyContent:'center',

})
export const StyledOuterBackBox = styled(Box)({
  width:'100%',
  height:'100%',
  backgroundColor:'#E7E7E7',
})

export const StyledBtnTitle = styled(Typography)({
 color:' #0F1111',
 fontSize:'18px',
 paddingLeft:'1em'
})