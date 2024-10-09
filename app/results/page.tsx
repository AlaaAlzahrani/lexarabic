"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ShareButtons from '@/components/ShareButtons';
import Lottie from 'lottie-react';
import animationData from '@/public/result_animation.json';

interface QuizResult {
  score: number;
  timeTaken: number;
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem('quizResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  if (!result) {
    return <div className="text-center text-2xl mt-10">جاري تحميل النتائج...</div>;
  }

  const shareUrl = 'https://lexarabic.netlify.app';
  const shareTitle = `حصلت على ${result.score}٪ في اختبار كَلِم (LexArabic)!`;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes} دقيقة و ${remainingSeconds} ثانية`;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 text-center bg-purple-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-10 text-purple-700">نتائج اختبار كَلِم (LexArabic)</h1>
      
      <div className="mb-10 flex justify-center">
        <Lottie 
          animationData={animationData} 
          style={{ width: 300, height: 300 }} 
          loop={true} 
          autoplay={true}
        />
      </div>
      
      <div className="mb-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">أداؤك في الاختبار</h2>
        <p className="text-2xl mb-4">
          <span className="font-bold text-purple-600">درجتك:</span> {result.score}٪
        </p>
        <p className="text-xl">
          <span className="font-bold text-purple-600">الوقت المستغرق:</span> {formatTime(result.timeTaken)}
        </p>
      </div>
      
      <div className="mb-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">شارك نتيجتك مع الآخرين</h2>
        <p className="mb-4 text-gray-600">أخبر أصدقاءك عن أدائك في اختبار كَلِم!</p>
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>
      
      <Button 
        onClick={() => router.push('/')} 
        className="text-lg py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        العودة إلى الصفحة الرئيسية
      </Button>
    </div>
  );
}