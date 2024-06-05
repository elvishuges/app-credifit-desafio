import request from './';

export default {
  simulateConsignedCredit(employeeId, consignedCreditValue) {
    return request({
      url: `/consignedCredits/simulate/employees/${employeeId}`,
      method: 'get',
      params: { consignedCreditValue: consignedCreditValue },
    });
  },
};
