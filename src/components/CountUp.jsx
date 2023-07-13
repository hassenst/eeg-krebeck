import { useEffect, useState, useRef } from 'react';

const CountUp = (props) => {
  const [number, setNumber] = useState(0);
  const [ElementIsVisible, updateElementIsVisible] = useState(false);
  const counter = useRef();

  /**
   * Der Hook und Observer sind t stark inspiriert von https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/
   */
  useEffect(() => {
    if (number >= props.int) return;

    if (ElementIsVisible) {
      const intervalId = setInterval(() => {
        setNumber(number + 1);
      }, 5000 / props.int);
      return () => clearInterval(intervalId);
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      updateElementIsVisible(entry.isIntersecting);
    });

    observer.observe(counter.current);
  }, [ElementIsVisible, number]);

  return (
    <div ref={counter}>
      <p>
        <span className={`font-black text-8xl block ${props.className}`}>{number}</span>{' '}
        <span className="text-stone-400 text-lg font-medium">{props.unit}</span>
      </p>
    </div>
  );
};

export default CountUp;
