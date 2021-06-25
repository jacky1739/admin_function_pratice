<template>
  單一頁面

  {{ id }}
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.id = id
    console.log(this.id)
    const url = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/product/${id}`
    this.$http.get(url).then(res => {
      console.log(res)
    })
  }
}
</script>
