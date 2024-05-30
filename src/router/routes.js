import LoginPage from './../pages/LoginPage';
import ConsignedCredit from './../pages/ConsignedCredit';
import ConsignedCreditStatus from './../pages/ConsignedCreditStatus';
import HomePage from './../pages/HomePage';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/credito-consignado', component: ConsignedCredit },
  { path: '/status-credito-consignado', component: ConsignedCreditStatus },
  { path: '/', component: HomePage },
];

export default routes;
