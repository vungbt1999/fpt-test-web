import { useApiClient } from '@/config/graphql-api/provider';
import { notFound } from '@/utils/common';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type QuizPerformPageUtilsResult = {
  tokenVerify?: string;
  onStartPerformTest: (name: string) => void;
  onSubmitQuiz: (values: any) => void;
};

export const QuizPerformPageUtils = (): QuizPerformPageUtilsResult => {
  const [tokenVerify, setTokenVerify] = useState<string>();
  const { apiClient } = useApiClient();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const queries = router.query;
    if (Object.keys(queries).length > 0 && queries.token) {
      setTokenVerify(queries?.token as string);
    }
  }, [router.query]);

  const onStartPerformTest = async (name: string) => {
    try {
      const query = router?.query;
      const { slug = null } = query;
      if (!slug) return notFound();
      const res = await apiClient.createNewResult({
        data: { username: name, slug: slug as string }
      });
      const token = res?.createNewResult?.token;
      if (!token) return notFound();
      router.replace({
        pathname: router.asPath,
        query: { token: token }
      });
      setTokenVerify(token);
    } catch (error) {
      return notFound();
    }
  };

  const onSubmitQuiz = async (values: any) => {
    try {
      if (loading) return;
      if (!tokenVerify) return alert('Quiz không tồn tại');
      setLoading(true);
      const res = await apiClient.submitQuiz({
        data: {
          token: tokenVerify,
          userAnswers: { ...values }
        }
      });
      if (res.submitQuiz) {
        const queries = router.query;
        router.replace({
          pathname: `/quiz/${queries?.slug}/result`,
          query: {
            score: res.submitQuiz.score,
            total: res.submitQuiz.totalQuestion
          }
        });
      }
      setLoading(false);
    } catch (error) {}
  };

  return {
    tokenVerify,
    onStartPerformTest,
    onSubmitQuiz
  };
};
