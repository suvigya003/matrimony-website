import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box,Card,Grid, Container,Button, Typography } from '@mui/material';
// components
import POSTS from '../_mock/matchedProfilesContent';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppMatches,
} from '../sections/@dashboard/app';
// import BlogPostCard from './BlogPostCard';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        

        <Grid container spacing={3}>
          

          {/* <Grid item xs={12} md={12} lg={12}>
            <AppNewsUpdate
              title="Matched Profiles"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                // title: faker.name.jobTitle(),
                title: 'Jane R Lamy',
                // description: faker.name.jobTitle(),
                description: "29 yrs, 5 feet, Never Married, Hindu, Brahmin",
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}
          <Box ml={3}>
          
          <Card ml={3}>
          <Box sx={{ p: 2,pb:0, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
            <Box  p={3}>
            <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <AppMatches key={post.id} post={post} index={index} />
          ))}
        </Grid>
            </Box>
          
          </Card>
          </Box>
          

         
        </Grid>
      </Container>
    </Page>
  );
}
