import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

function App() {
  return (
    <>
     <div className="overflow-hidden">
     <Header/>
     <About />
      {/* Divider with gradient */}
      <WorkExperience />

      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>

      <Footer/>
     </div>
    </>

  )
}

export default App
