import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function useQuizContext() {
	const context = useContext(QuizContext);
	if (context === undefined)
		return new Error('QuizContext fue usado fuera de QuizContextProvider');

	return context;
}
