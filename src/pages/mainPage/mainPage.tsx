import { useState, useEffect, useRef } from "react";
import React from "react";
import styles from "./mainPage.module.scss";
import useDevice from "../../utils/useDevice";
import clsx from "clsx";
import Title from "../../components/title/title";
import Task from "../../components/task/task";
import ChangeLanguage from "../../components/changeLanguage/changeLanguage";
import CodeInput from "../../components/codeInput/codeInput";
import Result from "../../components/result/result";
import Loading from "../../components/loading/loading";
import {
  mockTask,
  mockResultDescriptionSuccess,
  mockResultDescriptionUnsuccess,
  mockResultText,
  mockProblemSolution,
  mockCorrectSolution,
} from "../../assets/data/mocks";
import { Box } from "@mui/material";
import AceEditor from "react-ace";

type Language = keyof typeof mockProblemSolution;

export const MainPage = () => {
  const device = useDevice();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const [taskDescription, setTaskDescription] = useState<string | null>(null);
  const [loadingTask, setLoadingTask] = useState<boolean>(true);
  const [loadingAnswer, setLoadingAnswer] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [resultDescription, setResultDescription] = useState<string | null>(
    null
  );

  const userCodeRef = useRef<AceEditor | null>(null);

  const languages = Object.keys(mockProblemSolution) as Array<Language>;

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language as Language);
    setIsAnswer(false);
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setLoadingTask(true);
        setTimeout(() => {
          setTaskDescription(mockTask);
          setLoadingTask(false);
        }, 2000);
      } catch (err) {
        console.error("Ошибка при получении задачи:", err);
        setError("Ошибка при получении задачи");
        setLoadingTask(false);
      }
    };

    fetchTask();
  }, []);

  const checkAnswerOnServer = (userCode: string, language: Language | null) => {
    if (!language) return "Ошибка языка";

    if (userCode === mockCorrectSolution[language]) {
      return mockResultDescriptionSuccess;
    } else {
      return mockResultDescriptionUnsuccess;
    }
  };

  const checkAnswer = () => {
    setLoadingAnswer(true);
    const userCode = userCodeRef.current?.editor.getValue() || ""; 

    setTimeout(() => {
      try {
        const response = checkAnswerOnServer(userCode, selectedLanguage);
        setResultDescription(response);
      } catch (err) {
        console.error("Ошибка при проверке ответа:", err);
        setResultDescription("Произошла ошибка при проверке.");
      } finally {
        setLoadingAnswer(false);
        setIsAnswer(true);
      }
    }, 2000);
  };

  const handleCodeChange = () => {
    setIsAnswer(false);
  };

  return (
    <main className={clsx(styles.pageStyle, styles[`pageStyle__${device}`])}>
      <Box className={clsx(styles.layout, styles[`layout__${device}`])}>
        <Title titleText='Magic Code' />
        {loadingTask ? (
          <Loading />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Task taskDescription={taskDescription || ""} />
        )}
        <ChangeLanguage
          languages={languages}
          onLanguageChange={handleLanguageChange}
        />
        <CodeInput
          ref={userCodeRef}
          defaultText={
            selectedLanguage ? mockProblemSolution[selectedLanguage] : ""
          }
          language={selectedLanguage || "JavaScript"} 
          onCheck={checkAnswer}
          onChange={handleCodeChange}
        />
        {isAnswer ? (
          <Result
            ResultDescription={resultDescription}
            ResultText={mockResultText}
          />
        ) : loadingAnswer ? (
          <Loading />
        ) : null}
      </Box>
    </main>
  );
};

export default MainPage;
