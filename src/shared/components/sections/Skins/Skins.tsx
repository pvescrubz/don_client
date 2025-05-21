import { FC } from "react";
import { Catalog } from "../../parts/catalog/Catalog/Catalog";
import { Categories } from "../../parts/catalog/Categories/Categories";
import { Filters } from "../../parts/catalog/Filters/Filters";
import { Container } from "../../ui/containers/Container/Container";
import styles from "./Skins.module.css";

interface ISkinksPage {
  game: string;
  query: { [key: string]: string | undefined };
}

const Skins: FC<ISkinksPage> = async ({ game }) => {
  const filtresRes = await fetch(`http://localhost:8080/api/filters/${game}`);
  const filters = await filtresRes?.json();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { category, sort, ...restFiltres } = filters;

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.box}>
          {category && <Categories categories={category} />}

          <div className={styles.flex}>
            <Filters filtres={restFiltres} />
            <Catalog />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skins;
