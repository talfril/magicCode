import { Box, Typography, Card, Input, Button } from "@mui/material";

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
      <Card>
        <Input></Input>
      </Card>
      <Button variant='contained'>
        <Typography variant='h5' component='p' color='secondary'>
          Проверить
        </Typography>
      </Button>
    </Box>
  );
};

export default CodeInput;
