"use client";

import React from 'react';
import { Card, CardContent } from './ui/card';

interface ScoreDisplayProps {
  score: number;
  timeTaken: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, timeTaken }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes} دقيقة و ${remainingSeconds} ثانية`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">

      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-lg font-semibold">درجتك النهائية</p>
          <div className="text-3xl font-bold text-purple-800">{score.toFixed(2)}%</div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">الوقت المستغرق</p>
          <div className="text-2xl font-bold text-purple-800">{formatTime(timeTaken)}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreDisplay;