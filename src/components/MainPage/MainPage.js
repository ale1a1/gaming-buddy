import React, { Fragment } from "react";
import "../MainPage/MainPage.css";
import Navigation from "../Navigation/Navigation";

const MainPaige = (props) => {
  return (
    <Fragment>
      <div className="mainPage">
        <Navigation logoutHandler={props.logoutHandler} homeClass="active"/>
        <div className="text-danger display-5">MAIN PAGE</div>
      </div>
    </Fragment>
  );
};

export default MainPaige;
