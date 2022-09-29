function AnimatedHeading() {
  const headingLetters = [
    [
      { letter: "o", delay: 1.7 },
      { letter: "a", delay: 1.6 },
      { letter: "k", delay: 1.5 },
      { letter: " ", delay: 0 },
      { letter: "a", delay: 1.4 },
      { letter: "n", delay: 1.3 },
      { letter: "d", delay: 1.2 },
      { letter: " ", delay: 0 },
      { letter: "s", delay: 1.1 },
      { letter: "t", delay: 1.2 },
      { letter: "o", delay: 1.3 },
      { letter: "n", delay: 1.4 },
      { letter: "e", delay: 1.5 },
    ],
    [
      { letter: "c", delay: 1.9 },
      { letter: "u", delay: 1.8 },
      { letter: "s", delay: 1.7 },
      { letter: "t", delay: 1.6 },
      { letter: "o", delay: 1.5 },
      { letter: "m", delay: 1.4 },
      { letter: " ", delay: 0 },
      { letter: "c", delay: 1.3 },
      { letter: "a", delay: 1.4 },
      { letter: "b", delay: 1.5 },
      { letter: "i", delay: 1.6 },
      { letter: "n", delay: 1.7 },
      { letter: "e", delay: 1.8 },
      { letter: "t", delay: 1.9 },
      { letter: "r", delay: 2.0 },
      { letter: "y", delay: 2.1 },
    ],
  ];

  const animationDelay = (delay) => ({
    animationDelay: `${delay}s`,
  });

  return headingLetters.map((line) => (
    <div style={{ display: "flex" }}>
      {line.map(({ letter, delay }) => (
        <div className="heading-letter-container">
          <div className="heading-letter" style={animationDelay(delay)}>
            {letter}
          </div>
        </div>
      ))}
    </div>
  ));
}

export default AnimatedHeading;
