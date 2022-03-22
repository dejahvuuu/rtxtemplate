import { useState, Fragment, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser, userSelector, clearState, setSpecify } from './UserSlice';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSchema } from '../../config/validations';

import CloseButton from '../../components/button/CloseButton';
import InputTextField from '../../components/form/InputTextField';
import InputPassField from '../../components/form/InputPassField';
import RadioGroup from '../../components/form/RadioGroup';
import RadioButton from '../../components/form/RadioButton';

export default function SignUpView() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schema = getSchema([
    'fname',
    'lname',
    'firstSurname',
    'secondLastname',
    'email',
    'password',
    'passwordConfirmation',
    'through',
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const specify = useSelector((state) => state.specify);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/signin');
    }
    if (isError) {
      //toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError, dispatch, history]);

  const handleChange = (e) => {
    dispatch(setSpecify(e.target.value));
  };

  // const [specify, setSpecify] = useState('');

  /*
  const handleChange = (e) => {
    setSpecify(e.target.value);
  };
  */

  /*
  const onSubmit = (data) => {
    console.log(data);
    window.location.assign('/company-information');
  };
  */

  return (
    <>
      <div className='row justify-center w-100 m-auto py-6'>
        <CloseButton confirmToClose={false} />
        <div className='container-form py-6'>
          <img
            className='mb-4 block mx-xl-1 mx-auto'
            src='./images/tenant/tnx/tnx_color.svg'
            alt={t('message.alt_logo')}
          />
          <form
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
          >
            <h2 className='primary'>{t('sign_up.title')}</h2>
            <p>{t('sign_up.instructions')}</p>
            <InputTextField
              id='fname'
              register={register('fname')}
              error={errors.fname}
            />

            <InputTextField
              className='relative'
              id='lname'
              register={register('lname')}
              error={errors.middleName}
              optional
            />

            <InputTextField
              id='firstSurname'
              register={register('firstSurname')}
              error={errors.firstSurname}
            />

            <InputTextField
              className='relative'
              id='secondLastname'
              register={register('secondLastname')}
              error={errors.secondLastname}
              optional
            />

            <InputTextField
              id='email'
              register={register('email')}
              error={errors.email}
            />

            <InputPassField
              id='password'
              register={register('password')}
              error={errors.password}
              additionalInfo={true}
            />

            <InputPassField
              id='passwordConfirmation'
              register={register('passwordConfirmation')}
              error={errors.passwordConfirmation}
            />

            <RadioGroup
              label={t('form.how_did_u_meet_us')}
              register={register('through')}
              error={errors.through}
              onChange={handleChange}
            >
              <RadioButton
                label={t('form.commercialAdvisor_label')}
                value='trading'
              />
              <RadioButton
                label={t('form.socialNetworks_label')}
                value='network'
              />
              <RadioButton label={t('form.other_label')} value='other' />
            </RadioGroup>

            <div className='flex items-center justify-end mb-6'>
              <button className='btn-primary btn-small right' type='submit'>
                {t('sign_up.sign_up_button')}{' '}
                <i className='icon-arrow-right white h4 pl-1'></i>
              </button>
            </div>
            <div className='center mb-3'>
              {t('sign_up.have_account')}{' '}
              <Link to='/signin' className='btn-link'>
                {t('sign_in.login')}
              </Link>
            </div>
            <div className='flex'>
              <div className='flex justify-center'>
                <i className='icon-shield secondary h5'></i>
              </div>
              <div className='flex'>
                <small className='self-center pt-1 pl-1'>
                  <Trans i18nKey='message.data_provided_secure'>
                    <b>Los datos proveidos está seguros.</b> Lorem ipsum.
                  </Trans>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
