import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCmp = (props) => {
  return (
    <Slider {...props} ref={props?.setSliderRef} className={props.className}>
      {props.children}
    </Slider>
  );
};
export default SliderCmp;
