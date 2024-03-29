import { FormattedMessage } from 'react-intl';
import useQuizContext from '../hooks/useQuizContext';

function FinishScreen() {
	const { points, maxPossiblePoints, highscore, dispatch } = useQuizContext();
	const percentaje = (points / maxPossiblePoints) * 100;

	let emoji;
	if (percentaje === 100) emoji = '🥇​';
	if (percentaje >= 80) emoji = '​🔥​​';
	if (percentaje >= 60 && percentaje < 80) emoji = '​👍​​​';
	if (percentaje >= 40 && percentaje < 60) emoji = '​​🤔​​​';
	if (percentaje >= 0 && percentaje < 40) emoji = '​​🙁​​​';
	if (percentaje === 0) emoji = '​​😐​​​​';

	return (
		<>
			<p className="result">
				<span>{emoji}</span>
				<FormattedMessage
					id="app.scored1"
					defaultMessage="Tu puntiación es de un maximo posible de"
				/>{' '}
				<strong>{points}</strong>{' '}
				<FormattedMessage
					id="app.scored2"
					defaultMessage="de un maximo posible de"
				/>{' '}
				<strong>{maxPossiblePoints}</strong> ({Math.ceil(percentaje)}%)
			</p>
			<p className="highscore">
				(
				<FormattedMessage
					id="app.points1"
					defaultMessage="de un maximo posible de"
				/>{' '}
				{highscore}{' '}
				<FormattedMessage
					id="app.points2"
					defaultMessage="de un maximo posible de"
				/>
				)
			</p>
			<button
				className="btn btn-ui"
				style={{ float: 'none', margin: '0 auto' }}
				onClick={() => dispatch({ type: 'restart' })}>
				<FormattedMessage id="app.resetButton" defaultMessage="Reiniciar" />
			</button>
		</>
	);
}
export default FinishScreen;
