import { IconCS } from "@/shared/components/ui/svg/IconCS";
import { IconDOTA } from "@/shared/components/ui/svg/IconDOTA";
import { IconRUST } from "@/shared/components/ui/svg/IconRUST";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { GameNavBtn } from "../GameNavBtn/GameNavBtn";
import styles from "./GameNavBtnGroup.module.css";

const iconMap = {
  [APP_PAGES.SKINS_CS2.slug]: <IconCS />,
  [APP_PAGES.SKINS_DOTA2.slug]: <IconDOTA />,
  [APP_PAGES.SKINS_RUST.slug]: <IconRUST />,
};

export const GameNavBtnGroup: FC<TDiv> = ({ className, ...rest }) => {
  const skins = APP_PAGES.getSkins();

  return (
    <>
      {skins && (
        <div className={clsx(styles.root, className)} {...rest}>
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
