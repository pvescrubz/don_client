
import { PLATFORM_CONFIG, TGamePlatform } from "@/shared/content/platorms.config";
import { FC } from "react";
import { AllBalanceNavButton } from "../AllBalanceNavButton/AllBalanceNavButton";
import styles from "./AllBalanceNav.module.css";

export const AllBalanceNav: FC = () => {
  const platforms: TGamePlatform[] = Object.values(PLATFORM_CONFIG);
  
  return (
    <div className={styles.root}>
      {platforms.map((platform, index) => (
        <AllBalanceNavButton key={index} platform={platform} />
      ))}
    </div>
  );
};
