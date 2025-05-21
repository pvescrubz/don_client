import { IFilter } from "@/shared/typing/filters.type";
import { FC } from "react";
import { FilterAccordion } from "../FilterAccordion/FilterAccordion";
import { FiltersClearButton } from "../FiltersClearButton/FiltersClearButton";
import { FiltersPrice } from "../FiltersPrice/FiltersPrice";
import styles from "./Filters.module.css";

interface IFiltres {
  filtres: Record<string, IFilter>;
}

export const Filters: FC<IFiltres> = ({ filtres }) => {
  const filtresArr = Object.values(filtres);

  return (
    <>
      {filtres && (
        <div className={styles.root}>
          <FiltersPrice />

          <div className={styles.box}>
            {filtresArr.map((item) => (
              <FilterAccordion key={item.id} item={item} />
            ))}
          </div>
          <FiltersClearButton />
        </div>
      )}
    </>
  );
};
