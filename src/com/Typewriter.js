import React, { useEffect, useState } from 'react';

function Typewriter({ text, speed = 90, startDelay = 400 }) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval;
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className="typewriter">
      {display}
      {!done && <span className="typewriter-caret" />}
    </span>
  );
}

export default Typewriter;
