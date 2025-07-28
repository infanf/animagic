import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import SchedulePage from './pages/SchedulePage';
import SearchPage from './pages/SearchPage';
import CalendarPage from './pages/CalendarPage';

// Import components
import Layout from './components/Layout';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
