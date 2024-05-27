import keyword_extractor from 'keyword-extractor';
import React from 'react';

interface BlankAnswerInputProps {
  answer: string;
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const blank = '_____';

const BlankAnswerInput: React.FC<BlankAnswerInputProps> = React.memo(
  ({ answer, setBlankAnswer }) => {
    const keywords = React.useMemo(() => {
      const words = keyword_extractor.extract(answer, {
        language: 'english',
        remove_digits: true,
        return_changed_case: false,
        remove_duplicates: false,
      });
      // mix the keywords and pick 2
      const shuffled = words.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    }, [answer]);

    const answerWithBlanks = React.useMemo(() => {
      const answerWithBlanks = keywords.reduce((acc, curr) => {
        return acc.replaceAll(curr, blank);
      }, answer);
      setBlankAnswer(answerWithBlanks);
      return answerWithBlanks;
    }, [answer, keywords, setBlankAnswer]);

    return (
      <div className="mt-4 flex w-full justify-start">
        <h1 className="text-xl font-semibold">
          {/* replace the blanks with input elements */}
          {answerWithBlanks.split(blank).map((part, index) => {
            return (
              <React.Fragment key={index}>
                {part}
                {index === answerWithBlanks.split(blank).length - 1 ? (
                  ''
                ) : (
                  <input
                    id="user-blank-input"
                    className="w-28 border-b-2 border-black text-center focus:border-2 focus:border-b-4 focus:outline-none dark:border-white"
                    type="text"
                  />
                )}
              </React.Fragment>
            );
          })}
        </h1>
      </div>
    );
  }
);

export default BlankAnswerInput;
