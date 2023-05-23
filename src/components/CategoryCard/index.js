import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SharedLink from "../StyledLink";
import { StyledCard, StyledCardMedia } from "./styles";

const CategoryCard = ({ title, image, children, subtitle }) => {
  return (
    <StyledCard>
      <CardHeader title={title} sx={{ fontWeight: 700 }} />
      {children ? children : <StyledCardMedia component={"img"} src={image} />}
      <CardContent>
        <SharedLink title={subtitle} sx={{ fontSize: "13px" }} />
      </CardContent>
    </StyledCard>
  );
};
export default CategoryCard;
