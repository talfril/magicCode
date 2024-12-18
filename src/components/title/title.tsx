import styles from "./title.module.scss";
import { Typography } from "@mui/material";
import React from "react";


export const Title = ({ titleText }: { titleText: string }) => {
    return (
    <Typography
      variant='h1'
      component='h1'
      color='primary'
      className={styles.title}
    >
      {titleText}
    </Typography>
  );
};

export default Title;
