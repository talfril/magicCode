import { useState } from "react";
import React from "react";
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
  mockResultDescription,
  mockResultText,
  mockProblemSolution,
} from "../../assets/data/mocks";
import { Box } from "@mui/material";

type Language = keyof typeof mockProblemSolution;

export const MainPage = () => {
  const device = useDevice();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const languages = Object.keys(mockProblemSolution) as Array<Language>;

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language as Language);
  };

  return (
    <main className={clsx(styles.pageStyle, styles[`pageStyle__${device}`])}>
      <Box className={clsx(styles.layout, styles[`layout__${device}`])}>
        <Title titleText='Magic Code' />
        <Task taskDescription={mockTask} />
        <ChangeLanguage
          languages={languages}
          onLanguageChange={handleLanguageChange}
        />
        <CodeInput
          defaultText={
            selectedLanguage ? mockProblemSolution[selectedLanguage] : ""
          }
          language={selectedLanguage || "JavaScript"}
        />{" "}
        <Result
          ResultDescription={mockResultDescription}
          ResultText={mockResultText}
        />
      </Box>
    </main>
  );
};

export default MainPage;
