<template>
  <b-container>
    <Menu />
    <Users />
    <b-button variant="primary" v-on:click="logout">Log Out!</b-button>
  </b-container>
</template>

<script>
  import Menu from '@/components/Menu'
  import Users from '@/components/Users'

  export default {
    components: {
      Menu,
      Users
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    }
  }
</script>
