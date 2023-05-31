import { CircularProgress } from "@mui/material";
import Product from "../../components/Product";
import { useEffect } from "react";
import { useState } from "react";
import StartFirebase from "../../components/firebase";
import { onValue, ref } from "firebase/database";
import { useNavigate, useLocation } from "react-router-dom";
import {
  StyledButton,
  StyledInnerBox,
  StyledListBox,
  StyledOuterBox,
  StyledSharedLink,
  StyledTypography,
} from "./styles";

const ProductsPage = ({ cookies, data }) => {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const StoredCategoryType = localStorage.getItem("categoryType")||""
  const categoryType = location.state?.categoryType ? location.state.categoryType : StoredCategoryType;

  useEffect(() => {
    const startRef = ref(StartFirebase(), "Products");
    console.log(cookies);
    setSeeAll(false);
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      {
        categoryType
          ? setFilteredData(
              res.filter(
                (el) => el.category.toLowerCase() === categoryType.toLowerCase()
              )
            )
          : setFilteredData(res);
      }
      setLoading(false);
    });
  }, [categoryType]);

  return (
    <StyledOuterBox>
      {loading ? (
        <StyledInnerBox>
          <CircularProgress />
        </StyledInnerBox>
      ) : (
        <>
          <StyledTypography>{categoryType}</StyledTypography>

          <StyledListBox>
            {(seeAll ? filteredData : filteredData.slice(0, 12)).map((el) => (
              <Product key={el.id} product={el} />
            ))}
          </StyledListBox>
          {!seeAll && filteredData.length >= 12 && (
            <StyledButton>
              <StyledSharedLink
                title="See all Results"
                onClick={() => setSeeAll(true)}
              />
            </StyledButton>
          )}
        </>
      )}
    </StyledOuterBox>
  );
};
export default ProductsPage;
