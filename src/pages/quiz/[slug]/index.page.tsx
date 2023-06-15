import { getApiClient } from '@/config/graphql-api';
import { notFound } from '@/utils/common';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import FormQuizContent from './components/form-quiz-content';
import FormRegisterTest from './components/form-register-quiz';
import { QuizPerformPageUtils } from './utils';

type Props = {
  quiz: {
    __typename?: 'ResultDetailResolver' | undefined;
    username: string;
    quizName: string;
    questions: any;
  };
};

export default function QuizPerformPage({ quiz }: Props) {
  const router = useRouter();
  const { onStartPerformTest } = QuizPerformPageUtils();

  return (
    <>
      {quiz ? (
        <FormQuizContent initialValues={{}} validationSchema={{}} questions={[]} />
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
    let data = null;
    if (tokenVerify) {
      const apiClient = getApiClient();
      const resultRes = await apiClient.getReusltByToken({ data: { token: tokenVerify } });
      const resultData = resultRes?.getResultByToken;
      if (resultData && Object.keys(resultData).length > 0) {
        data = { ...resultData };
      }
    }
    return { props: { quiz: data } };
  } catch (error) {
    return notFound();
  }
};
