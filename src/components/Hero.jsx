import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mg-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => {
            window.open('https://github.com/knightfury101');
          }}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles With <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Make your reading easier with Sum Up, an open-source AI powered article
        summarizer that converts long articles into succinct and
        easy-to-understand summaries.
      </h2>
    </header>
  );
};

export default Hero;
