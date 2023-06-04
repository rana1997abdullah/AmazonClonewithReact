import { FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledBox,
  StyledInputBase,
  AllSelect,
  StyledAutoComplete,
} from "./styles";

import StartFirebase from "../../firebase/index";
import { onValue, ref } from "firebase/database";

const SearchComp = ({ data, setBackgroundBody }) => {
  const [categoryType, setcategoryType] = useState("");
  const [dataa, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  let arr = [];
  useEffect(() => {
    {
      Object.keys(data).map((el, index) => {
        Object.values(data[el]).map((ele) => arr.push(ele));
      });
    }
    setData(arr);
  }, [data]);
  useEffect(() => {
  
    const startRef = ref(StartFirebase(), "Products");
    const filteredDataa =[];
    onValue(startRef, (snapshot) => {
      const res = snapshot.val();
      res.filter(el=>el.category.toLowerCase()=== categoryType.toLowerCase()
      )
      .map(
        el=>filteredDataa.push(el)
      )
 
      {
        categoryType
          ? 
          setFilteredData(
             filteredDataa)
                  
            
          :setFilteredData(res);
      }
    });
  }, [categoryType]);

  const handleChange = (event) => {
    setcategoryType(event.target.value);

   
  };
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("categoryType", categoryType);
    selectedValue ? navigate('/productDetails',{state:{product:selectedValue}}):
    navigate("/productslist", { state: { categoryType: categoryType } });
  };
  const handleSelectItem = (e)=>{
  const selectedValue = filteredData.filter(el=>el.title ==e.target.value)[0];
  setSelectedValue(selectedValue);
    navigate('/productDetails',{state:{product:selectedValue}});
  }
  return (
    <StyledBox>
      <Search>
        <FormControl>
          <AllSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryType}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {dataa.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </AllSelect>
        </FormControl>
        <StyledAutoComplete
          id="custom-input-demo"
          options={filteredData.map((el) => el.title)}
          onChange={(e, value) => setSelectedValue(value)}
          onSelect={(e)=>handleSelectItem(e)}
          renderInput={(params) => (
            <div
              ref={params.InputProps.ref}
              style={{
                display: "flex",
                height: "100%",
                borderRadius: "0px 4px 4px 0px",
              }}
            >
              <StyledInputBase
                type="text"
                onClick={() => setBackgroundBody("transparent")}
                onChange={() => setBackgroundBody("rgba(0,0,0,.8)")}
                onBlur={() => setBackgroundBody("red")}
                {...params.inputProps}
                placeholder="Search Amazon"
              />
              <SearchIconWrapper >
                <SearchIcon onClick={(e) => handleClick(e)} />
              </SearchIconWrapper>
            </div>
          )}
        />
      </Search>
    </StyledBox>
  );
};
export default SearchComp;
