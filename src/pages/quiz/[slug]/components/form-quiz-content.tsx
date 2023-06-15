import { Button, InputForm } from '@/components/common';
import { QuestionItem } from '@/components/question';
import { FastField, Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';

type FormQuizContentProps = {
  initialValues: any;
  validationSchema: any;
  questions: any[];
};
export default function FormQuizContent({
  initialValues,
  validationSchema,
  questions
}: FormQuizContentProps) {
  return (
    <div className="max-w-[90vw] w-[640px] mx-auto">
      <Image
        src="/assets/login-background-2.jpg"
        alt="background-test"
        width={640}
        height={160}
        className="max-h-40 object-cover w-[90vw] rounded-lg mt-3 border border-solid border-gray-300"
      />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: any) => console.log(values)}
        >
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
