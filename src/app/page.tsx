import text from './utils/text';
import './globals.css';
import './homepage.css';

export default function Home() {
  return (
    <div className='homebio'>
        <div className='job-title'>{text.homepage.jobTitle}</div>
        <div className='intro-button-container'>
          <div className='intro'>{text.homepage.intro}</div>
          <button>Copy My Email</button>
        </div>
        <div className='locations'>
          Locations:
          <span>Seattle, WA</span>
          <span>Brooklyn, NY</span>
          <span>Remote</span>
        </div>
    </div>
  );
};