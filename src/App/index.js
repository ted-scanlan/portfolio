import React from "react";
import styles from "./app.module.css";
import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";

const App = () => (
  <div className="App">
    <Header />
    <div className={styles.footer}>
      <Footer className={styles.footer} />
    </div>
  </div>
);

export default App;
