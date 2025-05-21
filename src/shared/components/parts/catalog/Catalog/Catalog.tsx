import { CatalogList } from "../CatalogList/CatalogList";
import { CatalogPagination } from "../CatalogPagination/CatalogPagination";
import { CatalogTopGroup } from "../CatalogTopGroup/CatalogTopGroup";
import styles from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <div className={styles.root}>
      <CatalogTopGroup />
      <CatalogList />
      <CatalogPagination />
    </div>
  );
};
