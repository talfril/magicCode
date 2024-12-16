import { Box, Typography, Card, Button, TextareaAutosize } from "@mui/material";
import styles from "./cogeInput.module.scss";

interface CodeInputProps {
  defaultText: string; 
}

export const CodeInput = ({ defaultText }: CodeInputProps) => {
  return (
    <Box>
      <Typography variant='h4' component='h2' color='primary' gutterBottom>
        Введите ваше решение
      </Typography>
      <div className={styles.inputBlock}>
        <Card>
          <TextareaAutosize
            value={defaultText}
            className={styles.input}
            minRows={4}
            maxRows={100}
          />
        </Card>
        <Button variant='contained' className={styles.button}>
          <Typography variant='h5' component='p' color='secondary'>
            Проверить
          </Typography>
        </Button>
      </div>
    </Box>
  );
};

export default CodeInput;
