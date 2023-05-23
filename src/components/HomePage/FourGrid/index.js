import CategoryCard from "../../CategoryCard";
import InnerCard from "../InnerCard";
import { Box, Grid, styled } from "@mui/material";

const StyledBox = styled(Box)({
  flexGrow: 1,
  alignItems: "center",

  marginTop: "1em",
  marginBottom: "-0.5em",
});
const FourGrid = ({ data, title, subtitle }) => {
  return (
    <CategoryCard subtitle={subtitle} title={title}>
      <StyledBox>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <InnerCard {...data[0]} />
          </Grid>
          <Grid item xs={6}>
            <InnerCard {...data[1]} />
          </Grid>

          <Grid item xs={6}>
            <InnerCard {...data[2]} />
          </Grid>
          <Grid item xs={6}>
            <InnerCard {...data[3]} />
          </Grid>
        </Grid>
      </StyledBox>
    </CategoryCard>
  );
};
export default FourGrid;
