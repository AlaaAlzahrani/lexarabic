import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-primary text-right">معلومات عن الموقع</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Text Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden order-2 md:order-1">
          <div className="p-6 md:p-8 text-right">
            <h2 className="text-xl font-semibold mb-4">LexArabic: اختبار كَلِم</h2>
            <p className="text-lg mb-4 leading-relaxed">
              هذا الموقع هو النسخة الإلكترونية للاختبار LexArabic الذي نُشر في مجلة Behavior Research Methods بعنوان "LexArabic: A receptive vocabulary size test to estimate Arabic proficiency". 
            </p>
            <p className="text-lg leading-relaxed">
               صُمم هذا الاختبار لقياس كفاءة اللغة العربية للناطقين بها لغة أولى أو ثانية من خلال تقييم حجم المفردات المستقبلة.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden order-1 md:order-2">
          <div className="relative aspect-[3/4]">
            <a
              href="https://link.springer.com/article/10.3758/s13428-023-02286-z"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Image
                src="/BRM_cover.png"
                alt="Behavior Research Methods Journal Cover"
                layout="fill"
                objectFit="contain"
                className="hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm text-center">
                اقرأ الورقة البحثية <ExternalLink className="inline-block ml-1 h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;