import { styled, CardMedia, Card } from "@mui/material";

export const StyledCardMedia = styled(CardMedia)({
  mixBlendMode: "multiply",
  filter: "contrast(1)",
  height: 304,
  width: 300,
  maxWidth: "none",
  maxHeight: "100%",
  padding: "1em",
});

export const StyledCard = styled(Card)({
  maxWidth: 320,
  minWidth: 200,
  border: 0,
  padding: "1em",
});
