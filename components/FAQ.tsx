import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import { HelpCircle, Clock, BarChart2, BookOpen, Shield } from 'lucide-react';

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full rtl:space-x-reverse ">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="text-lg flex items-center space-x-reverse space-x-2">
            <HelpCircle className="mr-2 h-5 w-5" />
            <span>ما محتوى الاختبار وهدفه؟</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
           اختبارنا يتكون من كلمات عربية منفردة. صممناه لقياس كفاءة اللغة العربية للناطقين بها لغة أولى أو ثانية. يمكنك الاطلاع على
           {' '}
           <Link href="https://link.springer.com/article/10.3758/s13428-023-02286-z" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
             الدراسة الكاملة هنا
           </Link>
           {' '}
           لمزيد من التفاصيل حول تصميم الاختبار وفعاليته.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="text-lg flex items-center space-x-reverse space-x-2">
            <Clock className="mr-2 h-5 w-5" />
            <span>كم يستغرق الاختبار؟</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
           يستغرق بين 3 إلى 10 دقائق تقريباً
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="text-lg flex items-center space-x-reverse space-x-2">
            <BarChart2 className="mr-2 h-5 w-5" />
            <span>كيف أفسر نتيجة الاختبار؟</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>      
          لمتحدثي العربية كلغة أم: درجة 95 فأعلى تدل على تمكن عالٍ جداً من اللغة.
          
          للناطقين بالعربية لغة ثانية: درجة 80 فأعلى تشير إلى كفاءة عالية جداً، تقترب من مستوى المتحدث الأم للعربية.
          
          نشجعك على مواصلة تطوير مهاراتك اللغوية بغض النظر عن نتيجتك.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="text-lg flex items-center space-x-reverse space-x-2">
            <BookOpen className="mr-2 h-5 w-5" />
            <span>هل يمكنني أن أستخدم الاختبار في بحث علمي؟</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          بالتأكيد! صممنا الاختبار ليكون أداة بحثية قيّمة وسهلة الاستخدام. في حال استخدامك للاختبار، فضلاً استشهد
          {' '}
          <Link href="https://link.springer.com/article/10.3758/s13428-023-02286-z" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
            بالورقة البحثية
          </Link>
          {' '}
          التي قدّمت هذا الاختبار.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>
          <div className="text-lg flex items-center space-x-reverse space-x-2">
            <Shield className="mr-2 h-5 w-5" />
            <span>هل بياناتي محمية؟</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          نؤكد لك أننا نولي أهمية قصوى لحماية بياناتك عبر ترميزها للمحافظة على خصوصية معلوماتك.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}