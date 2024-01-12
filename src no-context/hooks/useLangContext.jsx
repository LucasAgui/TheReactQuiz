import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const useLangContext = function () {
	const context = useContext(LangContext);
	if (context === null)
		throw new Error('LangContext was used outside the CitiesProvider');
	return context;
};

export default useLangContext;
