import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

import './AnimalCard.scss';

type AnimalCardProps = {
  id: string | number;
  img: string;
  name: string;
  desc: string;
}

const AnimalCard = ({
  id,
  img,
  name,
  desc,
}: AnimalCardProps): JSX.Element => (
  <Link
    to={routes.getAnimal(id)}
    className='animal-card'
  >
    <img
      src={img}
      className='animal-card__img'
      alt=''
    />
    <div className='animal-card__content'>
      <h5 className='animal-card__name'>
        {name}
      </h5>
      <div className='animal-card__desc'>
        {desc}
      </div>
    </div>
  </Link>
);

export default AnimalCard;
