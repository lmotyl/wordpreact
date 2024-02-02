import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts/Posts';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Posts />

      </Box>
    </Container>
  );
}

export default App;
