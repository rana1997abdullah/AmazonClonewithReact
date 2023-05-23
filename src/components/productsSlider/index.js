import SliderCmp from "../Slider";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { NextArrow, PrevArrow } from "./styles";

const ProductsSlider = (props) => {
  const settings = {
    arrows: props.showArrow,
    initialSlide: 0,
    slidesToShow: 7.5,
    slidesToScroll: 1,
    infinite: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          dots: true,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderCmp
      setSliderRef={props?.setSliderRef}
      {...settings}
      className={"slider"}
    >
      {props?.products.map((product) => (
        <div className={"product"} key={product.id}>
          <Box
            component="img"
            sx={{
              height: 172,

              minWidth: 145,
            }}
            className={"product_image"}
            src={product.image}
          />
        </div>
      ))}
    </SliderCmp>
  );
};
export default ProductsSlider;
