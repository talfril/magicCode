// import { useState } from "react";
import styles from "./mainPage.module.scss";
import useDevice from "../../utils/useDevice";
import clsx from "clsx";
import Title from "../../components/title/title";
import Task from "../../components/task/task";
import ChangeLanguage from "../../components/changeLanguage/changeLanguage";
import CodeInput from "../../components/codeInput/codeInput";
import Result from "../../components/result/result";
import {
  mockTask,
  // mockTaskExample,
  mockLanguages,
  mockResultDescription,
  mockResultText,
  mockProblemSolution
} from "../../assets/data/mocks";
import { Box } from "@mui/material";

// import // initRequest,
// // fetchStatus
// "../../utils/api";

export const MainPage = () => {
  const device = useDevice();
  console.log(device)

  return (
    <main className={clsx(styles.pageStyle, styles[`pageStyle__${device}`])}>
      <Box className={clsx(styles.layout, styles[`layout__${device}`])}>
        <Title titleText="Magic Code"/>
        <Task taskDescription={mockTask} />
        <ChangeLanguage languages={mockLanguages} />
        <CodeInput defaultText={mockProblemSolution.JavaScript}/>
        <Result ResultDescription={mockResultDescription} ResultText={mockResultText}/>
      </Box>
    </main>
  );
};

export default MainPage;
