import styles from "./statistic.module.scss";
import useDevice from "../../utils/useDevice";
import clsx from "clsx";

interface StatisticProps {
  lifeCells: number;
  substrateCells: number;
  specialCells: number;
  onButtomClick: () => void;
}

export const Statistic = ({
  lifeCells,
  substrateCells,
  specialCells,
  onButtomClick,
}: StatisticProps) => {
  const device = useDevice();

  return (
    <div className={clsx(styles.page, styles[`page__${device}`])}>
      <aside className={styles.aside}>
        <h3 className={styles.header}>Статистика мира</h3>
        <p className={styles.text}>
          Число живых клеток:&nbsp;
          <span className={styles.accentNumber}>{lifeCells}</span>
        </p>
        <p className={styles.text}>
          Число клеток субстрата:&nbsp;
          <span className={styles.accentNumber}>{substrateCells}</span>
        </p>
        <p className={styles.text}>
          Число особенных клеток:&nbsp;
          <span className={styles.accentNumber}>{specialCells}</span>
        </p>

        <button type='button' className={styles.button} onClick={onButtomClick}>
          Остановить жизнь!
        </button>
      </aside>
    </div>
  );
};

export default Statistic;
