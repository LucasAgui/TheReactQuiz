import { FormattedMessage } from 'react-intl';
import useQuizContext from '../hooks/useQuizContext';

function NextButton() {
	const { dispatch, answer, index, numQuestions } = useQuizContext();

	if (answer === null) return null;

	if (index < numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: 'nextQuestion' })}>
				<FormattedMessage
					id="app.nextQuestionButton"
					defaultMessage="Siguiente"
				/>
			</button>
		);

	if (index === numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: 'finish' })}>
				<FormattedMessage id="app.finishButton" defaultMessage="Finalizar" />
			</button>
		);
}

export default NextButton;
