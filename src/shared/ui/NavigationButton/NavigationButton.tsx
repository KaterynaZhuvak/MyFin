import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  title: string;
  styles: string;
  path: string;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  title,
  styles,
  path,
}) => {
  const navigate = useNavigate();

  const changeURL = (): void => {
    navigate(path);
  };

  return (
    <button
      type='button'
      onClick={changeURL}
      className={`text-center font-sans text-white ${styles}`}
    >
      {title}
    </button>
  );
};
