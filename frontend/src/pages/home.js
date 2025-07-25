import { useEffect, useState } from "react"

export default function Home() {
  const [menuIsOn, setIsOn] = useState(false)
  return (
    <div style={{ position: 'static', display: 'flex', flexDirection: 'column', padding: '0px', margin: '0px' }}>
      <Navbar isOnCurrent={menuIsOn}></Navbar>
      <div onClick={() => { setIsOn(!menuIsOn); }} style={{ backgroundColor: 'cyan', height: 'auto', width: '100svw', position: 'static', border: '2px solid black' }} >
      </div>
    </div>
  )
}

function Navbar({ isOnCurrent }) {
  return (
    <div style={{ position: 'sticky', top: '0', zIndex: 2, width: 'auto', height: '50px', backgroundColor: 'white', padding: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '2px solid hsla(0, 0%, 13%, 0.3)' }}>
      <div className='icon' style={{ height: '50px', width: '50px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>Reflection</div>
      <Menu isOnCurrent={isOnCurrent}></Menu>
    </div>
  )
}

function Menu({ isOnCurrent }) {
  const [isOn, setIsOn] = useState(isOnCurrent)
  useEffect(() => {
    setIsOn(false)
  }, [isOnCurrent])
  return (
    <>
      <svg onClick={() => { setIsOn(!isOn) }} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_119_319)">
          <path d="M19 34V32H37V34H19ZM19 29V27H37V29H19ZM19 24V22H37V24H19Z" fill="#49454F" />
        </g>
        <defs>
          <clipPath id="clip0_119_319">
            <rect width="56" height="56" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {isOn && <div onMouseOut={() => { setIsOn(!isOn) }} style={{
        height: '50svh', width: '24svw', position: 'absolute', backgroundColor: 'hsla(0, 0%, 00%, 0.4)', top: '60px',
        right: '0px', borderRadius: '0px 0px 5px 5px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
        alignContent: 'center', alignItems: 'center', gap: '16px', padding: '16px 10px', zIndex: 3
      }}>
        <a>Home</a>
        <a>Services</a>
        <a>Contact</a>
      </div>}
    </>
  )
}
