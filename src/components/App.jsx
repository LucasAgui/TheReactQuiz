import { useEffect, useReducer } from 'react';
import useQuizContext from '../hooks/useQuizContext';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

export default function App() {
	const { status, dispatch } = useQuizContext();

	useEffect(
		function () {
			async function getQuestions() {
				await fetch('https://my-json-server.typicode.com/LucasAgui/mockjson/db')
					.then((res) => res.json())
					.then((data) => dispatch({ type: 'dataReceived', payload: data }))
					.catch((err) =>
						dispatch({ type: 'dataFailed', payload: err.message })
					);
			}
			getQuestions();
		},
		[dispatch]
	);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === 'loading' && <Loader />}
				{status === 'error' && <Error />}
				{status === 'ready' && <StartScreen />}
				{status === 'active' && (
					<>
						<Progress />
						<Question />
						<Footer>
							<Timer />
							<NextButton />
						</Footer>
					</>
				)}
				{status === 'finished' && <FinishScreen />}
			</Main>
		</div>
	);
}
