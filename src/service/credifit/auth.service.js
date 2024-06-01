import request from './';
export default {
  login(email, senha) {
    var obj = {
      email: email,
      senha: senha,
    };

    return request({
      url: '/auth/login',
      method: 'post',
      data: obj,
    });
  },
};
