import { Router } from './Router';
import Html from './components/Html';

const App = () => {
  return (
    <Html title="React SSR Playground">
      <Router />
    </Html>
  );
};

export default App;
