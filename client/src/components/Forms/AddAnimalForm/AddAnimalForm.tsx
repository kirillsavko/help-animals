import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { AnimalContext } from 'contexts/AnimalContext';
import { ADD_ANIMAL } from 'mutations/animal';

import Input from 'components/Forms/Input';
import InputGroup from 'components/Forms/InputGroup';
import Button from 'components/Forms/Button';

import './AddAnimalForm.scss';

type AddAnimalFormProps = {
  onEnd?: () => void;
}

const AddAnimalFormPropsDefault = {
  onEnd: () => {
    return;
  },
}

const AddAnimalForm = ({
  onEnd,
}: AddAnimalFormProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);

  const animalContext = useContext(AnimalContext);

  const [addAnimal] = useMutation(ADD_ANIMAL);

  const onSubmit = (e) => {
    e.preventDefault();
    
    setIsLoadingRequest(true);

    addAnimal({
      variables: {
        input: {
          name,
          desc
        }
      }
    })
      .then(({ data }) => {
        const updatedAnimals = [...animalContext.animals];
        updatedAnimals.push(data.createAnimal);

        animalContext.setAnimals([...updatedAnimals]);

        setName('');
        setDesc('');
      })
      .catch(() => toast.error('Что-то пошло не так'))
      .finally(() => {
        setIsLoadingRequest(false);
        onEnd();
      });
  };

  return (
    <div className='add-animal-form'>
      <InputGroup>
        <Input
          label='Имя питомца'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label='Описание питомца'
          textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </InputGroup>
      <InputGroup className='add-animal-form__btn'>
        <Button
          onClick={onSubmit}
          disabled={isLoadingRequest}
          loading={isLoadingRequest}
        >
          Добавить питомца
        </Button>
      </InputGroup>
    </div>
  );
};

AddAnimalForm.defaultProps = AddAnimalFormPropsDefault;

export default AddAnimalForm;
