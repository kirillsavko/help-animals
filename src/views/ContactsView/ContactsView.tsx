import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

const ContactsView = (): JSX.Element => {
  return (
    <div>
      contacts view
      <Link to={routes.main}>to main</Link>
    </div>
  );
}

export default ContactsView;
