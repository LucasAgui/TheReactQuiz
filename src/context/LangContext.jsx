import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import MensajesIngles from '../lang/en-US.json';
import MensajesEspaniol from '../lang/es-ES.json';
const LangContext = React.createContext();

function LangContextProvider({ children }) {
	const [mensajes, setMensajes] = useState(MensajesEspaniol);
	const [locale, setLocale] = useState('es-ES');

	const establecerLenguage = function (lenguaje) {
		switch (lenguaje) {
			case 'es-ES':
				setMensajes(MensajesEspaniol);
				setLocale('es-ES');
				break;
			case 'en-US':
				setMensajes(MensajesIngles);
				setLocale('en-US');
				break;
			default:
				setMensajes(MensajesEspaniol);
				setLocale('es-ES');
		}
	};

	return (
		<LangContext.Provider value={{ establecerLenguage }}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	);
}

export { LangContextProvider, LangContext };
