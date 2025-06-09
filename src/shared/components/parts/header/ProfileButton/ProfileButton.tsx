import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { ButtonLink } from "../../../ui/Button/ButtonLink";
import { IconAccount } from "../../../ui/svg/IconAccount";
import styles from "./ProfileButton.module.css";

export const ProfileButton = () => {
  return (
    <ButtonLink
      className={styles.root}
      href={APP_PAGES.ACCOUNT.slug}
      variant="secondary"
      size="small"
    >
      <IconAccount />
    </ButtonLink>
  );
};
