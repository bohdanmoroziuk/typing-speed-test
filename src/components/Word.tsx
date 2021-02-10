import { FC, memo } from 'react';

interface WordProps {
  word: string;
  active: boolean;
  correct?: boolean;
}

const getClassName = ({ active, correct }: { active: boolean, correct?: boolean}) => {
  if (correct === true) return 'text-success';
  if (correct === false) return 'text-danger'
  if (active) return 'font-weight-bold';
  return ''
};

const Word: FC<WordProps> = ({ word, ...restProps }) => (
  <>
    <span 
      className={getClassName(restProps)}
    >
      {word}
    </span>
    {` `}
  </>
);

export default memo(Word);
