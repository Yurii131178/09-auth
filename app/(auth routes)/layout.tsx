'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
    setisLoading(false);
  }, []);

  return isLoading ? 'Loading...' : children;
};

export default PublicLayout;
