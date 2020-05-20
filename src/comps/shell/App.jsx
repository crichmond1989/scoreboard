import React from "react";

import Home from "../home/Home";
import Footer from "./Footer";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
