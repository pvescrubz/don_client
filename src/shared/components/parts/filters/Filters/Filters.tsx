import { IFilter } from "@/feature/filters/filters.type";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";
import { FilterAccordion } from "../FilterAccordion/FilterAccordion";
import { FiltersClearButton } from "../FiltersClearButton/FiltersClearButton";
import styles from "./Filters.module.css";

interface IFiltres {
  filtres: Record<string, IFilter>;
  query: TQuery;
}

export const Filters: FC<IFiltres> = ({ filtres, query }) => {
  const filtresArr = Object.values(filtres);
   

  return (
    <div className={styles.root}>
      {filtresArr && filtresArr.length > 0 && (
        <div className={styles.box}>
          {filtresArr.map((item) => (
            <FilterAccordion key={item.id} item={item} query={query}/>
          ))}
        </div>
      )}
      <FiltersClearButton />
    </div>
  );
};
