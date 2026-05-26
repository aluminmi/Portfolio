import { useState, useEffect } from 'react';
 
interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}
 
export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    if (isPaused) return;
 
    const current = words[wordIndex % words.length];
 
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
 
        if (next === current) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
 
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
 
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);
 
  return displayed;
}