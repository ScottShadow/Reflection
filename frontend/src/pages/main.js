import { useEffect, useMemo, useState } from "react"
import { Card, CardCaroux } from "./components"

export function MainPage() {
  return (
    <>
    </>
  )
}

export function QuickCheckIn() {
  const questions = useMemo(() => [["Giving the context", ["What situation, event, or specific thought just occurred or is happening that you'd like to check in on?"],
    ["What thoughts went through your mind in that moment? What are you telling yourself about this situation?"],
    ["What emotions did you feel, or are you feeling right now, related to that thought/situation?"],
    ["What was your immediate urge, or what did you feel like doing (or not doing)? What action did you take or are you likely to take?"]],
  ["Next Steps", [
    "Reflect on the thought you just identified. Is there another way to interpret the situation?"], [
      "How does the emotion you felt show up in your body? Simply observe it for a moment.",
      "Considering your typical reaction, what's one tiny different step you could take right now?",
      "What's one thing you can do to acknowledge the emotion you're feeling without letting it take over?",
      "If a wise friend were in your situation, what advice might they give you about your thought?",
      "What does your identified behavioral urge typically achieve for you, and what might it cost you?",
      "Briefly describe how your thought, emotion, and urge connect in this situation."
    ]], ["Mindfulness Exercise", ["Exhale completely, and hold your breath for 5 seconds after the exhale, then breathe in a shallowly, and exhale again then hold again for 5 seconds, Do this five times",
      "Notice 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.",
      "Quickly scan your body from head to toe. Where do you feel tension or relaxation?",
      "Silently acknowledge the emotion you're feeling. Then, gently imagine releasing it with an exhale."
    ]], ["Setting Intention", [
      "My intention for the next hour is to...",
      "For the rest of today, I will focus on...",
      "One small action I can take in the next 24 hours is...",
      "I intend to approach [situation/person] with more...",
      "My intention is to respond to [thought/emotion] with...",
      "Today, I choose to prioritize..."
    ]]], [])
  const [currDomain, setDomain] = useState(0)
  const [currQuestion, setQuestion] = useState(1)
  const [carouxLengthArray, setCarouxLength] = useState(() => {
    let ans = []
    questions.forEach(domain => ans.push(domain.length - 1))
    return ans
  })
  const [cardButtonsState, setCardButtonState] = useState('start')


  useEffect(() => {
    if (currQuestion === 1) setCardButtonState('start')
    if (currQuestion > 1) setCardButtonState('')
    if (currQuestion === questions[currDomain].length - 1) setCardButtonState('end')
    console.log("curr question", currQuestion)
  }, [currDomain, questions, currQuestion])

  function prevQuestion() {
    if (currQuestion > 1) setQuestion(currQuestion - 1)
    if (currQuestion === 1) { setDomain(currDomain - 1); setQuestion(questions[currDomain - 1].length - 1); }
  }
  function nextQuestion() {
    if (currQuestion < (questions[currDomain].length - 1)) setQuestion(currQuestion + 1)
  }
  function finalizeQuestions() {
    if (currDomain < questions.length) {
      setQuestion(1);
      setDomain(currDomain + 1);
      setCarouxLength(carouxLengthArray.splice(1, carouxLengthArray.length))
    }

    console.log("FINALIZED", currDomain, currQuestion)
  }

  return (
    <>
      <div style={{ position: 'absolute', top: '15vh' }}>
        <div className="boxRow" style={{ height: '100vh', width: '100vw', backgroundColor: 'transparent', overflow: 'hidden' }}>
          <CardCaroux carouxLength={carouxLengthArray}>
            <Card state={cardButtonsState} cardName={questions[currDomain][0]} functions={[[prevQuestion], [nextQuestion], [finalizeQuestions]]}>
              <p>{questions[currDomain][currQuestion][0]}</p>
            </Card>
          </CardCaroux>
        </div>
      </div>
    </>
  )
}
export function DeepDive() {
  return (
    <>
    </>
  )
}
