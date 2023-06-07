import { StyledLink } from "../ProductDetailsPage/styles";
import { StyledBox } from "./styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <StyledBox>
      <Typography variant="h2">Page Not Found</Typography>
      <Typography variant="body">
        <StyledLink title="navigate to home page" onClick={handleNavigate} />
      </Typography>
    </StyledBox>
  );
};
export default NotFoundPage;
