import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function QuizResultPage() {
  const router = useRouter();
  const queries = router.query;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src="/assets/test.svg" alt="image-test" width={160} height={160} />
        <h1 className="mt-3 text-xl">Chúc mừng bạn đã hoàn thành bài kiểm tra</h1>
        <div className="font-medium flex items-end">
          Số điểm bạn đạt được:
          <div className="text-xl ml-2">
            <span className="text-green-700 ">{queries.score}</span>/<span>{queries.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
