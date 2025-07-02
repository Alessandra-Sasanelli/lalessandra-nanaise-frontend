<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DropdownMenu",
  props: {
    dropdownName: {
      type: String,
      required: true
    },
    linkObjects: {
      type: Array,
      required: true
    }
  }
})
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">{{ dropdownName }}</button>
    <div class="dropdown-content">
      <a :href="linkObject.linkValue" v-for="linkObject in linkObjects">linkObject.linkName</a>
    </div>
  </div>
</template>

<style scoped>

</style>
