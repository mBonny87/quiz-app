import { useState } from 'react';

export type Node<T> = {
  curr: T;
  next: () => void;
  prev: () => void;
  update: (node: T) => void;
};

export type UseLinkedList<T> = [Node<T>, number, T[], boolean];

export const useLinkedList = <T>(
  list: T[],
  setList: React.Dispatch<React.SetStateAction<T[]>>
): UseLinkedList<T> => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextNode = () => {
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousNode = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isEndOfList = currentIndex === list.length - 1;

  const updateCurrentNode = (newNode: T) => {
    const clonedList = [...list];
    clonedList[currentIndex] = newNode;
    setList(clonedList);
  };

  return [
    {
      curr: list[currentIndex],
      update: updateCurrentNode,
      next: handleNextNode,
      prev: handlePreviousNode,
    },
    currentIndex,
    list,
    isEndOfList,
  ];
};
