import { Box, Typography, Card, Button } from "@mui/material";
import styles from "./cogeInput.module.scss";
import React, { useState, useEffect, forwardRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-textmate";

type ProgrammingLanguage = "JavaScript" | "Python" | "C++";

interface CodeInputProps {
  defaultText: string;
  language: ProgrammingLanguage;
  onCheck: (inputValue: string, language: ProgrammingLanguage) => void;
  onChange: () => void;
}

const CodeInput = forwardRef<AceEditor | null, CodeInputProps>(
  ({ defaultText, language, onCheck, onChange }, ref) => {
    const [currentValue, setCurrentValue] = useState<string>(defaultText);

    useEffect(() => {
      setCurrentValue(defaultText);
    }, [defaultText]);

    const handleChange = (value: string) => {
      setCurrentValue(value);
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
          Введите ваше решение
        </Typography>
        <div className={styles.inputBlock}>
          <Card>
            <AceEditor
              mode={language.toLowerCase()}
              theme='textmate'
              value={currentValue}
              fontSize={18}
              onChange={handleChange}
              name='code-editor'
              editorProps={{ $blockScrolling: true }}
              height='50vh'
              ref={ref}
              className={styles.aceEditor}
              showPrintMargin={false}
            />
          </Card>
          <div className={styles.buttonMenu}>
            <Button
              variant='contained'
              className={styles.button}
              onClick={handleClear}
            >
              Очистить
            </Button>
            <Button
              variant='contained'
              className={styles.button}
              onClick={handleCheck}
            >
              Проверить
            </Button>
          </div>
        </div>
      </Box>
    );
  }
);
export default CodeInput;
