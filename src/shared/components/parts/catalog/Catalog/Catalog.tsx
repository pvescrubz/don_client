import { skinsService } from "@/feature/skins/skins.service";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";

import { CatalogList } from "../CatalogList/CatalogList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./Catalog.module.css";

interface ICatalog {
  game: string;
  query: TQuery;
  isMobile: boolean;
}

export const Catalog: FC<ICatalog> = async ({ game, query, isMobile }) => {
  const res = await skinsService.getSkins(game, query, isMobile);

  if (!res) return <div>Ошибка загрузки скинов</div>;
  const { data, meta } = res;

  return (
    <div className={styles.root}>
      <CatalogList skins={data} />
      <Pagination meta={meta} />
    </div>
  );
};
