import { filtersService } from "@/feature/filters/filters.service";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";
import { Catalog } from "../../parts/catalog/Catalog/Catalog";
import { Categories } from "../../parts/filters/Categories/Categories";
import { Filters } from "../../parts/filters/Filters/Filters";
import { FiltersTopGroup } from "../../parts/filters/FiltersTopGroup/FiltersTopGroup";
import { SkinsHead } from "../../parts/SkinsHead/SkinsHead";
import { Breadcrumbs } from "../../ui/BreadCrums/BreadCrums";
import { Container } from "../../ui/containers/Container/Container";
import styles from "./Skins.module.css";

interface ISkinksPage {
  game: string;
  query: TQuery;
  isMobile: boolean;
}

const Skins: FC<ISkinksPage> = async ({ game, query, isMobile }) => {
  const filters = await filtersService.getFilters(game);
  const { category, sort, ...restFiltres } = filters || {};

  return (
    <>
      <Breadcrumbs />
      <section className={styles.root}>
        <Container>
          <SkinsHead game={game} />
          <div className={styles.box}>
            <Categories categories={category} />
            <FiltersTopGroup sort={sort} className={styles.filters_top} />
            <div className={styles.grid}>
              {restFiltres && <Filters filtres={restFiltres} query={query} />}
              <Catalog
                game={game}
                query={query}
                isMobile={isMobile}
                className={styles.catalog}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skins;
