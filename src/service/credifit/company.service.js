import request from './';

export default {
  createAgreedCompany(payload) {
    return request({
      url: '/agreedCompanies',
      method: 'post',
      data: payload,
    });
  },
  getAllAgreedCompanies() {
    return request({
      url: '/agreedCompanies',
      method: 'get',
    });
  },
  getAgreedCompanyEmployees(agreedCompanyId) {
    return request({
      url: `/agreedCompanies/${agreedCompanyId}/employees`,
      method: 'get',
    });
  },
  addEmployee(agreedCompanyId, payload) {
    return request({
      url: `/agreedCompanies/${agreedCompanyId}/employees`,
      method: 'post',
      data: payload,
    });
  },
};
