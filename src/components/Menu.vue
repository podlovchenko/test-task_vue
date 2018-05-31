<template>
  <b-nav tabs>
    <b-nav-item-dropdown text="Change menu">
      <b-container>
      <b-form-group>
        <b-form-checkbox-group id="checkboxes" name="flavour" v-model="selected" :options="items">
        </b-form-checkbox-group>
      </b-form-group>
      </b-container>
    </b-nav-item-dropdown>
    <b-nav-item v-for="item in selected" :key="item.id">{{ item }}</b-nav-item>
  </b-nav>
</template>

<script>
  export default {
    data () {
      return {
        selected: [],
        items: [
          'item1',
          'item2',
          'item3'
        ]
      }
    },
  }
</script>
