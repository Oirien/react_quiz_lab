import { useState } from "react"

const Quiz = () => {
    const [questions, setQuestions] = useState([
        {
          question: "What was the name of the first computer virus that spread in the wild?",
          options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
          answer: "Brain"
        },
        {
          question: "Which programming language is often referred to as the 'mother of all languages'?",
          options: ["Java", "C", "Fortran", "Assembly"],
          answer: "C"
        },
        {
          question: "In what year was the company Google founded?",
          options: ["1996", "1998", "2000", "2004"],
          answer: "1998"
        }
      ]);
    const [score, setScore] = useState(0)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    // const handleAnswerSelect =(selectedAnswer) => {
    //     questions.map((question) => (selectedAnswer.id == question.id){
    //         if (selectedAnswer.answer == question.answer))
                // score++
            //setCurrentQuestionIndex( add one )
    }

    return (
        <>
            <QuestionList questions={questions} currentQuestionIndex={currentQuestionIndex} handleAnswerSelect={handleAnswerSelect}/>
        </>
        //getquestion to display
        //<Question question={} options={} handleAnswerSelect={} />
        //<button>Next</button>
    )
}

export default Quiz