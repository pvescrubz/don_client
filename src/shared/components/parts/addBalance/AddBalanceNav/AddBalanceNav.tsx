import {
  IPlatformConfigItem,
  PLATFORM_CONFIG,
} from "@/shared/content/platorms.config";
import { FC } from "react";
import { AddBalanceNavButton } from "../AddBalanceNavButton/AddBalanceNavButton";
import styles from "./AddBalanceNav.module.css";

export const AddBalanceNav: FC = () => {
  const platforms: IPlatformConfigItem[] = Object.values(PLATFORM_CONFIG);

  return (
    <div className={styles.root}>
      {platforms.map((platform, index) => (
        <AddBalanceNavButton key={index} platform={platform} />
      ))}
    </div>
  );
};
