import { useNavigate } from 'react-router';

export const useChangeURL = (): ((path: string) => void) => {
  const navigate = useNavigate();

  const changeURL = (path: string): void => {
    navigate(path);
  };

  return changeURL;
};
