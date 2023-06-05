import { Divider, Typography } from "@mui/material";
import {
  StyledBox,
  StyledCard,
  StyledSubTotalTypo,
  StyledTypography,
  StyledButton,
  StyledRightCard,
  StyledLeftPrice,
  StyledSideImage,
  StyledEmptyCard,
  StyledFlexCard,
  StyledLoginButton,
  StyledSignupNow,
  StyledColumnFlex
} from "./styles";
import { useEffect } from "react";
import { useState } from "react";
import  { getCurrentUser } from "../../components/firebase";
import CartProduct from "./cartProduct";
import instance from "../../components/firebase/instance";
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberItems, setTotalNumberItems] = useState(0);
  const [loading,setLoading] = useState(false);
 const navigate = useNavigate();

  const formatPostData = (response) => {
    let fetchedArr = [];
    let price = 0;
    let totalNumber = 0;
    for (let key in response.data) {
        setLoading(true);
      if (
        response.data[key].userId == getCurrentUser().uid &&
        key !== "undefined"
      ) {
        fetchedArr.push(response.data[key]);
        price += response.data[key].price * response.data[key].quantity;
        totalNumber += Number(response.data[key].quantity);
      }
    }
    setCartItems(fetchedArr);
    setTotalPrice(price.toFixed(2));
    setTotalNumberItems(totalNumber);
   

  };

  useEffect(() => {
    instance.get("/Cart.json").then((response) => {
        formatPostData(response);
         setLoading(false);
      });
  }, [cartItems]);
  const handleNavigate = (item)=>{
    const path = `/${item}`
    navigate(path);
  }
  return (
    <>
    <StyledBox>
      {(getCurrentUser() || localStorage.getItem('isSignedIn')) && (
        <StyledCard>
        {cartItems && 
        <>
        <StyledTypography>Shopping Cart</StyledTypography>
        <StyledLeftPrice><Typography>Price</Typography></StyledLeftPrice>
          <Divider variant="middle" />

         {loading ? <CircularProgress/> :cartItems?.map((el, index) => (
            <CartProduct product={el} key={index} />
          ))}
          </>
          }
          {!cartItems.length && !loading && <StyledTypography>Your Amazon Cart is empty</StyledTypography>}
        </StyledCard>
      )}
      {( localStorage.getItem('isSignedIn')) && 
        cartItems && <StyledRightCard>
          <StyledSubTotalTypo>
            Subtotal ({totalNumberItems} items): ${totalPrice}
          </StyledSubTotalTypo>
          <StyledButton>Proceed To checkout</StyledButton>
        </StyledRightCard>
      }
      {!(getCurrentUser() || localStorage.getItem('isSignedIn')) && 
       <StyledEmptyCard>
      <StyledSideImage
        sx={{ backgroundImage: `url('./nologincart.svg')` }}
      ></StyledSideImage>
      <StyledColumnFlex>
      <StyledTypography>Your Amazon Cart is empty</StyledTypography>
      <StyledFlexCard >
      <StyledLoginButton onClick={()=>handleNavigate("login")}>
        Sign in to your account
      </StyledLoginButton>
      <StyledSignupNow onClick={()=>handleNavigate("signup")}>
        Sign up now
      </StyledSignupNow>
      </StyledFlexCard>
      </StyledColumnFlex>
      </StyledEmptyCard>
      
      }
    </StyledBox>
    </>
  );
};
export default CartPage;
