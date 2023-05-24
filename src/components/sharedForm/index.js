import {

  CardHeader,
  Divider,

} from "@mui/material";
import SharedLink from "../StyledLink";
import { 
    StyledBottomDivider, 
    StyledButton, 
    StyledCard, 
    StyledFlexBox, 
    StyledInnerBox, 
    StyledLogoBox, 
    StyledTypography } from "./styles";
import { useNavigate } from "react-router-dom";



const SharedForm = ({ children, title, formType }) => {
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        navigate('/signup');
      };
  return (
    <StyledFlexBox>
      <StyledInnerBox>
        <StyledLogoBox component={"img"} src="./amazonMainLogo.jpg" />
        <StyledCard component="form" noValidate>
          <CardHeader
            title={title}
            sx={{ float: "left", marginLeft: "-1em" }}
          />

          {children}
          <StyledTypography>
            By {formType === "signup" ? "creating an account" : "continuing"} ,
            you agree to Amazon's
            <SharedLink title="Conditions of Use" /> and 
            <SharedLink title="Privacy Notice" />.
            <SharedLink title=" Need help?" />
          </StyledTypography>
          {formType == "signup" && (
            <>
              <StyledBottomDivider />

              <StyledTypography>
                Already have an account?
                <SharedLink
                  sx={{ fontSize: "12px" }}
                  to="/login"
                  title="Sign in"
                />
              </StyledTypography>
              <StyledTypography>
                Buying for work?
                <SharedLink title="Create a free business account" />
              </StyledTypography>
            </>
          )}
        </StyledCard>
        {!formType && (
          <Divider variant="middle" sx={{ width: "95%", marginTop: "1em" }}>
            New To Amazon?
          </Divider>
        )}
        {!formType && (
          <StyledButton variant="outlined" onClick={onSubmit} >
            Create your Amazon account
          </StyledButton>
        )}
      </StyledInnerBox>
    </StyledFlexBox>
  );
};
export default SharedForm;
