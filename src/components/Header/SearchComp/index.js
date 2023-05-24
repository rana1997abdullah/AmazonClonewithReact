import { FormControl } from "@mui/material";
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

const SearchComp = ({ data }) => {
  const [categoryType, setcategoryType] = useState("");
  const [dataa, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  let arr = [];
  useEffect(() => {
    {
      Object.keys(data).map((el, index) => {
        console.log(el);
        Object.values(data[el]).map((ele) => arr.push(ele));
      });
    }
    setData(arr);
  }, [data]);
  useEffect(() => {
    const startRef = ref(StartFirebase(), "Products");
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
    });
  }, [categoryType]);

  const handleChange = (event) => {
    setcategoryType(event.target.value);
  };

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
                {...params.inputProps}
                placeholder="Search Amazon"
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </div>
          )}
        />
      </Search>
    </StyledBox>
  );
};
export default SearchComp;
