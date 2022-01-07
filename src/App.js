import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import MainPaige from "./components/MainPage/MainPage";
import SearchABuddy from "./components/SearchABuddy/SearchABuddy";
import MyMessages from "./components/MyMessages/MyMessages";
import MyBuddies from "./components/MyBuddies/MyBuddies";
import MyProfile from "./components/MyProfile/MyProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { LoginRepository } from "./libs/repository/LoginRepository";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginRepository = new LoginRepository();

  useEffect(() => {
    // if (loginRepository.retrieve()) {
      if (loginRepository.list()[0]) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("CurrentGamebuddyUser");
    setIsLoggedIn(false);
  };

  const homePage = isLoggedIn ? (
    <MainPaige logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  const searchABuddy = isLoggedIn ? (
    <SearchABuddy logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  const myMessages = isLoggedIn ? (
    <MyMessages logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );
  const myBuddies = isLoggedIn ? (
    <MyBuddies logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  const myProfile = isLoggedIn ? (
    <MyProfile logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={homePage}></Route>
          <Route path="/Search" element={searchABuddy}></Route>
          <Route path="/Messages" element={myMessages}></Route>
          <Route path="/Buddies" element={myBuddies}></Route>
          <Route path="/Profile" element={myProfile}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
