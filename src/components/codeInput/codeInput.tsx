import { Box, Typography, Card, Button, TextareaAutosize } from "@mui/material";
import styles from "./cogeInput.module.scss";
import React, { useState, useEffect, forwardRef } from "react";

interface CodeInputProps {
  defaultText: string;
  language: "JavaScript" | "Python" | "C++";
  onCheck: (
    inputValue: string,
    language: "JavaScript" | "Python" | "C++"
  ) => void;
  onChange: () => void;
}

const CodeInput = forwardRef<HTMLTextAreaElement, CodeInputProps>(
  ({ defaultText, language, onCheck, onChange }, ref) => {
    const [currentValue, setCurrentValue] = useState<string>(defaultText);

    useEffect(() => {
      setCurrentValue(defaultText);
    }, [defaultText]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentValue(event.target.value);
      onChange();
    };

    const handleClear = () => {
      setCurrentValue("");
    };

    const handleCheck = () => {
      onCheck(currentValue, language);
    };

    return (
      <Box>
        <Typography variant='h4' component='h2' color='primary' gutterBottom>
          Введите ваше решение для {language}
        </Typography>
        <div className={styles.inputBlock}>
          <Card>
            <TextareaAutosize
              value={currentValue}
              onChange={handleChange}
              className={styles.input}
              minRows={4}
              maxRows={100}
              ref={ref}
            />
          </Card>
          <div className={styles.buttonMenu}>
            <Button
              variant='contained'
              className={styles.button}
              onClick={handleClear}
            >
              <Typography variant='h5' component='p' color='secondary'>
                Очистить
              </Typography>
            </Button>
            <Button
              variant='contained'
              className={styles.button}
              onClick={handleCheck}
            >
              <Typography variant='h5' component='p' color='secondary'>
                Проверить
              </Typography>
            </Button>
          </div>
        </div>
      </Box>
    );
  }
);

export default CodeInput;
