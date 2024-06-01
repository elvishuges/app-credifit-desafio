import LoginPage from './../pages/LoginPage';
import ConsignedCredit from './../pages/ConsignedCredit';
import ConsignedCreditStatus from './../pages/ConsignedCreditStatus';
import HomePage from './../pages/HomePage';
import AdmPage from './../pages/AdmPage';
import CreateCompanyForm from './../pages/CreateCompanyForm';

const routes = [
  { path: '/login', component: LoginPage },
  // Funcionarios
  { path: '/credito-consignado', component: ConsignedCredit },
  { path: '/status-credito-consignado', component: ConsignedCreditStatus },
  //admin
  { path: '/admin', component: AdmPage },
  { path: '/create-company', component: CreateCompanyForm },
  { path: '/', component: HomePage },
];

export default routes;
