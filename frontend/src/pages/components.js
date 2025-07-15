import '../style.scss';
import PropTypes from 'prop-types'
export function Button({ text, onClick, style, className = 'primary' }) {
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
export function Card({ cardName, children, state }) {
  let mydisplay = 'flex-end';
  if (state !== 'start') mydisplay = 'space-between';
  return (
    <>

      <div className='questionCard'>
        <div className='questionCard' style={{ padding: '0px', filter: 'none' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: "0px 0px", alignItems: 'center' }}>
            <p classname='cardName'>{cardName}</p>
            {children}
            <TextArea></TextArea>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: mydisplay, alignItems: 'center', alignContent: 'flex-end' }}>
          {state !== 'start' && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#E7E0E8" />
          </svg>}
          {state !== 'end' && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#E7E0E8" />
          </svg>}
          {state === 'end' && <Button className='secondary' text={"Continue"}></Button>}



        </div>
      </div>
    </>
  )
}
export function TextArea() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', position: 'relative', height: 'auto', width: '100%', backgroundColor: 'transparent' }}>
        <textarea></textarea>
        <svg style={{ position: 'absolute', bottom: '0px', right: '0px', padding: '5px' }} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="white" stroke-opacity="0.4" />
        </svg>

      </div >
    </>
  )
}
export function Components() {
  return (

    <><div style={{ height: '100svh', width: '100svw', display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', backgroundColor: "hsla(0, 0%, 15%, 1.00)" }}>
      <Card state='end' cardName={"Integral lens"}>
        <p>From your personal perspective, what feelings, beliefs, and past experiences are shaping this?</p>
      </Card>
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
