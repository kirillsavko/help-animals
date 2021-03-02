/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext } from 'react';

import { AnimalsType } from 'types/animal';

export const AnimalContext = createContext<{
  animals: AnimalsType,
  setAnimals: (any) => void,
}>({
  animals: [],
  setAnimals: () => {},
});

type AnimalContextProviderProps = {
  children: string | JSX.Element;
}

export const AnimalContextProvider = ({
  children
}: AnimalContextProviderProps): JSX.Element => {
  const updateAnimals = (arg: AnimalsType) => setAnimals({
    ...animals,
    animals: [...arg],
  });

  const [animals, setAnimals] = useState<{
    animals: AnimalsType,
    setAnimals: (any) => void,
  }>({
    animals: [],
    setAnimals: updateAnimals,
  });

  return (
    <AnimalContext.Provider value={animals}>
      {children}
    </AnimalContext.Provider>
  )
};
