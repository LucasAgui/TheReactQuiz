function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
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
				<span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
				{maxPossiblePoints} ({Math.ceil(percentaje)}%)
			</p>
			<p className="highscore">(Highscore: {highscore} points)</p>
			<button
				className="btn btn-ui"
				style={{ float: 'none', margin: '0 auto' }}
				onClick={() => dispatch({ type: 'restart' })}>
				Restart
			</button>
		</>
	);
}
export default FinishScreen;
