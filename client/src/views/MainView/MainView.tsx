import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GET_ALL_USERS } from 'queries/user';
import { CREATE_USER } from 'mutations/user';

import './MainView.scss';

const MainView = (): JSX.Element => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  const [newUser] = useMutation(CREATE_USER);
  const { data, loading, refetch } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();

    newUser({
      variables: {
        input: {
          username,
          age,
        }
      }
    })
      .then(({ data }) => {
        console.log(data);
        setUsername('');
        setAge(0);
        refetch();
      });
  }

  return (
    <div>
      <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type='text'
        />
        <input
          value={age}
          onChange={(e) => setAge(+e.target.value)}
          type='number'
        />
        <button onClick={addUser}>Создать</button>
      </form>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {`${user.username}, ${user.age}`}
          </div>
        ))}
      </div>
      {/* <Modal onClose={() => console.log('close')}>
        <h1 className='main-view__modal-title'>
          На этом сайте вы можете найти себе питомца!
        </h1>
      </Modal> */}
      {/* main view
      <Link to={routes.contacts}>to contacts</Link> */}
    </div>
  );
}

export default MainView;
