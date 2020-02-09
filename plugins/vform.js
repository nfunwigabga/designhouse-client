import Vue from 'vue';
import { Form, HasError, AlertError, AlertSuccess } from 'vform';
Vue.component(HasError.name, HasError);
Vue.component(AlertSuccess.name, AlertSuccess);
Vue.component(AlertError.name, AlertError);

export default ({ app }, inject) => {
  Form.prototype.submit = function submit(method, url, config = {}) {
    this.startProcessing();

    const data = method === 'get' ? { params: this.data() } : this.data();

    return new Promise((resolve, reject) => {
      app.$axios
        .request({
          url: this.route(url),
          method,
          data,
          ...config
        })
        .then(response => {
          this.finishProcessing();
          resolve(response);
        })
        .catch(error => {
          this.busy = false;

          if (error.response) {
            this.errors.set(this.extractErrors(error.response));
          }

          reject(error);
        });
    });
  };

  app.$vform = (...params) => new Form(...params);
  inject('vform', (...params) => new Form(...params));
};
