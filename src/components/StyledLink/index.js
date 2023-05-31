
import { styled } from "@mui/material";
const StyledLink = styled("a")({
  color: "#007185",
  fontSize: "10px",
  textDecoration: "none",
  "&:hover": {
    color: "#C7511F",
    textDecorationLine: "underline",
    textDecorationColor: "#C7511F",
  },
});
const SharedLink = (props) => {
  return (
    <StyledLink {...props} underline="hover">
      {" "}
      {props.title}
    </StyledLink>
  );
};
export default SharedLink;
