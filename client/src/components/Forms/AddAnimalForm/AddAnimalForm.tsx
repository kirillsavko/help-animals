import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AnimalContext } from 'contexts/AnimalContext';
import { ADD_ANIMAL } from './mutations';

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
  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);

  const animalContext = useContext(AnimalContext);

  const [addAnimal] = useMutation(ADD_ANIMAL);

  const onSubmit = (values) => {
    setIsLoadingRequest(true);

    const { name, desc } = values;

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
      })
      .catch(() => toast.error('Что-то пошло не так'))
      .finally(() => {
        setIsLoadingRequest(false);
        onEnd();
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    desc: Yup.string().required('Обязательное поле'),
  });

  return (
    <Formik
      onSubmit={(values) => onSubmit(values)}
      initialValues={{
        name: '',
        desc: '',
      }}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          errors,
          handleChange,
          handleSubmit,
          touched,
          setFieldTouched,
        } = props;

        return (
          <form
            onSubmit={handleSubmit}
            className='add-animal-form'
          >
            <InputGroup>
              <Input
                id='name'
                label='Имя питомца'
                value={values.name}
                onChange={(e) => {
                  setFieldTouched('name');
                  handleChange(e);
                }}
                isValid={touched.name ? !errors.name : true}
                errorMsg={errors.name}
              />
            </InputGroup>
            <InputGroup>
              <Input
                id='desc'
                label='Описание питомца'
                value={values.desc}
                onChange={(e) => {
                  setFieldTouched('desc');
                  handleChange(e);
                }}
                isValid={touched.desc ? !errors.desc : true}
                errorMsg={errors.desc}
                textarea
              />
            </InputGroup>
            <InputGroup className='add-animal-form__btn'>
              <Button
                type='submit'
                disabled={isLoadingRequest}
                loading={isLoadingRequest}
              >
                Добавить питомца
              </Button>
            </InputGroup>
          </form>
      )}}
    </Formik>
  );
};

AddAnimalForm.defaultProps = AddAnimalFormPropsDefault;

export default AddAnimalForm;
