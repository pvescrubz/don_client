import { IconCS } from "@/shared/components/ui/svg/IconCS";
import { IconDOTA } from "@/shared/components/ui/svg/IconDOTA";
import { IconRUST } from "@/shared/components/ui/svg/IconRUST";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { GameNavBtn } from "../GameNavBtn/GameNavBtn";
import styles from "./GameNavBtnGroup.module.css";

const iconMap = {
  [APP_PAGES.SKINS_CS2.slug]: <IconCS />,
  [APP_PAGES.SKINS_DOTA2.slug]: <IconDOTA />,
  [APP_PAGES.SKINS_RUST.slug]: <IconRUST />,
};

export const GameNavBtnGroup = () => {
  const skins = APP_PAGES.getSkins();

  return (
    <>
      {skins && (
        <div className={styles.root}>
          {skins.map((item, index) => (
            <li key={index}>
              <GameNavBtn href={item.slug}>{iconMap[item.slug]}</GameNavBtn>
            </li>
          ))}
        </div>
      )}
    </>
  );
};
