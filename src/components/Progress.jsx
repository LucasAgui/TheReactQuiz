import { FormattedMessage } from 'react-intl';
import useQuizContext from '../hooks/useQuizContext';

function Progress() {
	const { index, numQuestions, points, maxPossiblePoints, answer } =
		useQuizContext();
	return (
		<header className="progress">
			<progress max={numQuestions} value={index + Number(answer !== null)} />
			<p>
				<FormattedMessage id="app.progressQuestion" defaultMessage="Pregunta" />{' '}
				<strong>{index + 1}</strong> / {numQuestions}
			</p>
			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</header>
	);
}

export default Progress;
