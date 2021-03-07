import './App.css';

import Index from './Component/Index';
import { LoginProvider } from './Component/Login/LoginContext';

function App() {
  return (
    <LoginProvider>
      <Index />
    </LoginProvider>
  );
}

export default App;
