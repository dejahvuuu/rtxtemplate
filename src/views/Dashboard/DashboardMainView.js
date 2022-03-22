import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Card } from '@mui/material';
import Chart from 'react-apexcharts';

import StatusCard from '../../components/cards/StatusCard';
import dataChartGraph from '../../components/chart/dataChartGraph';

import { useSelector, useDispatch } from 'react-redux';
import {
  userSelector,
  fetchUserBytoken,
  clearState,
} from '../../views/User/UserSlice';
import { useHistory } from 'react-router-dom';

const subAccounts = [
  {
    text: 'Cuenta Main',
    amount: '$100.000.00',
  },
  {
    text: 'Operaciones',
    amount: '$45,000.00',
  },
  {
    text: 'Legal',
    amount: '$45,000.00',
  },
  {
    text: 'T&E',
    amount: '$10,000.00',
  },
];

const lastActivity = [
  {
    name: 'Solicitud pago a Peruvian malts',
    order: 'Despacho de pedido #123456',
    amount: '-$20,000.00',
    date: '25/03/2021',
    status: 'down',
  },
  {
    name: 'Carga cuenta ACH Tenux',
    order: 'Interbank #123456',
    amount: '-$150,000.00',
    date: '20/03/2021',
    status: 'down',
  },
  {
    name: 'Transferencia a Subcuenta',
    order: 'Transferencia Recursos Humanos',
    amount: '-$30,000.00',
    date: '16/03/2021',
    status: 'down',
  },
  {
    name: 'Pago de Avon',
    order: 'Wallet Tenux #00123456',
    amount: '+$70,000.00',
    date: '16/03/2021',
    status: 'up',
  },
  {
    name: 'Pago de Coca Cola Perú',
    order: 'Wallet Tenux #00128978',
    amount: '+$34,000.00',
    date: '08/03/2021',
    status: 'up',
  },
];

export default function DashboardMainView() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, []);
  const { username, email } = useSelector(userSelector);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/signin');
    }
  }, [isError]);

  return (
    <div className='container mx-auto'>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <Box>
          <div className='flex justify-end mb-3'>
            <small>{t('translation:dashboard.last_session')} 10/09/2021</small>
          </div>

          <div className='flex justify-between flex-wrap'>
            <div className='flex flex-wrap mb-2 mb-xl-0 m-lg-0 mx-auto'>
              <Box sx={{ width: 250 }} className='mr-1'>
                <Card
                  sx={{ backgroundColor: 'transparent' }}
                  className='ui-border text'
                  variant='outlined'
                >
                  <h5 className='mb-1'>
                    {t('translation:dashboard.balance_total')}
                  </h5>
                  <h3 className='mb-0 primary truncate'>$240,000.00</h3>
                </Card>
              </Box>

              <Box sx={{ width: 250 }} className='ml-lg-1'>
                <Card
                  sx={{ backgroundColor: 'transparent' }}
                  className='ui-border text'
                  variant='outlined'
                >
                  <h5 className='mb-1'>
                    {t('translation:dashboard.main_account')}
                  </h5>
                  <h3 className='mb-0 truncate'>$100,000.00</h3>
                </Card>
              </Box>
            </div>
            <div className='flex mr-0 m-lg-0 mx-auto mt-lg-2'>
              <Link to='/recharges' className='btn-primary mr-2'>
                {t('translation:action.recharge_card')}
              </Link>
              <Link to='/issued' className='btn-primary ml-2'>
                {t('translation:action.issued_card')}
              </Link>
            </div>
          </div>

          <div className='flex flex-column my-4'>
            <h5>{t('translation:message.subaccount')}</h5>
            <div>
              <div className='flex justify-end mx-1'>
                <Link
                  to='/account-management'
                  className='btn-inline p-0 semibold'
                >
                  <i className='icon-settings px-1 semiboldz'></i>
                  {t('translation:action.settings_subaccount')}
                </Link>
              </div>
              <div className='flex justify-between flex-wrap'>
                {subAccounts.map((accounts, index) => {
                  return (
                    <Box
                      className='ui-shadow mx-lg-1 my-1 mx-auto'
                      sx={{ width: 195 }}
                      key={index}
                    >
                      <Card className='ui-border p-2' variant='outlined'>
                        <span className='mb-1'>{accounts.text}</span>
                        <h5 className='mb-0 text'>{accounts.amount}</h5>
                      </Card>
                    </Box>
                  );
                })}
              </div>
              <hr className='mb-3' />
              <div className='flex justify-between flex-wrap'>
                <StatusCard
                  icon='icon-transfer'
                  label={t('translation:dashboard.card_status.transaction')}
                  mount='2,000'
                  status='12,3%'
                  statusMovements='up'
                />
                <StatusCard
                  icon='icon-card'
                  label={t('translation:dashboard.card_status.issued')}
                  mount='235'
                  status='6,7%'
                  statusMovements='down'
                />
                <StatusCard
                  icon='icon-person'
                  label={t('translation:dashboard.card_status.employed')}
                  mount='504'
                  status='8,7%'
                  statusMovements='up'
                />
              </div>

              <div className='flex justify-between flex-wrap'>
                <Box
                  className='ui-shadow mx-xl-1 my-3 mx-auto'
                  sx={{ width: 447 }}
                >
                  <Card className='ui-border p-2 h-100' variant='outlined'>
                    <div className='flex flex-column'>
                      <div className='flex justify-between items-center'>
                        <h5 className='primary bold mb-0'>
                          {t('translation:dashboard.activity')}
                        </h5>
                        <Link to='/income-reports' className='btn-inline p-0'>
                          {t('translation:action.look_activity')}
                          <i className='icon-arrow-right pl-1'></i>
                        </Link>
                      </div>
                      {lastActivity.map((activity, index) => {
                        return (
                          <div
                            className='flex justify-between py-1'
                            key={index}
                          >
                            <div className='flex items-center'>
                              <i
                                className={`icon-solid-${activity.status} status text-${activity.status} text h5`}
                              ></i>
                              <div className='flex flex-column p-1'>
                                <span className='bold text'>
                                  {activity.name}
                                </span>
                                <small>{activity.order}</small>
                              </div>
                            </div>
                            <div className='flex flex-column p-1'>
                              <span
                                className={`bold text status text-${activity.status}`}
                              >
                                {activity.amount}
                              </span>
                              <small>{activity.date}</small>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </Box>
                <Box
                  className='ui-shadow mx-xl-1 my-3 mx-auto'
                  sx={{ width: 447 }}
                >
                  <Card className='ui-border p-2 h-100' variant='outlined'>
                    <div className='flex flex-column mt-1'>
                      <h5 className='primary bold mb-2'>
                        {t('translation:dashboard.report')}
                      </h5>
                      <h5 className='text semibold'>
                        {t('translation:dashboard.income_expense')}
                      </h5>
                    </div>
                    <div className='flex justify-center'>
                      <Chart width='100%' height='285' {...dataChartGraph} />
                    </div>
                  </Card>
                </Box>
              </div>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}
