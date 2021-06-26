<template>
  <div class="container">
    產品列表
    <div class="d-flex justify-content-end mt-4">
      <button class="btn btn-primary">
        建立新的產品
      </button>
    </div>
    <table class="table">
      <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
      <tbody>
        <tr v-for="item in products" :key="item">
         <td>{{ item.category }}</td>
         <td>{{ item.title }}</td>
         <td>{{ item.origin_price }}</td>
         <td>{{ item.price }}</td>
         <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
         </td>
         <td>
           <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal">
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm">
              刪除
            </button>
          </div>
         </td>
        </tr>
      </tbody>
    </table>
    <pagination></pagination>
    <input type="text" ref="text">
    <!-- ProductModal -->
    <ProductModal ref="productModal"></ProductModal>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import ProductModal from '@/components/ProductModal.vue'

export default {
  components: {
    pagination,
    ProductModal
  },
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
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          // console.log(res.data.result.token)
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
          console.log(this.products, this.pagination)
        }
      })
    },
    openModal () {
      // const productComponent = this.$refs.productModal
      // productComponent.openModal()
      console.log(this.$refs.productModal, this.$refs)
      this.$refs.productModal.show()
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    console.log(token)
    this.getProducts()
  }
}
</script>
