import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';

// Create styled components for the grid layout
const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Convention App
        </Typography>
        <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
          Dein persönlicher Begleiter für die Convention
        </Typography>
      </Box>

      <GridContainer>
        {/* Program Card */}
        <FeatureCard elevation={3}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <EventIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Programm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Entdecke alle Veranstaltungen der Convention
            </Typography>
          </Box>
          <Button 
            component={RouterLink} 
            to="/program" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            Zum Programm
          </Button>
        </FeatureCard>

        {/* Schedule Card */}
        <FeatureCard elevation={3}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <CalendarMonthIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Mein Zeitplan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Verwalte deinen persönlichen Zeitplan
            </Typography>
          </Box>
          <Button 
            component={RouterLink} 
            to="/schedule" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            Zum Zeitplan
          </Button>
        </FeatureCard>

        {/* Search Card */}
        <FeatureCard elevation={3}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <SearchIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Suche
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Finde Veranstaltungen nach Stichworten
            </Typography>
          </Box>
          <Button 
            component={RouterLink} 
            to="/search" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            Zur Suche
          </Button>
        </FeatureCard>
      </GridContainer>

      <Paper elevation={1} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Über die Convention
        </Typography>
        <Typography variant="body1" paragraph>
          Willkommen zur Convention 2025! Erlebe drei Tage voller spannender Veranstaltungen, 
          Workshops, Panels und mehr. Mit dieser App kannst du das komplette Programm durchsuchen 
          und dir deinen persönlichen Zeitplan erstellen.
        </Typography>
        <Typography variant="body1">
          Verpasse keine Veranstaltung mehr und plane deinen Besuch optimal!
        </Typography>
      </Paper>
    </Container>
  );
};

export default HomePage;
