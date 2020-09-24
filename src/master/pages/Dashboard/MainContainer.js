import React, { useState, lazy, Suspense } from "react";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import { Switch, Route, Redirect } from "react-router-dom";
import { Fade } from "react-reveal";
import DashboardPage from "../../../pages/DashboardPage";
const ButtonPage = lazy(() => import("../../../pages/ButtonPage"));
const CardPage = lazy(() => import("../../../pages/CardPage"));
const InputPage = lazy(() => import("../../../pages/InputPage"));
const ModalPage = lazy(() => import("../../../pages/ModalPage"));
const TablePage = lazy(() => import("../../../pages/TablePage"));
const NotificationPage = lazy(() => import("../../../pages/NotificationPage"));
const OtherPage = lazy(() => import("../../../pages/OtherPage"));
const TestingPage = lazy(() => import("../../../pages/TestingPage"));

const MainContainer = (props) => {
  const { path } = props;
  const components = [
    { page: "button", component: ButtonPage },
    { page: "input", component: InputPage },
    { page: "card", component: CardPage },
    { page: "modal", component: ModalPage },
    { page: "table", component: TablePage },
    { page: "notification", component: NotificationPage },
    { page: "other", component: OtherPage },
    { page: "testingpage", component: TestingPage },
  ];
  return (
    <div className="pl-3 pr-3 pt-2 pb-2">
      <div style={{ position: "relative", zIndex: "10" }}>
        <Breadcrumb />
      </div>
      <div
        id="client-card-container"
        style={{ position: "relative", zIndex: "20" }}
      >
        <Switch>
          <Route exact path={`${path}`} render={() => <DashboardPage />} />
          {components.map((list, index) => (
            <Route
              key={index}
              path={`${path}/${String(list.page).toLowerCase()}`}
              render={(props) => (
                <Suspense fallback="Loading ....">
                  <Fade left style={{ width: "100%" }}>
                    <list.component {...props} />
                  </Fade>
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
