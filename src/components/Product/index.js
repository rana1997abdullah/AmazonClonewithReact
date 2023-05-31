import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  StyledCard,
  StyledInnerBox,
  StyledContent,
  StyledImage,
  StyledPrice,
  StyledRatingBox,
  StyledTitle,
} from "./styles";
import SharedLink from "../StyledLink";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

const Product = ({product}) => {
  const navigate = useNavigate();
  const [selectedproduct,setProduct] = useState({});
  useEffect(()=>{
    localStorage.setItem("product",JSON.stringify(product));
    setProduct(product);
  },[product])
  const handleClick = ()=>{
   
    navigate('/productDetails',{state:{product:selectedproduct}})
  }
  const {image,title,price,rating:{rate,count}} = product
  return (
    <StyledCard onClick={handleClick} >
      <StyledContent>
        <StyledImage component="img" src={image} />
      </StyledContent>
      <StyledInnerBox>
        <NavLink style={{ textDecoration: "none" }} preventScrollReset={true}>
          <StyledTitle onClick={handleClick}>{title}</StyledTitle>
        </NavLink>
        <StyledPrice>{`$${price}`}</StyledPrice>
        <StyledRatingBox>
          <Rating
            name="half-rating-read"
            precision={0.5}
            value={rate}
            readOnly
          />
          <SharedLink title={count} />
        </StyledRatingBox>
      </StyledInnerBox>
    </StyledCard>
  );
};
export default Product;
