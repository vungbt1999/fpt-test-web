import { Button, InputForm } from '@/components/common';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

type FormRegisterTestProps = {
  onSubmitName: (name: string) => void;
};
export default function FormRegisterQuiz({ onSubmitName }: FormRegisterTestProps) {
  const initialValues = {
    name: ''
  };

  // validation form
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Tên không được để trống.')
  });

  return (
    <div className="h-screen w-full grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <p className="absolute top-8 left-9 font-bold italic text-3xl">Test System</p>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl line-clamp-1">Đăng ký tên để thực hiện bài Quiz</h1>
          <div className="max-w-xs w-[20rem] mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any) => onSubmitName(values?.name as string)}
            >
              {() => (
                <Form>
                  <FastField
                    name="name"
                    placeholder="Vui lòng nhập tên"
                    component={InputForm}
                    className="mt-2"
                  />
                  <Button label="Bắt đầu làm bài" type="submit" className="mt-5 w-full" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block col-span-6 relative bg-cover bg-right text-white align-middle min-h-full"
        style={{
          backgroundImage: 'url(/assets/login-background-2.jpg)'
        }}
      ></div>
    </div>
  );
}
