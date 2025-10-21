import { createRoot } from 'react-dom/client';
import App from './presentation/App';

import './presentation/style.css';

const container = document.querySelector('#app');
const root = createRoot(container!);

root.render(<App />);