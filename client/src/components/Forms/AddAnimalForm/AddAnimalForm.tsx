import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { ADD_ANIMAL } from 'mutations/animal';

import Input from 'components/Forms/Input';
import InputGroup from 'components/Forms/InputGroup';
import Button from 'components/Forms/Button';

import './AddAnimalForm.scss';

const AddAnimalForm = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);

  const [newAnimal] = useMutation(ADD_ANIMAL);

  const onSubmit = (e) => {
    e.preventDefault();
    
    setIsLoadingRequest(true);

    newAnimal({
      variables: {
        input: {
          name,
          desc
        }
      }
    })
      .then(() => {
        setName('');
        setDesc('');
      })
      .catch(() => toast.error('Что-то пошло не так'))
      .finally(() => setIsLoadingRequest(false));
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
}

export default AddAnimalForm;
