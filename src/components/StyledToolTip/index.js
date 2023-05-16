import { styled,Tooltip } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className,left, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme,left }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
      marginLeft:left
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(12),
      marginTop: "-0.2em !important",
      padding:'2em',
      paddingTop:'2em',
    },
  }));
  export default StyledTooltip;