import {FC, useState} from 'react';
import {Console} from '../Console/Console';
import {ThemeButton} from '../ThemeButton/ThemeButton';

export const App: FC = () => {

  const [lightTheme, setLightTheme] = useState(true);

  const handleThemeClick = () => {
    setLightTheme(prevState => !prevState);
  };

  return (
    <div className="flex h-screen m-8 gap-5">
      <div className={`w-3/5 flex flex-col items-start p-4 ${lightTheme ? 'bg-light-bg-left text-light-text-left' : 
        'bg-dark-bg-left text-dark-text-left'} gap-5`}>
        <ThemeButton lightTheme={lightTheme} handleThemeClick={handleThemeClick}/>
        <textarea className={`border p-4 ${lightTheme ? 'text-light-text-left' : 'text-dark-text-left'}`}/>
      </div>
      <div className={`w-2/5 p-4 flex flex-col gap-3 ${lightTheme ? 'bg-light-bg-right text-light-text-right':
        'bg-dark-bg-right text-dark-text-right'}`}>
        <Console lightTheme={lightTheme} />
      </div>
    </div>
  );
};