import { useState } from 'react';
import { Greeting } from './1.Greeting';

const LoginButton = ({ onClick }) => (
  <button onClick={ onClick }>
    Login
  </button>
);

const LogoutButton = ({ onClick }) => (
  <button onClick={ onClick }>
    Logout
  </button>
);


// statefull component
export const LoginControl = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginClick = () => {
		setIsLoggedIn(true);
	}

	const handleLogoutClick = () => {
		setIsLoggedIn(false);
	}

  return (
    <div>
      <Greeting isLoggedIn={ isLoggedIn } />
      {isLoggedIn
        ? <LogoutButton onClick={ handleLogoutClick } />
        : <LoginButton onClick={ handleLoginClick } />
      }

      {/* inline if and logical & */}

      {
        true && <div>Some text zazaz</div>
      }
    </div>
  );
}
