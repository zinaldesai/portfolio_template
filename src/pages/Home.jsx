import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/placeholder_hero_background.jpg'

const fullName = 'Zinal';
const personalQuote = '"Whether you think you can or think you can\'t, either way you\'re right." - Henry Ford';
const professionalSummary = 'Hi, my name is Zinal Desai. I am a results-driven professional with a strong background in full-stack development and event coordination. Adept at creating dynamic web applications and managing large-scale events, combining technical proficiency with exceptional organizational skills. Passionate about leveraging technology to enhance user experiences and streamline project execution.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h2 className="subsection-big-header">Introduction</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home