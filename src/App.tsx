import { Navbar, TailMovingCursor, Hero, Projects, Courses, Contact } from './components'
import { useMediaQuery } from './hooks'

function App() {
  const largerThan500 = useMediaQuery('(min-width: 500px)')

  return (<>
    <Navbar />
    <Hero />
    {/* <AboutMe /> */}
    <Projects />
    <Courses />
    <Contact />
    {largerThan500 && <TailMovingCursor />}
  </>
  )
}

export default App
