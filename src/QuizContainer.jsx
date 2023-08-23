import { useState } from "react";
import QuestionList from "./components/QuestionList";
import "./app.css";
import { useEffect } from "react";

const Quiz = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=20&category=20&difficulty=medium&type=multiple")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				data.results.forEach((element) => {
					element.options = element.incorrect_answers.map((answer) => answer);
					element.options.push(element.correct_answer);
					element.options.sort();
				});
				setQuestions(data.results);
			});
	}, []);
	console.log(questions);
	const [score, setScore] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const handleAnswerSelect = (selectedAnswer) => {
		const isCorrect = [...questions];
		if (selectedAnswer === isCorrect[currentQuestionIndex].correct_answer) {
			setScore(score + 1);
			isCorrect[currentQuestionIndex].correct = "Correct";
		} else {
			isCorrect[currentQuestionIndex].correct = "Wrong";
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		setQuestions(isCorrect);
	};

	const handleResetFunction = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
	};

	return (
		<>
			<h1>LE QUIZ</h1>
			<QuestionList
				questions={questions}
				currentQuestionIndex={currentQuestionIndex}
				handleAnswerSelect={handleAnswerSelect}
				score={score}
				handleResetFunction={handleResetFunction}
			/>
		</>
	);
};

export default Quiz;
