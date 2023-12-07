import heroImg from './assets/profile.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Osada (Wathsala) Kalubadanage</h1>
          <p>
            Projects are the most practical way to learn any language, and
            <span> React </span>
            is no exception. Solidify knowledge of React by creating these cool
            projects.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='projects' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
