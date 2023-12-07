import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='Summary' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Over 14 years of experience in developing robust, highly
            scalable,multi-tier applications with concentration on coding,
            design,development and implementation. I specialize in creating new
            software & systems, and structuring customized solutions to meet
            client specific needs. Excellent ability to grasp emerging
            technologies and interact smoothly and effectively with peers,higher
            management and clients.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
