import { ResultDetailResolver } from '@/config/graphql-api/generated';
import * as Yup from 'yup';

export const transformQuiz = (data: ResultDetailResolver) => {
  const questions: any[] = data?.questions || [];
  const initialValues: { [key: string]: any } = {};
  questions.map((_, index) => {
    const key = `question_${index}`;
    initialValues[key] = '';
  });

  return {
    username: data?.username || null,
    quizName: data?.quizName || null,
    initialValues: initialValues,
    questions: questions || []
  };
};
