import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { eventService } from '../services/eventService';
import { Event } from '../models/types';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle search
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    
    try {
      setLoading(true);
      setHasSearched(true);
      const results = await eventService.searchEvents(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Veranstaltungen suchen
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Suche nach Veranstaltungen anhand von Titel, Beschreibung oder Tags.
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <SearchBar onSearch={handleSearch} />
        </Paper>
        
        {hasSearched && (
          <Box sx={{ mt: 2 }}>
            {searchResults.length > 0 ? (
              <EventList 
                events={searchResults} 
                loading={loading} 
                title={`Suchergebnisse für "${searchQuery}" (${searchResults.length})`} 
              />
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
                Keine Veranstaltungen gefunden für "{searchQuery}".
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SearchPage;
