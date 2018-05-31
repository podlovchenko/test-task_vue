<template>
  <div class="col-sm-4 offset-sm-4">
    <b-form inline>
      <b-form-input v-model="login" type="text" class="mb-2 mr-sm-2 mb-sm-0"></b-form-input>
      <b-button variant="primary" v-on:click="send">Log In!</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        login: ''
      }
    },
    methods: {
      send () {
        axios.post('/login', this.login).then(() => {
          this.$store.commit('login')
          this.$router.push('/main')
        })
      }
    }
  }
</script>
