import styles from './Header.module.css';

import useLangContext from '../hooks/useLangContext';
import { FormattedMessage } from 'react-intl';

function Header({ dispatch }) {
	const { establecerLenguage } = useLangContext();

	return (
		<header className="app-header">
			<div className={styles.languages}>
				<img
					src="/imgs/es.png"
					alt="Image of Spain"
					onClick={() => {
						establecerLenguage('es-ES');
						dispatch({ type: 'changeLanguage', payload: 'es-ES' });
					}}
				/>
				<img
					src="/imgs/gb.png"
					alt="Image of Britain"
					onClick={() => {
						establecerLenguage('en-US');
						dispatch({ type: 'changeLanguage', payload: 'en-US' });
					}}
				/>
			</div>
			<img src="logo512.png" alt="React logo" />
			<h1>
				<FormattedMessage
					id="app.welcome"
					defaultMessage="Bienvenido al Quiz de React"
				/>
			</h1>
		</header>
	);
}

export default Header;
