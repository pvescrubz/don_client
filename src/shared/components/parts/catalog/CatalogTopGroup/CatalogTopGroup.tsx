import { GameNavBtnGroup } from "../GameNavBtnGroup/GameNavBtnGroup";
import { Search } from "../Search/Search";
import { UpdateButton } from "../UpdateButton/UpdateButton";
import styles from "./CatalogTopGroup.module.css";

export const CatalogTopGroup = () => {
  return (
    <div className={styles.root}>
      <UpdateButton />
      <GameNavBtnGroup />
      <Search />
      {/* <Sort /> */}
    </div>
  );
};
