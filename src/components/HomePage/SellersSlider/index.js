import { Card, CardHeader, styled } from "@mui/material";
import ProductsSlider from "../../productsSlider";
import { useState, useEffect } from "react";
import StartFirebase from "../../firebase";
import { ref, onValue } from "firebase/database";
const StyledCard = styled(Card)({
  margin: "1.4em",
  marginLeft: "0.5em",
  marginRight: "0.5em",
  padding: "1em",
  border: 0,
  paddingBottom: "2em",
});
const SellerSlider = ({ title, categorytype }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [showArrow, setShowArrow] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Products");
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      categorytype
        ? setProducts(
            res.filter((el) =>
              (
                el.category.toLowerCase() || el.main_category.toLowerCase()
              ).includes(categorytype.toLowerCase())
            )
          )
        : setProducts(res);
    });
  }, [categorytype]);

  return (
    <StyledCard
      onMouseOver={() => setShowArrow(true)}
      onMouseOut={() => setShowArrow(false)}
    >
      <CardHeader title={title} sx={{ fontWeight: 700 }} />

      <ProductsSlider
        products={products}
        setSliderRef={setSliderRef}
        showArrow={showArrow}
      />
    </StyledCard>
  );
};
export default SellerSlider;
