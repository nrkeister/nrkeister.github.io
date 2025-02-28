import text from './utils/text';
import './globals.css';

export default function Home() {
  return (
    <div>
      <div>{text.homepage.jobTitle}</div>
      <div>{text.homepage.intro}</div>
    </div>
  );
};