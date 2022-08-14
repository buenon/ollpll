import { FC } from "react";
import styles from "./App.module.scss";
import AlgList from "./components/AlgList/AlgList";

const App: FC = () => {
  return (
    <div className={styles.App}>
      <h1>Oll Pll</h1>
      <AlgList />
    </div>
  );
};

export default App;
