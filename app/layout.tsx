import React from 'react';
import { Tajawal } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';
import "./globals.css";
import { Metadata } from 'next';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'اختبار كلم',
  description: 'اختبار لغوي سريع للمتحدثين باللغة العربية',
  icons: {
    icon: '/lexarabic_logo.svg', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header className="p-5 sm:p-8">
      <div className="flex items-center justify-between">
        <Link href="https://lexarabic.netlify.app/" className='hover:opacity-80'>
          <Image 
            src="/lexarabic_logo.svg"
            alt="LexArabic Logo"
            quality={95}
            width={60}
            height={60}
          />
        </Link>
      </div>
    </header>
  )


  const footer = (
  <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://lexarabic.netlify.app/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <Image src="/lexarabic_logo.svg" 
                  className="h-8" 
                  alt="شعار كَلِم"
                  width={30}
                  height={30} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">اختبار كَلِم</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <a href="https://lexarabic.netlify.app/about" className="hover:text-[#8f5ecc] me-4 md:me-6">عن الموقع</a>
                  </li>
                  <li>
                      <a href="https://lexarabic.netlify.app/privacy" className="hover:text-[#8f5ecc] me-4 md:me-6">الخصوصية</a>
                  </li>
                  <li>
                      <a href="https://lexarabic.netlify.app/license" className="hover:text-[#8f5ecc] me-4 md:me-6">الترخيص</a>
                  </li>
                  <li>
                      <a href="https://lexarabic.netlify.app/contact" className="hover:text-[#8f5ecc]">تواصل معنا</a>
                  </li>
              </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2024 <a href="https://lexarabic.netlify.app/" className="hover:text-[#8f5ecc]">كَلِم</a>. جميع الحقوق محفوظة.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a href="https://github.com/AlaaAlzahrani/lexarabic" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                      </svg>
                      <span className="sr-only">حساب غيت هاب</span>
                  </a>
              </div>
          </div>
      </div>
  </footer>
  )


  return (
    <html lang="ar" dir="rtl">
      <head />
        <body className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${tajawal.className}`}>
          {header}
          <main className="flex-grow">
            {children}
          </main>
          {footer}
        </body>
    </html>
  );
}