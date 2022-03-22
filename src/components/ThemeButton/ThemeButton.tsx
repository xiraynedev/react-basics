import {FC} from 'react';

interface ThemeButtonProps {
  lightTheme: boolean;
  handleThemeClick: () => void;
}

export const ThemeButton: FC<ThemeButtonProps> = ({lightTheme, handleThemeClick}) => {
  return (
    <button
      onClick={handleThemeClick}
      className={`${lightTheme ? 'bg-light-btn-bg text-light-btn-text-white' :
        'bg-dark-btn-bg text-dark-btn-text'} p-2 rounded-lg`}>{
      lightTheme ? 'Set Dark Theme' : 'Set Light Theme'
    }</button>
  );
};