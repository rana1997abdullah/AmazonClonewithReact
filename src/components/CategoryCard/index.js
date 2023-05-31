import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SharedLink from "../StyledLink";
import { StyledCard, StyledCardMedia } from "./styles";
import {useNavigate} from 'react-router-dom';

const CategoryCard = ({ title, image, children, subtitle }) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    console.log(title);
    navigate('./productslist',{state:{categoryType:title}});
  }
  return (
    <StyledCard onClick={handleClick}>
      <CardHeader title={title} sx={{ fontWeight: 700 }} />
      {children ? children : <StyledCardMedia component={"img"} src={image} />}
      <CardContent onClick={handleClick} >
        <SharedLink title={subtitle} sx={{ fontSize: "13px" }}
         />
      </CardContent>
    </StyledCard>
  );
};
export default CategoryCard;
