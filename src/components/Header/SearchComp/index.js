import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import {Search,SearchIconWrapper,StyledBox,StyledInputBase,AllSelect} from './styles';



const SearchComp = () => {
  const [categoryType, setcategoryType] = useState("");

  const handleChange = (event) => {
    setcategoryType(event.target.value);
  };
 

  return (
    <StyledBox>
      <Search>
        <AllSelect
          value={categoryType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </AllSelect>
        <StyledInputBase
          placeholder="Search Amazon"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <SearchIcon sx={{ fontSize: "32px" }} />
        </SearchIconWrapper>
      </Search>
    </StyledBox>
  );
};
export default SearchComp;
