import { Box, Typography, Card } from "@mui/material";
import React from "react"

interface ResultProps {
  ResultDescription: string;
  ResultText?: string;
}

export const Result = ({ ResultDescription, ResultText }: ResultProps) => {
  return (
    <Box>
      <Typography variant='h4' component='h2' color='primary' gutterBottom>
        {ResultDescription}
      </Typography>
      <Card>
        {ResultText && (
          <>
            <Typography variant='body1' color='textSecondary'>
              {ResultText}
            </Typography>
          </>
        )}
      </Card>
    </Box>
  );
};

export default Result;
