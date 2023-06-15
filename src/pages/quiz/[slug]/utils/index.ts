import { useApiClient } from '@/config/graphql-api/provider';
import { notFound } from '@/utils/common';
import { useRouter } from 'next/router';
import { useState } from 'react';

type QuizPerformPageUtilsResult = {
  tokenVerify?: string;
  onStartPerformTest: (name: string) => void;
};

export const QuizPerformPageUtils = (): QuizPerformPageUtilsResult => {
  const [tokenVerify, setTokenVerify] = useState<string>();
  const { apiClient } = useApiClient();
  const router = useRouter();

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

  return {
    tokenVerify,
    onStartPerformTest
  };
};
