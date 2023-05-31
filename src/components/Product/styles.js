import styled from "@emotion/styled"
import { CardContent, Typography,Box, Card } from "@mui/material"

export const StyledCard = styled(Card)({
    margin:'1em',
    height:'auto',
    marginTop:'2em',
    minHeight:'500px',
    borderBottom:'2px solid #ddd',
    flexGrow: '1',
    marginBottom: '-2px',
    padding: '2px 6px 6px',
    width: '261px',
    display:'flex',
    padding:'0em',
    flexDirection:'column'
    

})
export const StyledContent = styled(CardContent)({
    justifyContent:'center',
    display:'flex',
    background:'#f8f8f8'
})
export const StyledImage = styled(Box)({
    mixBlendMode:'multiply',
    filter:'contrast(1)',
    height: 250,
    width: 152,
    
})
export const StyledPrice = styled(Typography)({
    color:'#0F1111',

})
export const StyledTitle = styled(Typography)({
    fontSize:'16px',
   color:'#0F1111',
   lineHeight: '24px'
})
export const StyledRatingBox = styled(Box)({
    columnGap:'0.5em',
    display:'flex',
    alignItems:'center',
    fontSize:'14px',
    lineHeight:'20px'
})
export const StyledInnerBox = styled(Box)({
    padding:'0.5em',
    
})