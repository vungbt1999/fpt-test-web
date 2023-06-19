import { getApiClient } from '@/utils/graphql-api';
import { notFound } from '@/utils/common';
import { transformQuiz } from '@/utils/transforms';
import { GetServerSidePropsContext } from 'next';
import FormQuizContent from './components/form-quiz-content';
import FormRegisterTest from './components/form-register-quiz';
import { QuizPerformPageUtils } from '@/handles/quiz';

type Props = {
  quiz: {
    __typename?: 'ResultDetailResolver' | undefined;
    username: string;
    quizName: string;
    questions: any;
  } & ReturnType<typeof transformQuiz>;
};

export default function QuizPerformPage({ quiz }: Props) {
  const { onStartPerformTest, onSubmitQuiz } = QuizPerformPageUtils();
  return (
    <>
      {quiz && quiz.questions ? (
        <FormQuizContent {...quiz} onSubmitQuiz={onSubmitQuiz} />
      ) : (
        <FormRegisterTest onSubmitName={onStartPerformTest} />
      )}
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const query = ctx.query as any;
    const tokenVerify = query?.token;
    const slug = query.slug;

    const apiClient = getApiClient();

    // check quiz valid
    const res = await apiClient.verifySlug({ data: { slug: slug } });
    if (res.verifySlug === false) return notFound();

    let data = null;
    if (tokenVerify) {
      const resultRes = await apiClient.getResultByToken({ data: { token: tokenVerify } });
      const resultData = resultRes?.getResultByToken;
      if (resultData && Object.keys(resultData).length > 0) {
        const dataTransform = transformQuiz(resultData);
        data = { ...dataTransform };
      }
    }

    return { props: { quiz: data } };
  } catch (error) {
    return notFound();
  }
};
