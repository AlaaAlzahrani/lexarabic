import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-right">
      <h1 className="text-2xl font-bold mb-4">سياسة الخصوصية لموقع اختبار كَلِم</h1>
      
      <p className="mb-4">نقدر خصوصيتك ونلتزم بحمايتها. هذه السياسة توضح كيف نتعامل مع معلوماتك.</p>
      
      <h2 className="text-xl font-semibold mb-2">1. المعلومات التي نجمعها</h2>
      <ul className="list-disc list-inside mb-4">
        <li>معلومات الحساب: الاسم والبريد الإلكتروني عند التسجيل.</li>
        <li>بيانات الاختبارات: إجاباتك ونتائجك.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">2. كيف نستخدم معلوماتك</h2>
      <p className="mb-4">نستخدم معلوماتك لتحسين تجربتك، تخصيص المحتوى، وضمان أمان التطبيق.</p>
      
      <h2 className="text-xl font-semibold mb-2">3. حماية معلوماتك</h2>
      <p className="mb-4">نتخذ إجراءات أمنية متقدمة لحماية بياناتك، لكن تذكر أن الإنترنت ليس آمنًا بنسبة 100%.</p>
      
      <h2 className="text-xl font-semibold mb-2">4. مشاركة المعلومات</h2>
      <p className="mb-4">لا نبيع بياناتك. قد نشاركها في حالات محددة مع مزودي الخدمة الموثوقين أو للامتثال للقانون.</p>
      
      <h2 className="text-xl font-semibold mb-2">5. حقوقك وخياراتك</h2>
      <p className="mb-4">يمكنك الوصول إلى بياناتك، تصحيحها، أو طلب حذفها. نحن هنا لمساعدتك في ممارسة هذه الحقوق.</p>
      
      <h2 className="text-xl font-semibold mb-2">6. التواصل معنا</h2>
      <p className="mb-4">لديك أسئلة عن خصوصيتك؟ راسلنا على ar-vocab-app@gmail.com وسنرد عليك في أقرب وقت.</p>
      
      <p className="mt-8">شكرًا لثقتك في اختبار كَلِم. نعدك بالحفاظ على أمان بياناتك دائمًا!</p>
    </div>
  );
};

export default PrivacyPolicy;