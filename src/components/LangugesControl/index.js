import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Divider, Radio } from "@mui/material";
import styles from "./index.module.css";
import { Languages } from "../languages";
import SharedLink from "../StyledLink";
import Flag from "react-world-flags";
import {
  StyledRadioGroup,
  StyledButton,
  StyledSubTitle,
  StyledChangeLink,
  BpCheckedIcon,
  BpIcon,
} from "./styles";

const LanguagesControl = (props) => {
  function BpRadio(props) {
    return (
      <Radio
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        className={styles.separator}
      >
        <StyledSubTitle>Change Language</StyledSubTitle>
        <SharedLink title={"Learn More"} />
      </FormLabel>
      <StyledRadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="English - EN"
        name="radio-buttons-group"
        className={styles.radioGroup}
      >
        {Object.values(Languages).map((lang, index) => {
          return (
            <div className={styles.labelDiv} key={lang}>
              <FormControlLabel
                value={lang}
                control={<BpRadio />}
                label={lang}
                className={styles.label}
              />
              {index === 0 && (
                <Divider variant="middle" className={styles.divider} />
              )}
            </div>
          );
        })}
      </StyledRadioGroup>
      <Divider />
      <FormLabel
        id="demo-radio-buttons-group-label"
        className={styles.separator}
      >
        <StyledSubTitle>Change currency</StyledSubTitle>
        <SharedLink title={"Learn More"} />
      </FormLabel>
      <FormLabel
        id="demo-radio-buttons-group-label"
        className={styles.innerseparator}
      >
        <StyledSubTitle>$ - USD - US Dollar</StyledSubTitle>
        <StyledButton type="text">
          <SharedLink title={"Change currency"} />
        </StyledButton>
      </FormLabel>
      <Divider />
      <div className={styles.separator}>
        <Flag code="us" className={styles.flag} />
        <StyledSubTitle>You are shopping on Amazon.com</StyledSubTitle>
      </div>
      <StyledButton type="text">
        <StyledChangeLink>Change country/region</StyledChangeLink>
      </StyledButton>
    </FormControl>
  );
};
export default LanguagesControl;
