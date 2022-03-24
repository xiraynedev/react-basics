import {FC} from 'react';

interface AddButtonProps {
  handleAddClick: () => void;
  lightTheme: boolean;
  count: number;
  buttonCounter: number[];
}

export const AddButton: FC<AddButtonProps> = ({handleAddClick, lightTheme, count, buttonCounter}) => {
  return (
    <button
      disabled={count < buttonCounter.length ? true : false}
      onClick={handleAddClick}
      className={`py-2 shadow-lg rounded-lg px-8 ${lightTheme ? 'bg-light-btn-bg text-light-btn-text-white' :
        'bg-dark-btn-bg text-dark-btn-text'}`}
    >Button {count} Added</button>
  );
};