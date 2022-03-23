import React, {FC, useEffect, useRef, useState} from 'react';
import {Console} from '../Console/Console';
import {ThemeButton} from '../ThemeButton/ThemeButton';
import {v4} from 'uuid';
import {AddButton} from '../AddButton/AddButton';

export const App: FC = () => {

  const [lightTheme, setLightTheme] = useState(true);
  const [textMessages, setTextMessages] = useState<string[]>([]);
  const [textValue, setTextValue] = useState('');
  const [buttonCounter, setButtonCounter] = useState<number[]>([]);
  const [buttonMessages, setButtonMessages] = useState<string[]>([]);

  const handleThemeClick = () => {
    setLightTheme(prevState => !prevState);
  };

  const handleSendClick = () => {
    setTextMessages(prevState => [...prevState, textValue]);
    setTextValue('');
  };

  const handleAddClick = () => {
    setButtonCounter(prevState => [...prevState, prevState.length + 1]);
    setButtonMessages(prevState => {
      return [...prevState, `Button ${buttonCounter.length + 1} added`];
    });
  };

  return (
    <div className="border flex flex-col md:flex-row h-full w-full md:w-10/12 md:mx-auto md:m-8 gap-5">
      <div className={`w-full md:w-3/5 flex flex-col items-start p-4 ${lightTheme ? 'bg-light-bg-left text-light-text-left' :
        'bg-dark-bg-left text-dark-text-left'} gap-5`}>
        <ThemeButton lightTheme={lightTheme} handleThemeClick={handleThemeClick}/>
        <label htmlFor="textInputArea">Enter messages below:</label>
        <textarea
          id='textInputArea'
          value={textValue}
          onChange={event => setTextValue(event.currentTarget.value)}
          className={`border p-4 w-full outline-blue-200 ${lightTheme ? 'text-light-text-left' : 'text-dark-text-left'}`}/>
        <button
          disabled={textValue ? false : true}
          onClick={handleSendClick}
          className={`py-2 shadow-lg rounded-lg px-8 ${lightTheme ? 'bg-light-btn-bg text-light-btn-text-white' :
            'bg-dark-btn-bg text-dark-btn-text'}`}>Send
        </button>
        <button
          disabled={buttonCounter.length > 0 ? true : false}
          onClick={handleAddClick}
          className={`py-2 shadow-lg rounded-lg px-8 ${lightTheme ? 'bg-light-btn-bg text-light-btn-text-white' :
            'bg-dark-btn-bg text-dark-btn-text'}`}
        >Add Button
        </button>
        {
          buttonCounter.map(count => (
            <AddButton
              key={v4()}
              handleAddClick={handleAddClick}
              buttonCounter={buttonCounter}
              lightTheme={lightTheme}
              count={count}/>
          ))
        }
      </div>
      <div className={`w-full md:w-2/5 p-4 flex flex-col gap-3 ${lightTheme ? 'bg-light-bg-right text-light-text-right' :
        'bg-dark-bg-right text-dark-text-right'}`}>
        <Console lightTheme={lightTheme} messages={textMessages} buttonMessages={buttonMessages}/>
      </div>
    </div>
  );
};