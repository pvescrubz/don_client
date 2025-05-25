import { ICaregory } from "@/feature/filters/filters.type";
import { FC } from "react";
import { CategoryTooltip } from "../CategoryTooltip/CategoryTooltip";
import styles from "./Categories.module.css";

interface ICategories {
  categories?: ICaregory;
}

export const Categories: FC<ICategories> = ({ categories }) => {
  if (!categories) return null;

  const { data } = categories;
  return (
    <>
      {data && (
        <div className={styles.root}>
          {data.map((item) => (
            <CategoryTooltip key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
