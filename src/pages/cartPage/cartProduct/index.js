import { useEffect } from "react";
import { StyledBottomBox, StyledCard, StyledPriceTypography, StyledProductDetails } from "./styles";

import {
  StyledAction,
  StyledActionBox,
  StyledMainTypography,
  StyledSideImage,
  StyledInStockTypo,
  StyledFormControl
} from "./styles";
import { useState } from "react";
import { onValue, ref, update } from "firebase/database";
import StartFirebase, { getCurrentUser } from "../../../components/firebase";
import {
  StyledInputLabel,
  TextInput,
} from "../../ProductDetailsPage/styles";
import { useNavigate } from "react-router-dom";
import instance from "../../../components/firebase/instance";
import Swal from "sweetalert2";
import { Divider } from "@mui/material";

const CartProduct = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState();
  const navigate = useNavigate();
  const [quantity, setquantity] = useState(0);
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Cart");
    let price = 0;
    let arr = [];
    let totalNumber = 0;
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      const currentUserId = getCurrentUser().uid;
      Object.values(res)
        .filter((el) => el.userId == currentUserId && el.title == product.title)
        .map((el) => {
          arr.push(el);
          price += el.price * el.quantity;
          totalNumber = el.quantity;
        });

      setTotalPrice(price.toFixed(2));
      setCartItems(arr);
      setquantity(Number(totalNumber));
    });
  }, []);
  const getSelectedKey = (user, product) => {
    let value = instance.get("/Cart.json").then((response) => {
      for (let key in response.data) {
        if (
          response.data[key].title == product.title &&
          response.data[key].userId == user.uid &&
          key !== "undefined"
        ) {
          return key;
        }
      }
    });
    return value;
  };
  const handleQuantityChange = (e, product) => {
    setquantity(Number(e.target.value));
    const obj = { ...product, quantity: Number(e.target.value) };
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    let value = getSelectedKey(getCurrentUser(), product).then((res) => {
      instance.put(`Cart/${res}.json`, obj).then((res) => {
        console.log(res.data);
        Swal.fire("the quantity is added", "success");
      });
    });
  };
  const handleDelete = (product) => {
  
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    let value = getSelectedKey(getCurrentUser(), product).then((res) => {
      instance.delete(`Cart/${res}.json`).then((res) => {
        console.log(res.data);
        Swal.fire("the item is deleted from the card", "success");
      });
    });
  };

  return (
    <StyledCard>
      <StyledSideImage
        sx={{ backgroundImage: `url(${product.image})` }}
      ></StyledSideImage>
      <StyledProductDetails>
        <StyledMainTypography>{product.title}</StyledMainTypography>
        <StyledInStockTypo>In Stock</StyledInStockTypo>
       
         <StyledBottomBox>
          <StyledFormControl variant="standard">
            <StyledInputLabel shrink htmlFor="quantity-input">
              Quantity
            </StyledInputLabel>
            <TextInput
              name="quantity"
              type="number"
              id="quantity-input"
              inputProps={{ min: 1 }}
              value={quantity}
              onChange={(e) => handleQuantityChange(e, product)}
            />
          </StyledFormControl>
          <StyledActionBox>
          <StyledAction onClick={()=>handleDelete(product)}>Delete</StyledAction>
          <Divider orientation="vertical" 
        variant="middle" flexItem />
          <StyledAction>Save for later</StyledAction>
          <Divider orientation="vertical" 
        variant="middle" flexItem />
          <StyledAction>Compare with similar Items</StyledAction>
          <Divider orientation="vertical" 
        variant="middle" flexItem />
          <StyledAction>Share</StyledAction>
        </StyledActionBox>
        </StyledBottomBox>
      </StyledProductDetails>
      <StyledPriceTypography>${product.price}</StyledPriceTypography>
    </StyledCard>
  );
};
export default CartProduct;
