import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import AddBoxOutlined from "@mui/icons-material/LightOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faBoxOpen} />         Think out the box
      </h1>
    </header>
  );
}

export default Header;
