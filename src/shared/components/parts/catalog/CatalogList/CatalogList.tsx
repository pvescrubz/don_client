import { TCatalogSkin } from "@/feature/skins/skins.type";
import { ProductCard } from "@/shared/components/ui/ProductCard/ProductCard";
import { FC } from "react";
import styles from "./CatalogList.module.css";

interface ICatalogList {
  skins: TCatalogSkin[];
}

export const CatalogList: FC<ICatalogList> = ({ skins }) => {
  return (
    <>
      {skins && skins.length > 0 && (
        <div className={styles.root}>
          {skins.map((skin) => (
            <ProductCard key={skin.id} skin={skin} />
          ))}
        </div>
      )}
    </>
  );
};
