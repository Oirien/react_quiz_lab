import { useState } from "react";
import QuestionList from "./components/QuestionList";

const Quiz = () => {
	const [questions, setQuestions] = useState([
		{
			question: "What was the name of the first computer virus that spread in the wild?",
			options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
			answer: "Brain",
			correct: null
		},
		{
			question: "Which programming language is often referred to as the 'mother of all languages'?",
			options: ["Java", "C", "Fortran", "Assembly"],
			answer: "C",
			correct: null
		},
		{
			question: "In what year was the company Google founded?",
			options: ["1996", "1998", "2000", "2004"],
			answer: "1998",
			correct: null
		}
	]);
	const [score, setScore] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const handleAnswerSelect = (selectedAnswer) => {
		console.log(selectedAnswer);
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		if (selectedAnswer == questions[currentQuestionIndex].answer) {
			setScore(score + 1);
		}
	};
	const handleResetFunction = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
	};

	return (
		<>
			<h1>LE QUIZ</h1>
			<h2>Your score is: {score}</h2>
			<QuestionList
				questions={questions}
				currentQuestionIndex={currentQuestionIndex}
				handleAnswerSelect={handleAnswerSelect}
				score={score}
				handleResetFunction={handleResetFunction}
			/>
		</>
		// getquestion to display
	);
};

export default Quiz;
