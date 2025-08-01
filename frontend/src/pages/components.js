import { useContext, useEffect, useRef, useState } from 'react';
import '../style.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { AppContext } from '../index';
export function Button({ text, functions, style, className = 'primary' }) {
  function onClick() {
    if (!functions) return
    functions.forEach(element => {
      element.call(null, []);
    });
  }
  return (
    <button style={style} className={className} onClick={onClick}>{text}</button>
  )
}
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string
}

export function InputLabel(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <label htmlFor={props.id} style={{ paddingLeft: '18px' }}>{props.text}</label>
      <input id={props.id} name={props.name} type={props.type}></input>
    </div>
  )
}

export function AnchorLink(props) {
  return (
    <div style={{ size: 'content', fontSize: '18px', alignSelf: 'flex-start', marginLeft: '40px' }}>
      <a href={props.href} style={{ color: 'hsl(200,100%,70%,1)', textShadow: '0 8px 4px black' }}>{props.text}</a>
    </div>
  )
}
export function Card({ cardName, children, state, style, functions, diveAnswers }) {
  let mydisplay = 'flex-end';
  if (state !== 'start') mydisplay = 'space-between';

  const { manageDiveAnswer, setDiveAnswers, getDiveAnswers } = useContext(AppContext)

  const [textAreaContent, setTextAreaContent] = useState(getDiveAnswers());
  function nextClicked() {
    if (functions) {
      functions[1].forEach(innerFunction => innerFunction.call(null))
    }


    setDiveAnswers(manageDiveAnswer(-1), "nextClicked")
    setTextAreaContent(getDiveAnswers())
    console.log(getDiveAnswers(), "content")


  }
  function prevClicked() {
    if (functions) {
      functions[0].forEach(innerFunction => innerFunction.call(null))
    }

    setDiveAnswers(manageDiveAnswer(-1), "prevClicked")
    setTextAreaContent(getDiveAnswers())
    console.log(getDiveAnswers(), "content")
  }
  useEffect(() => {
    console.log(textAreaContent, "CONTENT CHANGED")
  }, [textAreaContent])
  return (
    <div style={{ width: '100svw', position: 'absolute', ...style }}>

      <div className='questionCard' style={{}}>
        <div className='questionCard' style={{ padding: '0px', filter: 'none', minHeight: '320px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: "0px 0px", alignItems: 'center' }}>
            <p className='cardName'>{cardName}</p>
            {children}
            <TextArea areaHeight='200px' textContent={textAreaContent}></TextArea>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: mydisplay, alignItems: 'center', alignContent: 'flex-end' }}>
          {state !== 'start' && <svg onClick={prevClicked} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#E7E0E8" />
          </svg>}
          {state !== 'end' && <svg onClick={nextClicked} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#E7E0E8" />
          </svg>}
          {state === 'end' && <Button className='secondary' text={"Continue"} functions={functions[2]}></Button>}



        </div>
      </div>
    </div>
  )
}
export function TextArea({ areaHeight, textContent }) {
  const { manageDiveAnswer } = useContext(AppContext)
  const myTextArea = useRef(null)
  function setText(e) {
    manageDiveAnswer(e.target.value)
  }
  // console.log(myTextArea.current)

  return (

    <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', position: 'relative', height: 'auto', width: '100%', backgroundColor: 'transparent' }}>
      <textarea className='myTextArea' style={{ height: areaHeight }} ref={myTextArea} defaultValue={textContent} onChange={(e) => setText(e)}></textarea>
      <svg style={{ position: 'absolute', bottom: '0px', right: '0px', padding: '5px' }} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="white" strokeOpacity="0.4" />
      </svg>
    </div >

  )
}

export function CardCaroux({ carouxLength, children }) {





  const [myCards, setCards] = useState(() => {
    let startArray = [];
    for (let i = 0; i < carouxLength[0]; i++) {
      startArray.push(Date.now())
    }
    return startArray
  });
  let pos = 10;
  function removeCard() {
    if (myCards.length !== 1)
      setCards(prevCard => [...prevCard.slice(0, myCards.length - 1)]);
  };
  function addCard() {

    setCards(prevCard => {
      return [...prevCard, Date.now()];
    });
  };
  function resetCaroux() {

    setCards(() => {
      let startArray = [];
      for (let i = 0; i < carouxLength[1]; i++) {
        startArray.push(Date.now())
      }
      return startArray;
    })
  }
  return (
    <div className="cardCaroux">

      {myCards.length === 0 ? null : myCards.map((card, index) => {
        index = myCards.length - index - 1;
        return (
          React.Children.map(children, child => {
            if (React.isValidElement(child))
              return React.cloneElement(child, { functions: [[addCard, ...child.props.functions[0]], [removeCard, ...child.props.functions[1]], [resetCaroux, ...child.props.functions[2]]], style: { ...child.props.style, top: `${pos * index}px`, left: `${pos * index}px` } })
            return child
          })
        )

      })}

    </div>
  )
}

export function DiveCard({ cardTitle, cardContent, buttonText }) {
  return (
    <>
      <div className='diveCard'>
        <div style={{ fontSize: '19px', padding: '0px 0px' }}>{cardTitle}</div>
        <div style={{ padding: '5px 0px' }}>{cardContent}</div>
        <Button text={buttonText} className='primary' style={{ alignSelf: 'end' }}></Button>
      </div>
    </>
  )
}
DiveCard.propTypes = {
  cardTitle: PropTypes.string,
  cardContent: PropTypes.string,
  buttonText: PropTypes.string
}

export function QuoteCard({ cardContent }) {
  return (
    <>
      <div style={{ border: '2px solid hsl(0, 0%, 0%,0.3)', borderRadius: '5px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', gap: '10px', padding: '5px 20px', color: 'white', backdropFilter: 'blur(4px)' }}>
        <div style={{ fontSize: '14px' }}>Quote of the day</div>
        <div style={{ fontSize: '14px' }}>
          {cardContent}
        </div>
      </div >
    </>
  )
}
export function Accordion({ accHead, accContent }) {
  const [displaying, usediplaying] = useState(false);
  function showAccordion() {
    usediplaying(!displaying);

  }
  return (
    <>
      <div style={{ fontSize: '14px', color: 'white', display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', backgroundColor: 'hsl(0,0%,0%,0.5)' }}>
        <div onClick={showAccordion} style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>{accHead}{displaying !== true ? <svg style={{ alignSelf: 'center', width: '12px', height: "8px", fill: 'none' }} viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
          <path style={{ stroke: 'white', strokeWidth: '2px', strokeLinecap: "round", strokeLinejoin: 'round' }} d="M1 1.5L6 6.5L11 1.5" />
        </svg> :
          <svg style={{ alignSelf: 'center', width: '12px', height: "8px", fill: 'none' }} viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
            <path style={{ stroke: 'white', strokeWidth: '2px', strokeLinecap: "round", strokeLinejoin: 'round' }} d="M11 6.5L6 1.5L1 6.5" />
          </svg>}

        </div>
        {displaying && <div style={{ fontSize: '14px', fontWeight: 'lighter' }}>{accContent}</div>}
      </div >
    </>
  )
}


export function Components() {
  return (

    <><div style={{ height: '100svh', width: '100svw', display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', backgroundColor: "hsla(0, 0%, 15%, 1.00)" }}>
      <CardCaroux><Card state='' cardName={"Integral lens"}>
        <p>From your personal perspective, what feelings, beliefs, and past experiences are shaping this?</p>
      </Card></CardCaroux>
      {/* <Card state='end' cardName={"Integral lens"}>
        <p>From your personal perspective, what feelings, beliefs, and past experiences are shaping this?</p>
      </Card> */}
      <Accordion accHead={"MyAccordion"} accContent={"Hello Im Here"}></Accordion>
      <Accordion accHead={"You already hold the keys to understanding."} accContent={"Hello Im Here"}></Accordion>

      <QuoteCard cardContent={"Lorem ipsum Lorem ipsum Lorem ipsum quote of the day Lorem ipsum"}></QuoteCard>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <DiveCard cardTitle={"Deep Dive"} cardContent={"Explore the layers of your experience with a guided, in-depth reflection."} buttonText={"Go Deeper"}></DiveCard>
        <DiveCard cardTitle={"Deep Dive"} cardContent={"Explore the layers of your experience with a guided, in-depth reflection."} buttonText={"Go Deeper"}></DiveCard>
        <DiveCard cardTitle={"Memory Vault"} cardContent={"Revisit your past insights and observe your growth over time."} buttonText={"Star Gaze"}></DiveCard>
      </div>
      <div style={{ height: 'auto', width: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '30px' }}>
        <Button className='primary' text={"My Button"} style={{ width: "100px" }}></Button>
        <Button className='secondary' text={"My Button"} style={{ width: "100px" }}></Button>
        <Button className='tertiary' text={"My Button"} style={{ width: "100px" }}></Button>
      </div>
      <div style={{ height: 'auto', width: 'auto', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ height: '100px', width: '100px', backgroundColor: 'hsla(270,80%,50%, 1)' }}></div>

        <div style={{ height: '100px', width: '100px', backgroundColor: 'hsla(270,60%,50%, 1)' }}></div>

        <div style={{ height: '100px', width: '100px', backgroundColor: 'hsla(270,45%,50%, 1)' }}></div>
        <div style={{ height: '100px', width: '100px', backgroundColor: 'hsla(270, 30%, 39%, 1)' }}></div>
      </div>
    </div>
    </>
  )
}
