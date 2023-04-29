import { useState, useEffect, useRef } from "react"
import { BoostLink, Button, Card, Cards, Container, Footer, Header, Presentation, ShortLinkContainer, ShortenForm, Statistics } from "./styles/App."
import isUrl from "is-url"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [originalLink, setOriginalLink] = useState('')
  const [shortLink, setShortLink] = useState('')
  const inputRef = useRef(null)
  const [shortLinksList, setShortLinksList] = useState([])

  useEffect(() => {
    if (originalLink !== '') {
      fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
      .then(resp => resp.json())
      .then(data => setShortLink(data.result.short_link))
    }  
  }, [originalLink])
  
  useEffect(() => {

    if (localStorage.linksList) {
      setShortLinksList(JSON.parse(localStorage.linksList))
    }

    const newLink = {
      full: originalLink,
      short: shortLink,
    }
  
    if (newLink.full !== '') {
      setShortLinksList([...shortLinksList, newLink])
      setOriginalLink('')
    }

  }, [shortLink])

  useEffect(() => {
    if (shortLinksList.length > 0) {
      localStorage.setItem('linksList', JSON.stringify(shortLinksList))
    }
  }, [shortLinksList])

  function handleClickMenuBtn() {
    setMenuOpen(current => !current)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (inputRef.current.value === '') {
      inputRef.current.parentElement.classList.add('error')
    } else if (isUrl(inputRef.current.value)) {
      setOriginalLink(inputRef.current.value)
      inputRef.current.parentElement.classList.remove('error')
    } else {
      inputRef.current.parentElement.classList.add('error')
    }
  }

  function handleLinkClick(event) {
    navigator.clipboard.writeText(event.target.parentElement.firstChild.textContent)
    event.target.classList.add('copied')
    event.target.innerHTML = 'Copied!'
    toast.success("Link Copied to Clipboard!");
  }

  return (
    <Container>
      <ToastContainer 
        closeOnClick
        hideProgressBar={true}
        theme="light"
        position="top-center"
      />
      <Header>
        <div className="logo">
          <a href="/"><img src="/images/logo.svg" alt="Logo" /></a>
        </div>
        <nav className={`navbar ${menuOpen === true ? 'menu-open' : ''}`}>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <div className={`buttons ${menuOpen === true ? 'menu-open' : ''}`}>
            <Button className="login"><a href="/">Login</a></Button>
            <Button><a href="/">Sign Up</a></Button>
          </div>
        </nav>
        <button onClick={handleClickMenuBtn} className={`nav-toggle ${menuOpen === true ? 'menu-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Header>

      <Presentation>
        <div className="presentation-content">
          <div className="content">
            <h1>More than just shorter links</h1>
            <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
            <Button><a href="/">Get Started</a></Button>
          </div>
          <div className="img-container">
            <img src="/images/illustration-working.svg" alt="Illustration Working" />
          </div>
        </div>
      </Presentation>

      <Statistics>
        <div className="statistics-container">
          <ShortenForm>
            <div><input type="text" placeholder="Shorten a link here..." onChange={() => console.log()} ref={inputRef} /></div>
            <Button type="submit" onClick={handleSubmit}>Shorten It!</Button>
            <Button className="clear" onClick={(e) => {
              e.preventDefault()
              localStorage.removeItem('linksList')
              setShortLinksList([])
            }}>Clear</Button>
          </ShortenForm>
          
          {shortLinksList.map((link, index) => {
            return (
              <ShortLinkContainer key={index}>
                <span>{link.full}</span>
                <div className="short-link">
                  <span>{link.short}</span>
                  <Button onClick={handleLinkClick}>Copy</Button>
                </div>
              </ShortLinkContainer>
            )
          })}

          <div className="statistics-title">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>

          <Cards>

            <Card>
              <div className="img-container"><img src="/images/icon-brand-recognition.svg" alt="Brand Recognition Icon" /></div>
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
            </Card>
            
            <Card>
              <div className="img-container"><img src="/images/icon-detailed-records.svg" alt="Detailed Records Icon" /></div>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </Card>

            <Card>
              <div className="img-container"><img src="/images/icon-fully-customizable.svg" alt="Fully Customizable Icon" /></div>
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </Card>
            <span className="stripe"></span>

          </Cards>
        </div>
      </Statistics>

      <BoostLink>
        <h2>Boost your links today</h2>
        <Button><a href="/">Get Started</a></Button>
      </BoostLink>

      <Footer>
        <div className="footer-container">
          <img src="/images/logo.svg" alt="Company Logo" />
          <div className="features">
            <span>Features</span>
            <ul>
              <li><a href="/">Link Shortening</a></li>
              <li><a href="/">Branded Links</a></li>
              <li><a href="/">Analytics</a></li>
            </ul>
          </div>
          <div className="resources">
            <span>Resources</span>
            <ul>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className="company">
            <span>Companay</span>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Carrers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="social-medias">
            <a href="/"><img src="/images/icon-facebook.svg" alt="Facebook Icon" /></a>
            <a href="/"><img src="/images/icon-twitter.svg" alt="Twitter Icon" /></a>
            <a href="/"><img src="/images/icon-pinterest.svg" alt="Pinterest Icon" /></a>
            <a href="/"><img src="/images/icon-instagram.svg" alt="Instagram Icon" /></a>
          </div>
        </div>
        <span><a href="https://github.com/guifrangolino/" target="_blank" rel="noreferrer">Guilherme Souza</a> &copy; 2023</span>
      </Footer>

    </Container>
  )
}

export default App
