import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImg from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food ordering</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Header Img (meals)" />;
      </div>
    </Fragment>
  );
};

export default Header;
