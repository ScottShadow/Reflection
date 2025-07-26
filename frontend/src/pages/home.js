import { useEffect, useState } from "react"
import { Button, TextArea } from './components'

export default function Home() {
  const [menuIsOn, setIsOn] = useState(false)
  return (
    <div style={{ position: 'static', display: 'flex', flexDirection: 'column', padding: '0px', margin: '0px' }}>
      <Navbar isOnCurrent={menuIsOn}></Navbar>
      <div onClick={() => { setIsOn(!menuIsOn); }} style={{ backgroundColor: 'white', height: 'auto', width: '100svw', position: 'static', borderBottom: '2px solid hsla(0, 0%, 13%, 0.3)' }} >
        <div id='hero' className={"boxColumn"} style={{ padding: '20px 60px', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ margin: '0px', fontSize: '17px', fontWeight: 'bold' }}>A New Way To Perceive</h1>
          Get clarity when your thoughts feel like a nightmare. Reflection is your personal reset button to cut through the noise, find perspective, and become grounded.
          <Button style={{ alignSelf: 'end' }} text={'Get Centered'}></Button>
        </div>
        <section id='opening' className="boxColumn" style={{ padding: '16px', gap: '20px' }}>
          <h2 style={{ margin: '0px', fontSize: '17px', fontWeight: 'bold' }}>Stop Spiraling</h2>
          You know the feeling. A thought pops up and it feels 100% real, but it's an exaggeration—a nightmare playing out in your head. It feels logical, but it's just your first reaction, not the full story.

          <div className="boxRow" style={{ gap: '10px' }}>
            <p style={{ width: '40svw' }}>You snap at a friend and immediately feel like a bad person, ignoring that you slept 4 hours and had 3 deadlines to meet.</p>
            <div style={{ width: '2px', height: 'auto', backgroundColor: '#202020' }}></div>
            <p style={{ width: '40svw' }}>You have one thought about your future and adopt it as truth, forgetting to see the whole picture.</p>
          </div>
          <h2 style={{ margin: '0px', fontSize: '17px', fontWeight: 'bold' }}>Your Mind is Under Attack</h2>
          It's not just in your head. Our feeds are designed to reward whatever is dramatic, extreme, and exaggerated. This constant noise narrows our perspective, creates fake camps, and makes us feel more isolated than ever. Dumping your thoughts on social media can just self-affirm that narrow, negative view, making it feel even more real.
        </section>
        <section id='services' className="boxColumn" style={{ padding: '16px', gap: '20px', fontWeight: '300' }}>
          <h2 style={{ margin: '0px', fontSize: '17px', fontWeight: 'bold' }}>What we do for you</h2>
          We offer a channel to re-experience your own thoughts and create a different perspective. We give you the space to transcend the initial reaction and find the clarity in 20 minutes.
          <Button className="secondary" text={"Start a Session"} style={{ alignSelf: 'end' }}></Button>
          <div className="boxRow" style={{ gap: '0px 8px', font: '10px' }}>
            <div className="boxColumn" style={{ gap: '10px', padding: '10px 0px' }}>
              <h3 style={{ width: '42svw' }}>Find your center</h3>
              <p style={{ width: '42svw' }}>Go from a highly-charged emotional state to a calm, aligned one.</p>
            </div>
            <div style={{ width: '2px', height: 'auto', backgroundColor: '#202020' }}></div>
            <div className="boxColumn" style={{ gap: '10px', padding: '10px 0px' }}>
              <h3 style={{ width: '42svw' }}>Look Back</h3>
              <p style={{ width: '42svw' }}>See the difference between your first reaction and the actual experience.</p>
            </div>
            <div className="boxColumn" style={{ gap: '10px', padding: '10px 0px' }}>
              <h3>Gain Control</h3>
              <p style={{ width: '42svw' }}> End the negative spiral and get back to your baseline, where you can even joke about it.</p>
            </div>
            <div style={{ width: '2px', height: 'auto', backgroundColor: '#202020' }}></div>
            <div className="boxColumn" style={{ gap: '10px', padding: '10px 0px' }}>
              <h3>Hit Reset</h3>
              <p style={{ width: '42svw' }}>Choose a response that’s aligned with your values, not just your instincts.</p>
            </div>
          </div>
        </section>
        <section id='method' className="boxColumn" style={{ padding: '16px' }}>
          <h1>Our Method</h1>
          <h2>Pinpointing the Thought</h2>
          <p>What's the one thought or feeling taking up all your headspace right now? Get it out.</p>
          <h2>Maping Its Origin</h2>
          <p>We'll guide you to see where it's really coming from. Is it your personal history? Your relationships? Your environment? Your physical state?</p>
          <h2>Getting a Clean Look</h2>
          <p>Choose a response that’s aligned with your values, not just your instincts.</p>
          <h2>Then You Decide your Next Move</h2>
          <p>With a clearer head, use our simple toolkit to decide what to do next.</p>
          <h1 style={{ padding: '20px 0px 10px 0px' }}>Our Foundation</h1>
          <div className="boxColumn" style={{ gap: '10px' }}>
            <h2>CBT (Cognitive Behavioral Therapy)</h2>
            <p>This helps you see the clear, mechanical link between a situation, your thought, and your feeling. It's the "what's happening."</p>
            <a href="www" style={{ alignSelf: 'end' }}>Learn More</a>
          </div>
          <div className="boxColumn" style={{ gap: '10px' }}>
            <h2>ACT (Acceptance & Commitment Therapy)</h2>
            <p>This gives you tools to handle the tough thoughts without fighting them and to act based on what you truly value. It's the "what to do."</p>
            <a href="www" style={{ alignSelf: 'end' }}>Learn More</a>
          </div>
          <div className="boxColumn" style={{ gap: '10px' }}>
            <h2>Integral Theory</h2>
            <p>This provides a simple map (I, We, It, Its) to figure out where the thought is coming from—inside you, from others, or from the world around you. It's the "where it's from."</p>
            <a href="www" style={{ alignSelf: 'end' }}>Learn More</a>
          </div>
        </section>
        <section id="testimonials" className="boxColumn" style={{ padding: '20px' }}>
          <h2>Testimonials</h2>
          <div className="boxRow" style={{ gap: '10px' }}>
            <p style={{ width: '40svw', fontWeight: 'lighter' }}> "My creative blocks were frustrating. The guided flow helped me realize they were often tied to my relationships (We) and not just a lack of ideas. I can now address the real source." - <b>David L., Writer</b></p>
            <div style={{ width: '2px', height: 'auto', backgroundColor: 'hsla(0, 0%, 13%, 0.4)' }}></div>
            <p style={{ width: '40svw', fontWeight: 'lighter' }}>"My job anxiety was spiraling. The app helped me see it wasn't just me being 'not good enough,' but the pressure from my company's culture. It let me separate my worth from my work."  - <b>Sarah K., Product Manager</b></p>
          </div>
        </section>
        <section id='end' className="boxColumn" style={{ padding: '30px' }}>
          <h2>Ready to Understand Your Inner World?</h2>
          <p>No credit card. No gurus. Just your own mind, made clear.

            Take back control. Find your clarity. It's easier than you think.</p>
          <Button text={"Join Us"} style={{ alignSelf: 'end' }}></Button>
        </section>
      </div>
      <div className="boxRow" style={{ gap: '10px', padding: '10px 10px 50px 10px', height: 'auto' }}>
        <div className="boxColumn" style={{ width: '35svw', height: 'auto', gap: '10px', justifyContent: 'space-evenly' }}>
          <a href="/home">Privacy Policy</a>
          <a href="/home">Terms of Service</a>
          <a href="/home">Contact Us</a>
        </div>
        <div className="boxColumn" style={{ position: 'relative', gap: '10px', height: 'auto' }}>
          <h2 style={{ alignSelf: 'center' }}>Give Us Feedback</h2>
          <TextArea areaHeight={'80px'}></TextArea>
          <Button className="secondary" text={"Submit"} style={{ alignSelf: 'end' }}></Button>
        </div>

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
        height: 'auto', width: '24svw', position: 'absolute', backgroundColor: 'hsla(0, 0%, 100%, 1)', top: '60px',
        right: '0px', borderRadius: '0px 0px 5px 5px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
        alignContent: 'center', alignItems: 'center', gap: '16px', padding: '16px 10px', zIndex: 3
      }}>
        <a style={{ color: 'inherit', textDecoration: 'none' }} href="#hero">Home</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }} href="#services">Services</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }} href='#contact'>Contact</a>
      </div>}
    </>
  )
}
