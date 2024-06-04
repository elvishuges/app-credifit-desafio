import LoginPage from './../pages/LoginPage';
import ConsignedCredit from './../pages/ConsignedCredit';
import ConsignedCreditStatus from './../pages/ConsignedCreditStatus';
import HomePage from './../pages/HomePage';
import AdmPage from './../pages/AdmPage';
import CreateCompanyForm from './../pages/CreateCompanyForm';
import AgreedCompanyPage from './../pages/AgreedCompanyPage';
import CreateAgreedCompanyEmployeeForm from './../pages/CreateAgreedCompanyEmployeeForm';

const routes = [
  { path: '/login', component: LoginPage },
  // Funcionarios
  { path: '/credito-consignado', component: ConsignedCredit },
  { path: '/status-credito-consignado', component: ConsignedCreditStatus },
  //admin
  { path: '/admin', component: AdmPage },
  { path: '/admin/create-company', component: CreateCompanyForm },
  { path: '/admin/agreed-company-page/:id', component: AgreedCompanyPage },
  {
    path: '/admin/agreed-company/:id/employee-form',
    component: CreateAgreedCompanyEmployeeForm,
  },
  { path: '/', component: HomePage },
];

export default routes;
