import Question from "./Question";
import "../app.css";

function QuestionList({ questions, currentQuestionIndex, handleAnswerSelect, score, handleResetFunction }) {
	if (questions.length >= currentQuestionIndex + 1) {
		return (
			<>
				<h2>Your score is: {score}</h2>
				<Question questionItem={questions[currentQuestionIndex]} handleAnswerSelect={handleAnswerSelect} />
			</>
		);
	} else {
		return (
			<>
				<h1>Your final score is {score}</h1>
				<h3>Questions</h3>
				<ul>
					{questions.map((question, index) => (
						<li key={index} className={question.correct}>
							{question.question} - {question.correct === "Correct" ? `Correct: ${question.correct_answer}` : "Wrong"}
							<h5>Answers</h5>
							<ul className="option__wrapper">
								{question.options.map((option, i) => (
									<li key={i} className="option">
										{option}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
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
