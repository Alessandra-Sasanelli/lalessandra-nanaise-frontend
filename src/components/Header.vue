<script lang="js">
import {defineComponent} from 'vue'
import DropdownMenu from './DropdownMenu.vue';
import {RouterLink} from "vue-router";
import {SONG_LIST, HOME, PAST_EVENTS, UPCOMING_EVENTS, GALLERY, LALES_BLOG, NANAS_BLOG} from '../router/PathsConstants'

export default defineComponent({
  name: "Header",
  components: {
    DropdownMenu,
    RouterLink
  }
})

const eventsName = "Events"
const eventsObjects = [
  {
    linkName: "Past events",
    linkValue: PAST_EVENTS,
  },
  {
    linkName: "Upcoming events",
    linkValue: UPCOMING_EVENTS,
  },
  {
    linkName: "Gallery",
    linkValue: GALLERY,
  },
]

const blogsName = "Blogs"
const blogsObjects = [
  {
    linkName: "Nana's blog",
    linkValue: NANAS_BLOG,
  },
  {
    linkName: "Lale's blog",
    linkValue: LALES_BLOG,
  }
]

const aboutName = "About"
const aboutObjects = [
  {
    linkName: "Song list",
    linkValue: SONG_LIST,
  },
  {
    linkName: "Contacts",
    linkValue: "#contacts",
  }
]
</script>

<template>
<header>
  <nav>
    <span>Lalessandra&amp;Nanaise</span>
    <span><RouterLink :to=HOME>Home</RouterLink></span>
    <DropdownMenu :dropdown-name=eventsName :link-objects=eventsObjects></DropdownMenu>
    <DropdownMenu :dropdown-name=blogsName :link-objects=blogsObjects></DropdownMenu>
    <DropdownMenu :dropdown-name=aboutName :link-objects=aboutObjects></DropdownMenu>
  </nav>
</header>
</template>

<style scoped>

</style>
