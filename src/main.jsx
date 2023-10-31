import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Navs from './Navs.jsx'
import SideBars from './SideBars.jsx'
import Contact from './Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <main className='dark:bg-slate-800'>

      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <Navs />
      </section>

      <section>
        <SideBars />
      </section>

      <section>
        <Contact />
      </section>

    </main>
    
  </React.StrictMode>,
)
