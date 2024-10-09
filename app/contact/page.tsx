import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">تواصل معنا</h1>
      <p className="mb-4">نرحب بأسئلتكم واستفساراتكم! يمكنكم التواصل معنا عبر البريد الإلكتروني التالي:</p>
      <a 
        href="mailto:alzahrani.alaaa@gmail.com" 

        /// change mail color
        className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        alzahrani.alaaa@gmail.com
      </a>
    </div>
  );
};

export default ContactPage;