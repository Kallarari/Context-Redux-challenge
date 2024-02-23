import React, { useState } from "react";
import "./App.css";
import FlavorSelect from "./pages/FlavorSelectPage";
import Checkout from "./pages/CheckoutPage";
import SizeSelection from "./pages/SizeSelectionPage";
import PaymentSelection from "./pages/PaymentSelection";

function App() {
  const [steps, setSteps] = useState(0);
  return (
    <div className="App">
      {steps === 0 && <FlavorSelect  />}
      {steps === 1 && <SizeSelection />}
      {steps === 2 && <PaymentSelection />}
      {steps === 3 && <Checkout />}
    </div>
  );
}

export default App;
