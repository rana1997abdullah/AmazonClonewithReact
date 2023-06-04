import { useState } from "react";
import {
  DisplayImage,
  DisplayImageContainer,
  SideImagesContainer,
  StyledCatTypography,
  StyledLeftContainer,
  StyledOuterBox,
  StyledSideImage,
  StyledTitleTypography,
} from "./styles";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import RightCard from "./addTocartCard";
import DetailsSection from "./detailsright";
import { useEffect } from "react";
const ProductDetailsPage = () => {
  const location = useLocation();
  const product = location.state?.product
    ? location.state.product
    : JSON.parse(localStorage.getItem("product"));
  const [dispImg, setDispImg] = useState(product.image);

  useEffect(() => {
    setDispImg(product.image);
  }, [product]);
  return (
    <StyledOuterBox>
      <StyledLeftContainer>
        <StyledCatTypography>{product.category}</StyledCatTypography>
        <StyledTitleTypography>{product.title}</StyledTitleTypography>
        <Box
          sx={{
            display: "flex",
            height: "80%",
          }}
        >
          {product?.images && (
            <SideImagesContainer>
              {product.images.slice(0, 5).map((item, index) => (
                <StyledSideImage
                  key={index}
                  onClick={() => setDispImg(item)}
                  onMouseMove={() => setDispImg(item)}
                  sx={{ backgroundImage: `url(${item})` }}
                ></StyledSideImage>
              ))}
            </SideImagesContainer>
          )}
          <DisplayImageContainer>
            <DisplayImage
              src={dispImg}
              component={"img"}
              sx={{ backgroundImage: `url(${dispImg})` }}
            ></DisplayImage>
          </DisplayImageContainer>
        </Box>
      </StyledLeftContainer>
      <DetailsSection product={product} />
      <RightCard product={product} />
    </StyledOuterBox>
  );
};
export default ProductDetailsPage;
