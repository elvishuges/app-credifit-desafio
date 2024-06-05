import request from './';

export default {
  checkAprovedConsignedCredid(payload) {
    return request({
      url: '/agreedCompanies',
      method: 'post',
      data: payload,
    });
  },
};
