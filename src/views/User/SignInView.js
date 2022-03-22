import { useState, useEffect, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginUser,
  userSelector,
  clearState,
  setUsername,
  setPassword,
} from './UserSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { isTablet, isMobile } from 'react-device-detect';
import { getSchema } from '../../config/validations';

// import LangButton from '../../components/button/LangButton';
// import AlertsModals from '../../components/modals/AlertsModals';
import InputTextField from '../../components/form/InputTextField';
// import InputPassField from '../../components/form/InputPassField';
// import TemplateModals from '../../components/modals/TemplateModals';
import Button from '../../components/button/ButtonForm';

export default function SignInView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const schema = getSchema(['email', 'password']);

  const [enabled, setEnabled] = useState(true);
  //const [password, setPassword] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  //const { isFetching, isSuccess, isError, errorMessage } =
  const { isSuccess, isError } = useSelector(userSelector);
  const onSubmit = (data) => {
    console.log(data);
    data.username = data.email;
    delete data.email;
    setEnabled(false);
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      //toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.push('/dashboard');
    }
  }, [isError, isSuccess, dispatch, history]);

  return (
    <>
      <div className='login-content flex'>
        <div className='row justify-center w-100 m-0'>
          <div className='login-info col-xl-7'>
            <div className='flex flex-column content-center'>
              <img
                className='brand-img mb-3 mr-auto'
                src='./images/tenant/tnx/tnx_white.svg'
                alt={t('message.alt_logo')}
              />
              <h1 className='mb-4'>{t('sign_in.title')}</h1>
              <p className='white regular mb-0'>{t('sign_in.paragraph')}</p>
            </div>
          </div>

          <div className='container-form col-auto col-xl-5'>
            {/* <AlertsModals /> */}
            <div className='flex flex-column items-center content-center widget-container'>
              <img
                className='xl-none mb-4'
                src='./images/tenant/tnx/tnx_color.svg'
                alt={t('message.alt_logo')}
              />

              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='primary'>{t('sign_in.login')}</h2>

                <InputTextField
                  id='email'
                  register={register('email')}
                  error={errors.email}
                  onChange={handleUsername}
                />

                <InputTextField
                  id='password'
                  register={register('password')}
                  error={errors.password}
                  onChange={handlePassword}
                />

                <div className='block mt-2 mb-3'>
                  <Link to='/recover-access' className='btn-link'>
                    {t('sign_in.forgot_pass')}
                  </Link>
                </div>

                <Button
                  enabled={`${enabled}`}
                  text={t('sign_in.sign_in')}
                  className='btn-primary btn-large'
                  type='submit'
                ></Button>

                <label className='primary mt-3 mb-3 bold h5'>
                  {t('sign_in.dont_have_account')}
                </label>

                <Link to='/signup' className='btn-outline btn-large'>
                  {t('sign_in.sign_up_here')}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
