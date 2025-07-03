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
      <span v-for="linkObject in linkObjects">
        <a v-if="linkObject.linkType === 'a_link'" :href="linkObject.linkValue">{{ linkObject.linkName }}</a>
        <RouterLink v-else-if="linkObject.linkType === 'r_link'" :to="linkObject.linkValue">{{ linkObject.linkName }}</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
