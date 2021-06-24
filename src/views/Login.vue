<template>
  <div class="container mt-5">
    <form id="form" class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
    <!-- <Form v-slot="{ errors }" @submit.prevent="getData" id="form" class="row justify-content-center">
      <div class="col-md-4">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <Field id="inputEmail" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="Email address" rules="email|required" v-model="user.username"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <Field id="inputPassword" name="password" type="password" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="Password" rules="email|required" v-model="user.password"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </Form> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('click')
      const url = `${process.env.VUE_APP_PATH}/admin/signin`
      this.$http.post(url, this.user).then(res => {
        console.log(res)
        if (res.data.success) {
          alert('登入成功')
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$router.push('/admin/Products')
        }
      })
    }
  }
}
</script>
