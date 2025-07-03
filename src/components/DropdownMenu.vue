<script lang="ts">
import {defineComponent} from 'vue'
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "DropdownMenu",
  components: {
    RouterLink
  },
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
      <a v-if="linkObject.linkValue[0]"></a>
      <RouterLink :to="linkObject.linkValue" v-for="linkObject in linkObjects">linkObject.linkName</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
