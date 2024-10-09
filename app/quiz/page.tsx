"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from "@/components/hooks/use-toast";
import ProgressBar from '@/components/ProgressBar';
import { wordList, Word } from '@/app/data/wordList';
import { ShortTestInstructions } from '@/components/ShortTestInstructions';
import { calculateNormalizedGhentScore } from '@/utils/scoring';
import { generateQuizPages } from '@/utils/quizUtils';

interface SelectedWords {
  [key: number]: boolean;
}

type QuizResponse = {
  answer: number;
  wordType: "word" | "nonword";
}

export default function QuizPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedWords, setSelectedWords] = useState<SelectedWords>({});
  const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
  const [quizPages, setQuizPages] = useState<Word[][]>([]);
  const wordsPerPage = 15;

  useEffect(() => {
    setQuizStartTime(Date.now());
    setQuizPages(generateQuizPages(wordList, wordsPerPage));
  }, []);

  const totalPages = quizPages.length;
  const currentWords = quizPages[currentPage - 1] || [];

  const handleWordSelect = (wordId: number) => {
    setSelectedWords(prev => ({
      ...prev,
      [wordId]: !prev[wordId]
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else {
      // Quiz completed, calculate score and store result
      const score = calculateScore();
      const timeTaken = quizStartTime ? (Date.now() - quizStartTime) / 1000 : 0;
      
      // Store result in localStorage
      localStorage.setItem('quizResult', JSON.stringify({ score, timeTaken }));

      toast({
        title: "اختبار منتهي",
        description: "تم حفظ النتائج. سيتم توجيهك إلى صفحة النتائج.",
      });

      // Navigate to results page
      router.push('/results');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const calculateScore = (): number => {
    const responses: QuizResponse[] = wordList.map(word => ({
      answer: selectedWords[word.id] ? 1 : 0,
      wordType: word.isReal ? "word" : "nonword"
    }));
    return calculateNormalizedGhentScore(responses);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProgressBar currentPage={currentPage} totalPages={totalPages} />
      <h1 className="text-3xl font-bold mb-8 text-center">اختبار المفردات العربية</h1>
      <ShortTestInstructions />
      <div className="space-y-4">
        {currentWords.map((word: Word) => (
          <div key={word.id} className="flex items-center space-x-reverse space-x-4">
            <Checkbox
              id={`word-${word.id}`}
              checked={selectedWords[word.id] || false}
              onCheckedChange={() => handleWordSelect(word.id)}
              className="w-6 h-6"
            />
            <label htmlFor={`word-${word.id}`} className="text-lg cursor-pointer">
              {word.word}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-12">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} className="text-lg py-2 px-4 bg-purple-600 hover:bg-purple-700">
          السابق
        </Button>
        <Button onClick={handleNextPage} className="text-lg py-2 px-4 bg-purple-600 hover:bg-purple-700">
          {currentPage < totalPages ? 'التالي' : 'إنهاء الاختبار'}
        </Button>
      </div>
    </div>
  );
}