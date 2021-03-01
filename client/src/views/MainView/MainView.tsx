import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { AnimalsType } from 'types/animal';
import { GET_ALL_ANIMALS } from 'queries/animal';

import AnimalCard from 'components/AnimalCard';

import './MainView.scss';

const MainView = (): JSX.Element => {
  const [animals, setAnimals] = useState<AnimalsType>([]);

  const { data, loading } = useQuery(GET_ALL_ANIMALS);

  useEffect(() => {
    if (!loading) {
      setAnimals(data.getAllAnimals);
    }
  }, [data]);

  return (
    <div className='main-view'>
      <div className='container'>
        <h1 className='main-view__title'>Список будущих питомцев</h1>
        {animals?.length > 0 && (
          <div className='main-view__animals-list'>
            {animals.map((item) => (
              <React.Fragment key={item.id}>
                <AnimalCard
                  name={item.name}
                  desc={item.desc}
                  img={item.image}
                />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainView;
