import { ResultDetailResolver } from '@/config/graphql-api/generated';

export const transformQuiz = (data: ResultDetailResolver) => {
  const questions: any[] = data?.questions || [];
  const initialValues = {};
  const validationSchema = {};

  return {
    username: data.username,
    quizName: data.quizName
  };
};
