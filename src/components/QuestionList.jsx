import Question from "./Question";

function QuestionList({ questions, currentQuestionIndex, handleAnswerSelect, score, handleResetFunction }) {
	if (questions.length >= currentQuestionIndex + 1) {
		return (
			<>
				<Question questionItem={questions[currentQuestionIndex]} handleAnswerSelect={handleAnswerSelect} />
			</>
		);
	} else {
		return (
			<>
				<h1>Your final score is {score}</h1>
				<button
					onClick={() => {
						handleResetFunction();
					}}
				>
					TRY AGAIN
				</button>
			</>
		);
	}
}

export default QuestionList;
