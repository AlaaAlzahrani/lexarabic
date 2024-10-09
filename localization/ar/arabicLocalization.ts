import { LocalizationResource } from "@clerk/types";

const arabicLocalization: Partial<LocalizationResource> = {
  signIn: {
    start: {
      title: "تسجيل الدخول إلى حسابك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionText: "ليس لديك حساب؟",
      actionLink: "إنشاء حساب",
    },
    emailLink: {
      title: "التحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رابط التحقق",
      formSubtitle: "استخدم رابط التحقق المرسل إلى بريدك الإلكتروني",
      resendButton: "لم تستلم الرابط؟ إعادة الإرسال",
      verified: {
        title: "تم تسجيل الدخول بنجاح",
      },
      loading: {
        title: "جاري تسجيل الدخول...",
      },
    },
    emailCode: {
      title: "التحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      resendButton: "لم تستلم الرمز؟ إعادة الإرسال",
    },
  },
  signUp: {
    start: {
      title: "إنشاء حسابك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionText: "لديك حساب بالفعل؟",
      actionLink: "تسجيل الدخول",
    },
    emailLink: {
      title: "التحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رابط التحقق",
      formSubtitle: "استخدم رابط التحقق المرسل إلى بريدك الإلكتروني",
      resendButton: "لم تستلم الرابط؟ إعادة الإرسال",
    },
    emailCode: {
      title: "التحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق المرسل إلى بريدك الإلكتروني",
      resendButton: "لم تستلم الرمز؟ إعادة الإرسال",
    },
  },
  userProfile: {
    mobileButton__menu: "القائمة",
    formButtonPrimary__continue: "متابعة",
    formButtonPrimary__save: "حفظ",
    formButtonPrimary__finish: "إنهاء",
    formButtonPrimary__remove: "إزالة",
    formButtonPrimary__add: "إضافة",
    start: {
      headerTitle__account: "الحساب",
      headerTitle__security: "الأمان",
    },
  },
  userButton: {
    action__manageAccount: "إدارة الحساب",
    action__signOut: "تسجيل الخروج",
  },
  formFieldLabel__emailAddress: "البريد الإلكتروني",
  formFieldLabel__password: "كلمة المرور",
  formFieldLabel__firstName: "الاسم الأول",
  formFieldLabel__lastName: "اسم العائلة",
  formButtonPrimary: "متابعة",
  socialButtonsBlockButton: "المتابعة باستخدام {{provider}}",
  dividerText: "أو",
};

export default arabicLocalization;