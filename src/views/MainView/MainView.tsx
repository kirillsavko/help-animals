import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

const MainView = (): JSX.Element => {
  return (
    <div>
      main view
      <Link to={routes.contacts}>to contacts</Link>
    </div>
  );
}

export default MainView;
