<template>
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
    >
      <template slot="name" slot-scope="row">{{row.value}}</template>
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click.stop="editName(row.item)" class="mr-1">
          Редактировать
        </b-button>
        <b-button size="sm" @click.stop="deleteName(row.item)">
          Удалить
        </b-button>
      </template>
    </b-table>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        items: [],
        fields: [
          { key: 'name', label: 'Users' },
          { key: 'actions', label: 'Actions' }
        ]
      }
    },
    mounted() {
      axios.post('/users', this.login).then(response => {this.items = response.data})
    },
    methods: {
      editName (item) {
        alert(`Edit ${item.name}`)
      },
      deleteName (item) {
        alert(`Delete ${item.name}`)
      }
    }
  }
</script>
