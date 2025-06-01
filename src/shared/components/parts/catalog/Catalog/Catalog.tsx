import { skinsService } from "@/feature/skins/skins.service";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";

import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";

import { CatalogList } from "../CatalogList/CatalogList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./Catalog.module.css";

interface ICatalog extends TDiv {
  game: string;
  query: TQuery;
  isMobile: boolean;
}

export const Catalog: FC<ICatalog> = async ({
  game,
  query,
  isMobile,
  className,
  ...rest
}) => {
  const res = await skinsService.getSkins(game, query, isMobile);

  if (!res) return <div>Ошибка загрузки скинов</div>;
  const { data, meta } = res;

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <CatalogList skins={data} />
      <Pagination meta={meta} />
    </div>
  );
};
