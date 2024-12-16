import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
// import styles from "./changeLanguage.module.scss"

interface ChangeLanguageProps {
  languages: string[];
}

export const ChangeLanguage = ({ languages }: ChangeLanguageProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box>
      <Typography variant='h4' component='h2' color='primary' gutterBottom>
        Выберите язык программирования для решения задачи
      </Typography>
      <FormControl fullWidth>
        <InputLabel id='language-select-label'>
          Язык программирования
        </InputLabel>
        <Select
          labelId='language-select-label'
          value={selectedLanguage}
          onChange={handleChange}
        >
          {languages.map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChangeLanguage;
