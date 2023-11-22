import React, { useEffect } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles'; // Import the styled function



const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: "rgb(26, 26, 38)",
  zIndex: 100,
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/movies");
        break;
      case 2:
        navigate("/series");
        break;
      case 3:
        navigate("/search");
        break;
      default:
        break;
    }
  }, [value, navigate]);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        style={{ color: "#fff", fontWeight:"bold" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff", fontWeight:"bold" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff", fontWeight:"bold" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff", fontWeight:"bold"}}
        label="Search"
        icon={<SearchIcon />}
      />
    </StyledBottomNavigation>
  );
}
