import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { LangContextProvider } from './context/LangContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<LangContextProvider>
			<App />
		</LangContextProvider>
	</React.StrictMode>
);
