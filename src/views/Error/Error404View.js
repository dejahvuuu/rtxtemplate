import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Error404View() {
  const { t } = useTranslation();

  const possibleCauses = Object.entries(
    t('translation:error_404.possible_causes_list', {
      returnObjects: true,
    })
  );

  return (
    <>
      <div className='flex items-center justify-center process-container px-5'>
        <div>
          <div className='stylized-icon mb-2'>
            <i className='flex justify-center items-center icon-warning-info primary'></i>
          </div>
          <small>{t('translation:message.error_code', { code: '404' })}</small>
          <h2 className='primary mb-0'>
            {t('translation:message.oops_title')}
          </h2>
          <p className='mb-3 bold'>{t('translation:error_404.message')}</p>
          <ul>
            {possibleCauses.map(([key, value], i, arr) => (
              <li key={i} className={arr[i + 1] ? 'mb-2' : 'mb-3'}>
                <small>{value}</small>
              </li>
            ))}
          </ul>
          <div className='flex items-center justify-start'>
            <Link to='/' className='btn btn-primary'>
              {t('translation:action.back_to_home')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
