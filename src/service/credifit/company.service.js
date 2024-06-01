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
};
