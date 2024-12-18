import { Box, Typography, Card } from "@mui/material";
import React from "react";


interface TaskProps {
  taskDescription: string;
  taskExample?: string;
}

export const Task = ({ taskDescription, taskExample }: TaskProps) => {
  return (
    <Box>
      <Typography variant='h4' component='h2' color='primary' gutterBottom>
        Задача
      </Typography>
      <Card>
        <Typography variant='body1' color='textSecondary'>
          {taskDescription}
        </Typography>
        {taskExample && (
          <>
            <Typography variant='h5' component='h3' color='textSecondary'>
              Ожидается такой результат выполнения:
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {taskExample}
            </Typography>
          </>
        )}
      </Card>
    </Box>
  );
};

export default Task;
