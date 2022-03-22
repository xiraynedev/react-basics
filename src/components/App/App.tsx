import {FC, useEffect, useRef, useState} from 'react';
import {Console} from '../Console/Console';
import {ThemeButton} from '../ThemeButton/ThemeButton';
import {v4} from 'uuid';

export const App: FC = () => {

  const [lightTheme, setLightTheme] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [textValue, setTextValue] = useState('');

  const handleThemeClick = () => {
    setLightTheme(prevState => !prevState);
  };

  const handleSendClick = () => {
    setMessages(prevState => [...prevState, textValue]);
  };

  return (
    <div className="flex h-screen m-8 gap-5">
      <div className={`w-3/5 flex flex-col items-start p-4 ${lightTheme ? 'bg-light-bg-left text-light-text-left' :
        'bg-dark-bg-left text-dark-text-left'} gap-5`}>
        <ThemeButton lightTheme={lightTheme} handleThemeClick={handleThemeClick}/>
        <textarea
          value={textValue}
          onChange={event => setTextValue(event.currentTarget.value)}
          className={`border p-4 ${lightTheme ? 'text-light-text-left' : 'text-dark-text-left'}`}/>
        <button
          onClick={handleSendClick}
          className={`py-2 shadow-lg rounded-lg px-8 ${lightTheme ? 'bg-light-btn-bg text-light-btn-text-white' :
            'bg-dark-btn-bg text-dark-btn-text'}`}>Send
        </button>
      </div>
      <div className={`w-2/5 p-4 flex flex-col gap-3 ${lightTheme ? 'bg-light-bg-right text-light-text-right' :
        'bg-dark-bg-right text-dark-text-right'}`}>
        <Console lightTheme={lightTheme} messages={messages}/>
      </div>
    </div>
  );
};