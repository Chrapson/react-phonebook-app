import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
