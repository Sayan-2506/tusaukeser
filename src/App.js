import { React, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import "./App.css";
import { Front } from "./components";
import Info from "./components/Info";
import DresCode from "./components/DresCode";
import Form from "./components/Form";
import PartyImage from "./components/PartyImage";
import Countdown from "./components/countdown/Countdown";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className="App bg-gradient-to-r from-purple-200 to-pink-200">
      <Front />
      <Info />
      <DresCode />
      <Countdown timeTillDate="06 23 2023, 8:00" timeFormat="MM DD YYYY, h:mm" />
      <Form />
      <PartyImage />
    </div>
  );
}

export default observer(App);
