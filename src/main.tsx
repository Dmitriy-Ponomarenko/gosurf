import { createRoot } from 'react-dom/client';
import './index.css';

export function App() {
  return <div>Template App</div>;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(<App />);
