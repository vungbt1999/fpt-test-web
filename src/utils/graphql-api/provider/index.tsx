import React, { ReactNode, useContext, useMemo } from 'react';

import { apiClientInstance } from '..';

export const ApiClientContext = React.createContext({
  apiClient: apiClientInstance
});

type ApiClientProviderProps = {
  children: JSX.Element | ReactNode;
};

export const ApiClientProvider = ({ children }: ApiClientProviderProps) => {
  const apiClient = useMemo(() => {
    return apiClientInstance;
  }, []);

  return (
    <ApiClientContext.Provider
      value={{
        apiClient
      }}
    >
      {children}
    </ApiClientContext.Provider>
  );
};

export const useApiClient = () => {
  return useContext(ApiClientContext);
};
