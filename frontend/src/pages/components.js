import '../style.scss';
export function PrimaryButton(props) {
  return (
    <button style={props.style} className='primary' onClick={props.onClick}>{props.text}</button>
  )
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
