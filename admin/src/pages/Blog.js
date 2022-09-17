import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import TextField from '@mui/material/TextField';
import {
  Button,
  Stack,
  Input,
  Checkbox,
  InputAdornment,
  Box,
  Card,
  Typography,
  OutlinedInput,
  CardHeader,
  Grid,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListItemText from '@mui/material/ListItemText';
// components
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary, PremiumPackage } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// import Card from 'src/theme/overrides/Card';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['A', 'B', 'Chat', 'D'];
export default function Blog() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Page title="Dashboard: Blog">
      <Container>    

       
        <Box
        mb={3}
        >
          <Card>
            <CardHeader title="Add New Plan" />
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Monthly Discount (%)" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Annual Discount (%)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Monthly Price (Rs.)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Annual Price (Rs.)" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-checkbox-label">Description</InputLabel>
                    <Select
                      label="Description"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      fullWidth
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Description" />}
                      renderValue={(selected) => selected.join(', ')}
                      // MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Stack direction="row" alignItems="center" justifyContent="left" mt={1}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="#"
                      //   startIcon={<Iconify icon="eva:plus-fill" />}
                    >
                      <AddCircleOutlineIcon
                        sx={{
                          marginRight: '10px',
                        }}
                      />
                      New Service
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                mb={3}
                // ml={1}
                mt={3}
              >
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="#"
                  //   startIcon={<Iconify icon="eva:plus-fill" />}
                  sx={{ pl: '20px', pr: '20px' }}
                >
                  Add
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>

        
      </Container>
      <PremiumPackage/>
    </Page>
  );
}
