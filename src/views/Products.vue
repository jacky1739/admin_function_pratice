<template>
  <div class="container">
    產品列表
    <table class="table">
      <thead></thead>
      <tbody>
        <tr v-for="item in products" :key="item">
          <td></td>
          <td></td>
            <button type="button" class="btn btn-primary" @click="SingleProduct(item.id)">
              進入單一頁面
            </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      },
      modal: {
        editModal: '',
        delModal: ''
      },
      currentPage: 1
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/products`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
          this.isLoading = false
          console.log(this.products, this.pagination)
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
