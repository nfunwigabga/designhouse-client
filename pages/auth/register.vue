<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Register
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          We have sent you an email to activate your account.
        </alert-success>
        <div class="form-group">
          <input
            type="text"
            v-model.trim="form.name"
            name="name"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('name') }"
            placeholder="Full Name"
          />
          <has-error :form="form" field="name"></has-error>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model.trim="form.username"
            name="username"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('username') }"
            placeholder="Username"
          />
          <has-error :form="form" field="username"></has-error>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model.trim="form.email"
            name="email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password"
            name="password"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('password') }"
            placeholder="Password"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password_confirmation"
            name="password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Confirm Password"
          />
        </div>

        <div class="text-right">
          <button
            type="submit"
            :disabled="form.busy"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Register
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <nuxt-link :to="{ name: 'login' }" class="color-blue">
            Login
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: this.$vform({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },

  methods: {
    submit() {
      this.form
        .post(`/register`)
        .then(res => {
          this.form.reset();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
