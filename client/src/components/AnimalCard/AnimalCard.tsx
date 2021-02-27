import './AnimalCard.scss';

type AnimalCardProps = {
  img: string;
  name: string;
  desc: string;
}

const AnimalCard = ({
  img,
  name,
  desc,
}: AnimalCardProps): JSX.Element => {
  return (
    <div className='animal-card'>
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
    </div>
  );
}

export default AnimalCard;
