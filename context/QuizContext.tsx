import React, { createContext, useState, useContext } from 'react';

type QuizContextType = {
  currentQuestion: number;
  score: number;
  answers: string[];
  setCurrentQuestion: (question: number) => void;
  setScore: (score: number) => void;
  setAnswer: (questionIndex: number, answer: string) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const setAnswer = (questionIndex: number, answer: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  return (
    <QuizContext.Provider value={{
      currentQuestion,
      score,
      answers,
      setCurrentQuestion,
      setScore,
      setAnswer
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};