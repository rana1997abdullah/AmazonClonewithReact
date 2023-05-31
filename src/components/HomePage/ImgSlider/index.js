import SliderCmp from "../../Slider";
import { Box, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./styles";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <PrevArrow
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
 />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <NextArrow
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
 />
);
const ImgSlider = () => {
  const Images = [
    "./amazonslide1.jpg",
    "./amazonslide2.jpg",
    "./amazonslide3.jpg",
    "./amazonslide4.jpg",
    "./amazonslide5.jpg",
    "./amazonslide6.jpg",
  ];
  const settings = {
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    rows: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };
  return (
    <SliderCmp {...settings}>
      {Images.map((el) => (
        <Box component={"img"} key={el} sx={{ width: "auto" }} src={el} />
      ))}
    </SliderCmp>
  );
};
export default ImgSlider;
