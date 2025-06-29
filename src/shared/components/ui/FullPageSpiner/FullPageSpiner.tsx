import { useAppearanceDelay } from "@/shared/hooks/useAppearanceDelay";
import { Spinner } from "../svg/Spiner";
import styles from "./FullPageSpiner.module.css";

export function FullPageSpinner({ isLoading }: { isLoading?: boolean }) {
  const show = useAppearanceDelay(isLoading);

  if (show) {
    return (
      <div className={styles.root}>
        <Spinner className={styles.spiner} aria-label="Загрузка страницы" />
      </div>
    );
  }

  return null;
}
