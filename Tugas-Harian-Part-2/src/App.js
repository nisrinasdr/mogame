import { GantiTemaProvider } from './Tugas-15/GantiTemaContext';
import Routes from './Tugas-15/Routes';

function App() {
  return (
    <div>
      <GantiTemaProvider>
        <Routes />
      </GantiTemaProvider>
    </div>
  );
}

export default App;
