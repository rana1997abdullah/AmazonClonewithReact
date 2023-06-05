import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import CategoryCard from "../CategoryCard";
import ImgSlider from "./ImgSlider";
import StartFirebase from "../firebase";
import { ref, onValue } from "firebase/database";

import FourGrid from "./FourGrid";
import SellerSlider from "./SellersSlider";
import { StyledBox, StyledContainer, StyledInnerBox } from "./styles";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const images = ["./beautyHP.jpg", "./electronicsHP.jpg", "./BeautyPicks.jpg"];

  const gaming = [
    { title: "Headsets", image: "./gamingHP/Headsets.jpg" },
    {
      title: "Keyboards",
      image: "./gamingHP/Keyboard.jpg",
    },
    {
      title: "Computer mice",
      image: "./gamingHP/Mouse.jpg",
    },
    { title: "Chairs", image: "./gamingHP/Chair.jpg" },
  ];
  const freeSpace = [
    {
      title: "Dinning",
      image: "./space/dinning.jpg",
    },
    { title: "Home", image: "./space/home.jpg" },
    { title: "Kitchen", image: "./space/kitchen.jpg" },
    { title: "Health and Beauty", image: "./space/health&beauty.jpg" },
  ];
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Categories");

    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      setLoading(false);
    });
  }, []);

  return (
    <StyledContainer>
      <ImgSlider />
      <StyledBox>
        <FourGrid
          title="Gaming accessories"
          subtitle={"See more"}
          data={gaming}
        />
        <CategoryCard
          key={"shipping"}
          subtitle={"on qualifying orders over USD $49"}
          title={"FREE Shipping to Palestinian Territories"}
          image={"./freeshipping.jpg"}
        />

        <CategoryCard
          key={"Health & personal care"}
          subtitle={"Shop now"}
          title={"Health & personal care"}
          image={images[0]}
        />
        <CategoryCard
          key={"electronics"}
          subtitle={"See more"}
          title={"Electronics"}
          image={images[1]}
        />
        <CategoryCard
          key={"Beauty picks"}
          subtitle={"Shop now"}
          title={"Beauty picks"}
          image={images[2]}
        />
        <FourGrid
          title="Refresh your space"
          subtitle={"See more"}
          data={freeSpace}
        />
      </StyledBox>
      {loading ? (
        <StyledInnerBox>
          <CircularProgress />
        </StyledInnerBox>
      ) : (
        <>
          <SellerSlider categorytype={"book"} title={"Best Sellers in Books"} />

          <SellerSlider
            categorytype={"kitchen"}
            title={"International top sellers in Kitchen"}
          />

          <SellerSlider
            categorytype={"fashion"}
            title={"More items to consider"}
          />
        </>
      )}
    </StyledContainer>
  );
};
export default HomePage;
