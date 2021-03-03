import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';

import { AnimalContext } from 'contexts/AnimalContext';
import { GET_ALL_ANIMALS } from './queries';

import AnimalCard from 'components/AnimalCard';

import './MainView.scss';

const MainView = (): JSX.Element => {
  const animalContext = useContext(AnimalContext);

  const { data, loading } = useQuery(GET_ALL_ANIMALS, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {

    if (!loading) {
      animalContext?.setAnimals([...data.getAllAnimals]);
    }
  }, [data]);

  return (
    <div className='main-view'>
      <div className='container'>
        {animalContext.animals?.length > 0 && (
          <>
            <h1 className='main-view__title'>Список будущих питомцев</h1>
            <div className='main-view__animals-list'>
              {animalContext.animals.map((item) => (
                <React.Fragment key={item.id}>
                  <AnimalCard
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    img={item.image}
                  />
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MainView;
