import './App.css';
import { Providers } from './providers';
import { Router } from './routes';

function App() {
  return (
    <Providers>
      <Router></Router>
    </Providers>
  );
}

export default App;
