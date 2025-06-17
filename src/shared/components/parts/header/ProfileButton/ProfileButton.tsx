import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { ButtonLink } from "../../../ui/Button/ButtonLink";
import { IconAccount } from "../../../ui/svg/IconAccount";
import styles from "./ProfileButton.module.css";

export const ProfileButton = () => {
  return (
    <ButtonLink
      className={styles.root}
      href={PRIVATE_PAGES.ACCOUNT_BALANCE.slug}
      variant="secondary"
      size="small"
    >
      <IconAccount />
    </ButtonLink>
  );
};
