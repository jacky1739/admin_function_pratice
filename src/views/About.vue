<template>
  <div class="about">
    <div class="container">
    <h1>This is an about page</h1>
      <Form v-slot="{ errors }">
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></Field>
        <Error-message name="email" class="invalid-feedback"></Error-message>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  }
}
</script>
