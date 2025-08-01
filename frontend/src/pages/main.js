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
  const questions = useMemo(() => [
    ["Identify and Disassociate", ["What specific thoughts, beliefs, or interpretations were going through your mind?"], ["What emotions did you feel, or are you feeling right now?"], ["What did you feel like doing, or what action did you take (or avoided)?"]],

    ["What's Present?",
      ["What situation, thought, or feeling is currently present for you that you'd like to explore?"], ["Describe what's on your mind. Is it a persistent thought, a difficult conversation, a feeling of unease, or a specific event?"]
    ],
    ["Where do you feel this in your body", ["Our emotions often manifest in the body. Where do you physically feel the sensation related to this experience?"]],

    ["Personal Perspective", ["What are your personal feelings, beliefs, or values that are most impacted by this situation?"], ["How do your past experiences or memories relate to how you're seeing this?"], ["What assumptions are you making about yourself in this context?"], ["Is there a personal desire or intention that this situation brings up for you?"]],
    ["Relational Perspective", ["How are others involved, and what might their perspectives or feelings be?"], ["Are there any group dynamics, team norms, or relationship patterns influencing this?"], ["How might communication (or lack thereof) between people be contributing?"]],
    ["The Objective", ["What are the purely objective, verifiable facts of the situation, stripped of interpretation?"], ["What is the current state of your physical body (e.g., sleep, nutrition, energy levels, health)?"], ["What are the observable events that led to this point?"]],
    ["Your Environment", ["What organizational structures, policies, or processes are influencing this?"], ["What power dynamics or resource distributions are evident in this context?"], ["How might the 'rules of the game' (explicit or implicit) affect the situation?"]]], [])
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
    if (currDomain < questions.length - 1) {
      setQuestion(1);
      setDomain(currDomain + 1);
      carouxLengthArray.shift();
      setCarouxLength(carouxLengthArray)
    }

    console.log("FINALIZED", currDomain, currQuestion)
  }

  return (
    <>
      <div style={{ position: 'absolute', top: '15vh' }}>
        <div className="boxRow" style={{ height: '100vh', width: '100vw', backgroundColor: 'transparent', overflow: 'hidden' }}>
          <CardCaroux carouxLength={carouxLengthArray}>
            <Card state={cardButtonsState} cardName={questions[currDomain][0]} diveAnswers={[]} functions={[[prevQuestion], [nextQuestion], [finalizeQuestions]]}>
              <p>{questions[currDomain][currQuestion][0]}</p>
            </Card>
          </CardCaroux>
        </div>
      </div>
    </>
  )
}
