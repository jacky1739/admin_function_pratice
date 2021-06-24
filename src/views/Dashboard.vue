<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from '@/components/AdminNavBar.vue'
export default {
  components: { Navbar }
}
</script>
