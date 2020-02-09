<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" action="" method="">
        <div class="form-group">
          <input
            type="text"
            name="email"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Password"
          />
        </div>
        <div class="mt-4 mb-4 clearfix">
          <a class="forgot-pass color-blue font-14 fw-400" href="#">
            Forgot password?
          </a>
        </div>
        <div class="text-right">
          <button
            type="submit"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <a class="color-blue" href="#"> Create an account</a>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
