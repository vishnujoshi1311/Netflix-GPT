import React from "react";
import Body from "./components/Body"
import appstore from "./Utils/Appstore";
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store = {appstore}> 
      <Body/>
    </Provider>
    );
}

export default App;
