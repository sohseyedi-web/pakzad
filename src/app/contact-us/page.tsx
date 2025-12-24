'use client';

import { useForm } from 'react-hook-form';
import Input from '@/ui/Input';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 text-right">
          <h1 className="text-3xl font-bold text-orange-500">تماس با ما</h1>
          <p className="text-zinc-600">برای ارتباط با ما فرم زیر را تکمیل نمایید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <Input
            label="نام و نام خانوادگی"
            name="name"
            placeholder="نام خود را وارد کنید"
            register={register}
            errors={errors}
            validationSchema={{
              required: 'نام الزامی است',
              minLength: {
                value: 3,
                message: 'حداقل ۳ کاراکتر',
              },
            }}
          />

          <Input
            label="ایمیل"
            name="email"
            placeholder="example@email.com"
            register={register}
            errors={errors}
            validationSchema={{
              required: 'ایمیل الزامی است',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'ایمیل معتبر نیست',
              },
            }}
          />

          {/* Row 2 */}
          <Input
            label="موضوع"
            name="subject"
            placeholder="موضوع پیام را وارد کنید"
            register={register}
            errors={errors}
            validationSchema={{
              required: 'موضوع الزامی است',
            }}
          />

          <Input
            label="شماره موبایل"
            name="phone"
            placeholder="09xxxxxxxxx"
            register={register}
            errors={errors}
            validationSchema={{
              required: 'شماره موبایل الزامی است',
              pattern: {
                value: /^09\d{9}$/,
                message: 'شماره موبایل معتبر نیست',
              },
            }}
          />

          {/* Message */}
          <div className="md:col-span-2">
            <Input
              label="متن پیام"
              name="message"
              placeholder="پیام خود را بنویسید..."
              register={register}
              errors={errors}
              long
              validationSchema={{
                required: 'متن پیام الزامی است',
                minLength: {
                  value: 10,
                  message: 'حداقل ۱۰ کاراکتر',
                },
              }}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-[145px] h-[45px] rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
