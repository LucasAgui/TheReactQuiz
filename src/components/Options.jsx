import useQuizContext from '../hooks/useQuizContext';

function Options({ question }) {
	const { dispatch, answer } = useQuizContext();
	const hasAnswered = answer !== null;
	return (
		<div className="options">
			{question.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? 'answer' : ''} ${
						hasAnswered
							? index === question.correctOption
								? 'correct'
								: 'wrong'
							: ''
					}`}
					key={option}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: 'newAnswer', payload: index })}>
					{option}
				</button>
			))}
		</div>
	);
}

export default Options;
