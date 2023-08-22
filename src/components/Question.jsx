import Option from "./Option";

function Question({ questionItem, handleAnswerSelect }) {
	return (
		<>
			<h3>{questionItem.question}</h3>
			<Option questionItem={questionItem} handleAnswerSelect={handleAnswerSelect} />
		</>
	);
}

export default Question;
