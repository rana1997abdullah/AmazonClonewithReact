import * as React from "react";

import { StyledTypography, StyledCardContent, Item } from "./styles";
import { CardMedia } from "@mui/material";

const InnerCard = ({ title, image }) => {
  return (
    <Item>
      <CardMedia component={"img"} src={image} />
      <StyledCardContent>
        <StyledTypography>{title}</StyledTypography>
      </StyledCardContent>
    </Item>
  );
};
export default InnerCard;
