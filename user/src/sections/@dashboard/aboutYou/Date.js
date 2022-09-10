import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   components: {
//     Mui
//     styleOverrides: {
      
//     }
//   }
// })

export default function Date(props) {

    const { label } = props;

    const [value, setValue] = useState(new window.Date());
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label={label}
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            PaperProps={{
              sx: {
                // height:'100px',
                fontSize: '30px',
                "&::-webkit-scrollbar": {
                  width: 8,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: '#f1f1f1',
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="Date of Birth" variant="outlined" fullWidth />}
          />
        </LocalizationProvider>
      </>
    );
}