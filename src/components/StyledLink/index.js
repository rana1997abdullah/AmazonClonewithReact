import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
const StyledLink = styled(NavLink)({
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
