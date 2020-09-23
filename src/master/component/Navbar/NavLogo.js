import React from "react";
import { IconButton } from "../../../component/Button";
import LogoImg from "../../../images/Saral.png";
import { ReactComponent as BarIcon } from "../../../Icons/Basic/bars.svg";
const NavLogo = (props) => {
  const { toggleSideBar } = props;
  return (
    <>
      <IconButton size="sm" flat color="secondary" onClick={toggleSideBar}>
        <BarIcon fill="#44599c" />
      </IconButton>
      <img src={LogoImg} alt="logo" />
    </>
  );
};

NavLogo.propTypes = {};

export default NavLogo;
