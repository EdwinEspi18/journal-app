import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
const RegisterScreen = () => {
  /* Redux - Hooks */
  /* useDispatch para dispara la action */
  const dispatch = useDispatch();
  /* useSelector para seleccionar mis states del store */
  const { msgError } = useSelector((state) => state.ui);
  /* ----------------------------------------------------- */
  const [values, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValue()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValue = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name vacio'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email incorrecto'));
      return false;
    } else if (password !== password2 && password.length < 6) {
      dispatch(setError('Password no coindicen'));
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          <b>Register</b>
        </button>
        <hr />
        <Link to="/auth/login" className="link">
          Already resgistered? Log In
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
