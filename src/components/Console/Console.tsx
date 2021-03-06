import {FC, useEffect, useState} from 'react';
import {v4} from 'uuid';

interface ConsoleProps {
  lightTheme: boolean;
  messages?: string[];
  buttonMessages?: string[];
}

export const Console: FC<ConsoleProps> = ({lightTheme, messages, buttonMessages}) => {
  const [timestamp, setTimestamp] = useState<string[]>([]);
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
    setTimestamp(prevState => [...prevState, datestring]);
  }, [lightTheme]);

  return (
    <>
      {
        timestamp.map(message => (
          <p key={v4()}>{message}</p>
        ))
      }
      <hr/>
      {
        messages?.map(message => {
          if (message) {
            return (
              <p key={v4()}>Message Sent: {message}</p>
            );
          }
        })
      }
      <hr/>
      {
        buttonMessages?.map(message => {
          return (
            <p key={v4()}>{message}</p>
          );
        })
      }
    </>
  );
};