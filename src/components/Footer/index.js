import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { StyledLogoBox } from "../sharedForm/styles";
import {
  InnerGrid,
  InnerLink,
  StyledAlignedGrid,
  StyledGrid,
  StyledInnerGrid,
  StyledOuterBox,
} from "./styles";

// media query for font size
const theme = createTheme();
theme.typography.body2 = {
  fontSize: "0.5rem",
  "@media (min-width:600px)": {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
theme.typography.caption = {
  fontSize: "0.3rem",
  "@media (min-width:600px)": {
    fontSize: "0.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.7rem",
  },
};

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledOuterBox>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            rowSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <InnerGrid item xs={12}>
              <InnerLink href="#">
                <Typography variant="h6" sx={{ color: "white" }}>
                  Back To Top
                </Typography>
              </InnerLink>
            </InnerGrid>

            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <Typography variant="body2">
                <b>Get to Know Us</b>
              </Typography>
              <Typography variant="body2">About Us</Typography>
              <Typography variant="body2">Careers</Typography>
              <Typography variant="body2">Press Releases</Typography>
              <Typography variant="body2">Amazon Cares</Typography>
              <Typography variant="body2">Gift a Smile</Typography>
              <Typography variant="body2">Amazon Science</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="body2">
                <b>Make Money with Us</b>
              </Typography>
              <Typography variant="body2">Sell on Amazon</Typography>
              <Typography variant="body2">
                Sell under Amazon Accelerator
              </Typography>
              <Typography variant="body2">Amazon Global Selling</Typography>
              <Typography variant="body2">Become an Affiliate</Typography>
              <Typography variant="body2">Fulfilment by Amazon</Typography>
              <Typography variant="body2">Advertise Your Products</Typography>
              <Typography variant="body2">Amazon Pay on Merchants</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="body2">
                <b>Let Us Help You</b>
              </Typography>
              <Typography variant="body2">COVID-19 and Amazon</Typography>
              <Typography variant="body2">Your Account</Typography>
              <Typography variant="body2">Returns Centre</Typography>
              <Typography variant="body2">100% Purchase Protection</Typography>
              <Typography variant="body2">Amazon App Download</Typography>
              <Typography variant="body2">Amazon Assistant Download</Typography>
              <Typography variant="body2">Help</Typography>
            </Grid>

            <Grid item xs={2}></Grid>

            <hr style={{ width: "100%" }}></hr>

            <Grid item xs={12} sx={{ textAlign: "center", py: 2 }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                <StyledLogoBox component="img" src={"./amazonlogo.png"} />
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>

            <Grid item xs={2}></Grid>

            <hr style={{ width: "100%" }}></hr>

            <StyledInnerGrid item xs={1.5}></StyledInnerGrid>
            <StyledGrid item xs={1}>
              <Typography variant="caption">
                AbeBooks Books, art & collectibles <br></br>
                <br></br>
                Shopbop Designer Fashion Brands
              </Typography>
            </StyledGrid>

            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledGrid item xs={1}>
              <Typography variant="caption">
                Amazon Web Services Scalable Cloud Computing Services <br></br>
                <br></br>
                Amazon Business Everything For Your Business
              </Typography>
            </StyledGrid>

            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledGrid item xs={1}>
              <Typography variant="caption">
                Audible Download Audio Books <br></br>
                <br></br>
                Prime Now 2-Hour Delivery on Everyday Items
              </Typography>
            </StyledGrid>

            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledGrid item xs={1}>
              <Typography variant="caption">
                DPReview Digital Photography <br></br>
                <br></br>
                Amazon Prime Music 90 million songs, ad-free Over 15 million
                podcast episodes
              </Typography>
            </StyledGrid>

            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledGrid item xs={1}>
              <Typography variant="caption">
                IMDb Movies, TV & Celebrities
              </Typography>
            </StyledGrid>
            <StyledInnerGrid item xs={1.5}></StyledInnerGrid>

            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledAlignedGrid item xs={10}>
              Conditions of Use Privacy Notice Interest-Based Ads
            </StyledAlignedGrid>
            <StyledInnerGrid item xs={1}></StyledInnerGrid>
            <StyledAlignedGrid item xs={12}>
              © 1996–2023, Amazon.com, Inc. or its affiliates
            </StyledAlignedGrid>
            <StyledInnerGrid item xs={12}></StyledInnerGrid>
            <StyledInnerGrid item xs={12}></StyledInnerGrid>
          </Grid>
        </StyledOuterBox>
      </ThemeProvider>
    </>
  );
}
