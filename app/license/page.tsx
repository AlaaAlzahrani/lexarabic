import React from 'react';

const LicensePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-right">
      <h1 className="text-2xl font-bold mb-4">الترخيص</h1>
      
      <p className="mb-4">هذا العمل مرخص بموجب رخصة المشاع الإبداعي:</p>
      
      <h2 className="text-xl font-semibold mb-2">نَسب المُصنَّف 4.0 دولي (CC BY 4.0)</h2>
      
      <p className="mb-4">هذا ترخيص يتيح للآخرين توزيع المصنف ومزجه وتعديله وتطويره، حتى لأغراض تجارية، طالما يتم نسب العمل الأصلي للمؤلف. هذا الترخيص هو الأكثر تسامحاً وملاءمة لضمان أوسع انتشار واستخدام للمواد المرخَّصة.</p>
      
      <h3 className="text-lg font-semibold mb-2">أنت حر في:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>المشاركة — نسخ وتوزيع المادة بأي وسيط أو شكل</li>
        <li>التعديل — إعادة مزج المادة وتحويلها والبناء عليها</li>
        <li>لأي غرض، حتى تجارياً</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">بموجب الشروط التالية:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>نَسب المُصنَّف — يجب عليك نسبة العمل بالطريقة التي تحددها المؤلف أو المرخص (ولكن ليس بأي طريقة توحي بأنهم يؤيدونك أو يؤيدون استخدامك للعمل).</li>
      </ul>
      
      <p className="mb-4">لا توجد قيود إضافية — لا يحق لك تطبيق شروط قانونية أو تدابير تكنولوجية تقيد الآخرين من فعل أي شيء يسمح به الترخيص.</p>
      
      <p className="mb-4">للاطلاع على النص الكامل للرخصة، يرجى <a href="https://creativecommons.org/licenses/by/4.0/deed.ar" className="text-blue-600 hover:underline">زيارة الموقع الرسمي لرخصة المشاع الإبداعي</a>.</p>
    </div>
  );
};

export default LicensePage;