import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<img src={aboutSvg} className='w-full h-64' />
				<article>
					<SectionTitle text='code and coffe' />
					<p className='text-slate-600 mt-8 leading-loose'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Doloribus laboriosam vel excepturi labore cupiditate, deleniti
						architecto, hic dolores ipsa consectetur magnam, quidem
						dignissimos voluptates unde? Nisi eveniet nemo similique eos!
					</p>
				</article>
			</div>
		</section>
	);
};
export default About;
