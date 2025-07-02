<script lang="ts">
import {defineComponent} from 'vue'
import DropdownMenu from './DropdownMenu.vue';

export default defineComponent({
  name: "Header",
  components: {
    DropdownMenu
  }
})

const eventsName = Events
const linkObjects = [
  {
    linkName: "Past events",
    linkValue: "/past_events",
  },
  {
    linkName: "Upcoming events",
    linkValue: "/upcoming_events",
  },
  {
    linkName: "Gallery",
    linkValue: "/gallery",
  },
]
</script>

<template>
<div>
  <div>
    <h1></h1>
    <span><a href="/">Home</a></span>
    <DropdownMenu :dropdown-name=eventsName link-objects=""></DropdownMenu>
    <DropdownMenu></DropdownMenu>
    <DropdownMenu></DropdownMenu>
  </div>
</div>
</template>

<style scoped>

</style>
