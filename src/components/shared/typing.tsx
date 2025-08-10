import { useState, useEffect, useRef } from 'react';

type TypewriterState = 'typing' | 'pausing' | 'deleting';

export const useTypewriter = (
  words: string[],
  typingSpeed: number,
  pauseTime: number
): string => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [state, setState] = useState<TypewriterState>('typing');
  const [showCursor, setShowCursor] = useState(true);
  
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Main typewriter effect
  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const runTypewriter = () => {
      if (state === 'typing') {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setState('pausing');
        }
      } else if (state === 'pausing') {
        timeoutRef.current = setTimeout(() => {
          setState('deleting');
        }, pauseTime);
        return;
      } else if (state === 'deleting') {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setState('typing');
        }
      }
    };

    if (state === 'pausing') {
      runTypewriter();
    } else {
      const delay = state === 'typing' ? typingSpeed : typingSpeed * 0.5;
      timeoutRef.current = setTimeout(runTypewriter, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentWordIndex, state, words, typingSpeed, pauseTime]);

  return currentText + (showCursor ? '|' : ' ');
};





export default useTypewriter;