import { Button } from "@/shared/components/ui/Button/Button";
import { IconUpdate } from "@/shared/components/ui/svg/IconUpdate";
import styles from "./UpdateButton.module.css";

export const UpdateButton = () => {
  return (
    <Button className={styles.root} size="small" noPadding variant="secondary">
      <IconUpdate />
    </Button>
  );
};
