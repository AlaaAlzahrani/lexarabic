"use client"

import React from 'react';
import { Tajawal } from "next/font/google";
import { Rocket, Book, Handshake } from "lucide-react";
import FAQAccordion from "@/components/FAQ";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Lottie from 'lottie-react';
import footerAnimation from "@/public/footer_animation.json";

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
});

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => (
  <div className="bg-purple-50 p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-purple-600 ml-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    {
      router.push('/instructions');
    }
  };

  return (
    <div className={`${tajawal.className} min-h-screen`}>
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-20 overflow-hidden rounded-lg">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-8">LexArabic: اختبار كَلِم</h1>
          <p className="text-3xl mb-8">اختبار لغوي سريع للمتحدثين باللغة العربية</p>
          <Button 
            onClick={handleStartQuiz}
            className="bg-white text-purple-900 hover:bg-purple-100 font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            ابدأ الاختبار
          </Button>
        </div>
        {/* Subtle circular light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 mt-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">مميزات اختبار كَلِم</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              Icon={Rocket}
              title="سريع" 
              description="يستغرق 3 إلى 10 دقائق من وقتك"
            />
            <FeatureCard 
              Icon={Book}
              title="موثوق" 
              description={
                <>
                  تحققنا من صحته للمتحدثين باللغة العربية كلغة أولى وثانية. 
                  <Link href="https://link.springer.com/article/10.3758/s13428-023-02286-z" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline block mt-2">
                    اقرأ الدراسة
                  </Link>
                </>
              }
            />
            <FeatureCard 
              Icon={Handshake}
              title="سهل الاستخدام" 
              description="واجهة بسيطة وسهلة الاستخدام "
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-purple-50 py-20 mt-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Final Call to Action Section with Background Animation */}
      <section className="relative bg-white py-20 overflow-hidden mt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">مستعد لتقييم مستوى لغتك العربية؟</h2>
          <p className="text-xl mb-20">اكتشف مستواك في أقل من 10 دقائق</p>
          <Button 
            onClick={handleStartQuiz}
            className="mt-20 bg-purple-600 text-white hover:bg-purple-700 font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            ابدأ الاختبار الآن
          </Button>
        </div>
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-50">
          <Lottie
            loop
            animationData={footerAnimation}
            style={{ width: '100%', height: '70%' }}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;