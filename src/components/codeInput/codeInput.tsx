import { Box, Typography, Card, Input, Button } from "@mui/material";
import styles from './cogeInput.module.scss'

// interface TaskProps {
//   taskDescription: string;
//   taskExample?: string;
// }

export const CodeInput = () => {
  return (
    <Box>
      <Typography variant='h4' component='h2' color='primary' gutterBottom>
        Введите ваше решение
      </Typography>
      <div className={styles.inputBlock}><Card>
        <Input className={styles.input}></Input>
      </Card>
      <Button variant='contained' className={styles.button}>
        <Typography variant='h5' component='p' color='secondary'>
          Проверить
        </Typography>
      </Button></div>
    </Box>
  );
};

export default CodeInput;
