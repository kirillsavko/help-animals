import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ANIMAL } from './queries';

import './AnimalView.scss';

const AnimalView = ({
  location,
}: any) => {
  const [animal, setAnimal] = useState({
    name: '',
    desc: '',
  });

  const getIdByPathname = () => {
    const splitedPathname = location.pathname.split('/');

    return splitedPathname[splitedPathname.length - 1];
  };

  const { data, loading } = useQuery(GET_ANIMAL, {
    variables: {
      id: getIdByPathname(),
    }
  });

  useEffect(() => {
    if (!loading) {
      setAnimal(data.getAnimal);
    }
  }, [data]);

  return (
    <div className='container'>
      <h1>
        {animal?.name}
      </h1>
      <p>
        {animal?.desc}
      </p>
    </div>
  );
}

export default AnimalView;
