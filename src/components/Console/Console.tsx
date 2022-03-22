import React, {FC, useEffect, useState} from 'react';
import {v4} from 'uuid';

interface ConsoleProps {
  lightTheme: boolean;
}

export const Console: FC<ConsoleProps> = ({lightTheme}) => {
  const [consoleMessage, setConsoleMessage] = useState<string[]>([]);
  const dateformat = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date()).replace(',', '');

  useEffect(() => {
    const datestring = `${dateformat} - ${lightTheme ? ' Theme was set to Light' : ' Theme was set to Dark'}`;
    setConsoleMessage(prevState => [...prevState, datestring]);
  }, [lightTheme]);

  return (
    <>
      {
        consoleMessage.map(message => (
          <p key={v4()}>{message}</p>
        ))
      }
    </>
  );
};