// import useTypewriter from "./typing";
import { Typewriter } from 'react-simple-typewriter'


interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  career?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  career,
  alignment = 'center'
}: SectionHeadingProps) => {

  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : ''} mb-12`}>
      <p className="text-primary-600 font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title} {career && <span>, A <span className="text-primary-600">
      {/* {useTypewriter(
        ["Software Engineer", "Full Stack Developer", "MERN Stack Enthusiast", "WordPress Developer", "No-Code or Zero Code Expert","UI/UX Designer"],
        100, // typing speed in ms
        600 // pause time before deleting
      )} */}

      <Typewriter
            words={["Software Engineer...", "Full Stack Developer...", "MERN Stack Enthusiast...", "WordPress Developer...", "No-Code or Zero Code Expert...", "UI/UX Designer..."]}
            loop={5}
            cursor
          />
      </span></span>}</h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
};

export default SectionHeading;