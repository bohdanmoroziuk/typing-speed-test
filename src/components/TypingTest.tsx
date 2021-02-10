import { FC, useState, useRef, ChangeEvent } from 'react';

import Word from 'components/Word';
import UserInputForm from 'components/UserInputForm';

import { fill, increment } from 'utils';

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt laudantium aliquid eveniet architecto quidem quis`;

const getCloud = () => text.split(' '); 

const TypingTest: FC = () => {
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const cloud = useRef(getCloud());

  const [correctWords, setCorrectWords] = useState<(boolean | undefined)[]>(fill(cloud.current.length, null));

  console.log(cloud.current);

  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.endsWith(' ')) {
      setActiveWordIndex(increment);
      setUserInput('');

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
      <p>{cloud.current.map(renderWord)}</p>
      <p>{activeWordIndex}</p>
      <UserInputForm 
        value={userInput}
        onChange={handleUserInputChange}
      />
    </div>
  );
};

export default TypingTest;
