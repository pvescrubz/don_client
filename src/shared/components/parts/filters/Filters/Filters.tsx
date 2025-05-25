import { IFilter } from "@/feature/filters/filters.type";
import { FC } from "react";
import { FilterAccordion } from "../FilterAccordion/FilterAccordion";
import { FiltersClearButton } from "../FiltersClearButton/FiltersClearButton";
import styles from "./Filters.module.css";

interface IFiltres {
  filtres: Record<string, IFilter>;
}

export const Filters: FC<IFiltres> = ({ filtres }) => {

  const filtresArr = Object.values(filtres);

  return (
    <div className={styles.root}>
      {filtresArr && filtresArr.length > 0 && (
        <div className={styles.box}>
          {filtresArr.map((item) => (
            <FilterAccordion key={item.id} item={item} />
          ))}
        </div>
      )}
      <FiltersClearButton />
    </div>
  );
};
