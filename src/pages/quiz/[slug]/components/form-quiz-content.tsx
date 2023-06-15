import { Button, InputForm } from '@/components/common';
import { QuestionItem, WrapperBlock } from '@/components/question';
import { useApiClient } from '@/config/graphql-api/provider';
import { FastField, Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import * as Yup from 'yup';

type FormQuizContentProps = {
  initialValues: any;
  questions: any[];
  quizName: string;
  onSubmitQuiz: (values: any) => void;
};
export default function FormQuizContent({
  initialValues,
  questions,
  quizName,
  onSubmitQuiz
}: FormQuizContentProps) {
  // validation form
  const validation = Yup.object().shape({
    ...getSchema(initialValues)
  });

  return (
    <div className="max-w-[90vw] w-[640px] mx-auto pb-5">
      <Image
        src="/assets/login-background-2.jpg"
        alt="background-test"
        width={640}
        height={160}
        className="max-h-40 object-cover w-[90vw] rounded-lg mt-3 border border-solid border-gray-300"
      />

      <WrapperBlock hint="Biểu thị câu hỏi bắt buộc" showLine className="mt-3">
        <h1 className="text-4xl font-bold">{quizName}</h1>
      </WrapperBlock>
      <div>
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmitQuiz}>
          {() => (
            <Form>
              {/** Main Content - List Question */}
              {questions.length > 0 &&
                questions.map((item, index) => {
                  return (
                    <QuestionItem
                      key={index}
                      {...item}
                      className="mt-3"
                      input={
                        <FastField
                          name={`question_${index}`}
                          placeholder="Câu trả lời của bạn"
                          component={InputForm}
                          className="mt-2"
                        />
                      }
                    />
                  );
                })}
              <Button label="Nộp bài" type="submit" className="mt-3" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const getSchema = (initialValues: any) => {
  const keys = Object.keys(initialValues);
  const validation: { [key: string]: any } = {};
  keys.map((item) => {
    validation[item] = Yup.string().required('Tên không được để trống.');
  });
  return validation;
};
