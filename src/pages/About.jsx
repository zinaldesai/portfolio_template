import Image from '../assets/pic.jpg';

const firstName = 'Zinal';
const jobTitle = 'software developer';
const jobLocation = 'Dallas, TX';
const careerObjective = 'I have a passion for building innovative and impactful technology solutions. Currently, I\'ve immersed myself as a Full Stack Developer trainee in NPower\'s Path2Tech Program to further my skills in both front and back end development. Ultimately, I aspire to work in a dynamic environment where I can collaborate with like-minded professionals and make a positive impact through the development and application of AI technologies.'
const goals = 'With a bachelor\'s degree in Cognitive Science with a concentration in Psychology/Human-Computer Interactions,  I am dedicated to bridging the gap between human behavior and technology. Through ongoing training and hands-on projects, I am continually expanding my expertise in the tech field. My passion stems from a deep-rooted desire to not only advance technology but to be part of a larger movement—creating innovative solutions that have a lasting, positive impact on society.';
const freeTime = 'During my free time, I enjoy baking, cooking, spending time with my friends and family, and playing pickleball.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          <img className='grad-pic' src={Image} alt="graduation picture" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>Hi there! I'm {firstName}, a {jobTitle} from {jobLocation}.</h2>
          <p>{careerObjective}</p>
          <p>{goals}</p>
          <p>{freeTime}</p>
        </section>
      </section>
    </main>
  )
}
 export default About;