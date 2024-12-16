// import { useState } from "react";
import styles from "./mainPage.module.scss";
import useDevice from "../../utils/useDevice";
import clsx from "clsx";

// import // initRequest,
// // fetchStatus
// "../../utils/api";

export const MainPage = () => {
  const device = useDevice();

  return (
    <main className={clsx(styles.pageStyle, styles[`pageStyle__${device}`])}>
      <div>Описание задачи</div>
      <div>Выбор языка</div>
      <div>Редактор кода</div>
      <div>Кнопка отправки на сервер</div>
      <div>Отображение результата</div>
    </main>
  );
};

export default MainPage;
