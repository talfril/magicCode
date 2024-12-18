import { Box, Typography, Card, Button, TextareaAutosize } from "@mui/material";
import styles from "./cogeInput.module.scss";
import React, { useState, useEffect } from "react";

interface CodeInputProps {
  defaultText: string;
}

export const CodeInput = ({ defaultText }: CodeInputProps) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultText);

  useEffect(() => {
    setCurrentValue(defaultText);
  }, [defaultText]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event?.target.value);
  };

  const handleClear: () => void = () => {
    setCurrentValue("");
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" color="primary" gutterBottom>
        Введите ваше решение
      </Typography>
      <div className={styles.inputBlock}>
        <Card>
          <TextareaAutosize
            value={currentValue}
            onChange={handleChange}
            className={styles.input}
            minRows={4}
            maxRows={100}
          />
        </Card>
        <div className={styles.buttonMenu}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleClear}
          >
            <Typography variant="h5" component="p" color="secondary">
              Очистить
            </Typography>
          </Button>
          <Button variant="contained" className={styles.button}>
            <Typography variant="h5" component="p" color="secondary">
              Проверить
            </Typography>
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default CodeInput;