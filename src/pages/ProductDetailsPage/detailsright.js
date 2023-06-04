import { Box, Divider, Rating, Typography } from "@mui/material";
import {
  StyledDetailsBox,
  StyledDetailsTypo,
  StyledLink,
  StyledPriceDetailsBox,
  StyledPriceTypo,
  StyledRatingBox,
  StyledRightContainer,
} from "./styles";

const DetailsSection = ({ product }) => {
  return (
    <StyledRightContainer>
      <Divider variant="middle" />
      <StyledRatingBox>
        {product.rating.rate}{" "}
        <Rating
          name="half-rating-read"
          precision={0.5}
          value={product.rating.rate}
          readOnly
        />
        <Box sx={{ marginLeft: "1em" }}></Box>
        <StyledLink title={`${product.rating.count} ratings`} />
      </StyledRatingBox>
      <Divider variant="middle" />
      <StyledPriceDetailsBox>
        <Typography variant="caption" pr={0}>
          ${" "}
        </Typography>
        <StyledPriceTypo>
          {product.price.toString().split(".")[0]}
        </StyledPriceTypo>
        <Typography variant="caption">
          {product.price.toString().split(".")[1]}
        </Typography>
      </StyledPriceDetailsBox>

      <Divider variant="middle" />
      <StyledDetailsBox>About this item</StyledDetailsBox>
      <StyledDetailsTypo>{product.description}</StyledDetailsTypo>
    </StyledRightContainer>
  );
};
export default DetailsSection;
