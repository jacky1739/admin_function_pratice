<template>
  <Navbar></Navbar>
  <div class="constainer">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
