// eslint-disable-next-line
import styles from "../src/style.scss";
// import { Routes, Route } from "react-router-dom";
import Menu from "./components/SideMenu/SideMenu";


function App() {
  return (
    <div className={styles.application}>
      <Menu />
    </div>
  )
}

export default App;
