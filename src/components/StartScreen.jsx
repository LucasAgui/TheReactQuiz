import { FormattedMessage } from 'react-intl';
import useQuizContext from '../hooks/useQuizContext';
function StartScreen() {
	const { numQuestions, dispatch } = useQuizContext();
	return (
		<div className="start">
			<h2>
				<FormattedMessage
					id="app.start"
					defaultMessage="Bienvenido al Quiz de React"
				/>
			</h2>
			<h3>
				{numQuestions}{' '}
				<FormattedMessage
					id="app.description"
					defaultMessage="preguntas para probar tu maestria en React"
				/>
			</h3>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: 'start' })}>
				<FormattedMessage id="app.startButton" defaultMessage="Comenzar" />
			</button>
		</div>
	);
}

export default StartScreen;
