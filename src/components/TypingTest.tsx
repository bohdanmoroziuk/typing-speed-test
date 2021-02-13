import { FC, useState, useRef, ChangeEvent } from 'react';

import Word from 'components/Word';
import Timer from 'components/Timer';
import UserInputForm from 'components/UserInputForm';

import { fill, increment } from 'utils';

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt laudantium aliquid eveniet architecto quidem quis`;

const getCloud = () => text.split(' ').sort(() => Math.random() - 0.5); 

const TypingTest: FC = () => {
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const cloud = useRef(getCloud());

  const [correctWords, setCorrectWords] = useState<(boolean | undefined)[]>(fill(cloud.current.length, null));

  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (activeWordIndex === cloud.current.length) {
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      if (activeWordIndex === cloud.current.length - 1) {
        setStartCounting(false);
        setUserInput('Completed');
      } else {
        setUserInput('');
      }

      setActiveWordIndex(increment);

      setCorrectWords(correctWords => {
        const word = value.trim();

        return correctWords.map((correctWord, index) => {
          return index === activeWordIndex
            ? word === cloud.current[activeWordIndex]
            : correctWord;
        })
      });
    } else {
      setUserInput(value);
    }
  };

  const renderWord = (word: string, index: number) => (
    <Word
      key={index}
      word={word} 
      active={index === activeWordIndex}
      correct={correctWords[index]}
    />
  );

  return (
    <div className="typing-test">
      <Timer 
        startCounting={startCounting}
        correctWords={correctWords.filter(Boolean).length}
      />
      <p>{cloud.current.map(renderWord)}</p>
      <UserInputForm 
        value={userInput}
        onChange={handleUserInputChange}
      />
    </div>
  );
};

export default TypingTest;
