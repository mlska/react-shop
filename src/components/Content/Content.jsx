import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Navigate, Route, Routes } from "react-router-dom";

import { StoreContext } from "../../store/StoreProvider";

import { default as ContentStyles } from "./Content.module.scss";

const style = bemCssModules(ContentStyles);

import { ADMIN_TYPE } from "../../helpers/consts";

import Courses from "../Courses/Courses";

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className={style()}>
      <Routes>
        {/* <Route exact path="/" element={<Courses />} /> */}
        <Route exact path="/" element={<Courses />} />
        {isUserLogged && (
          <Route exact path="/my-courses" element={<p>Moje kursy</p>} />
        )}

        {isAdmin && (
          <Route
            exact
            path="/manage-courses"
            element={<p>Zarządzanie kursami</p>}
          />
        )}

        <Route exact path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default Content;