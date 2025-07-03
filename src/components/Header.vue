<script lang="js">
import {defineComponent} from 'vue'
import DropdownMenu from './DropdownMenu.vue';
import {RouterLink} from "vue-router";
import {SONG_LIST, HOME, PAST_EVENTS, UPCOMING_EVENTS, GALLERY, LALES_BLOG, NANAS_BLOG} from '../router/PathsConstants'


const eventsName = "Events"
const eventsObjects = [
  {
    linkType: "r_link",
    linkName: "Past events",
    linkValue: PAST_EVENTS,
  },
  {
    linkType: "r_link",
    linkName: "Upcoming events",
    linkValue: UPCOMING_EVENTS,
  },
  {
    linkType: "r_link",
    linkName: "Gallery",
    linkValue: GALLERY,
  },
]

const blogsName = "Blogs"
const blogsObjects = [
  {
    linkType: "r_link",
    linkName: "Nana's blog",
    linkValue: NANAS_BLOG,
  },
  {
    linkType: "r_link",
    linkName: "Lale's blog",
    linkValue: LALES_BLOG,
  }
]

const aboutName = "About"
const aboutObjects = [
  {
    linkType: "r_link",
    linkName: "Song list",
    linkValue: SONG_LIST,
  },
  {
    linkType: "a_link",
    linkName: "Contacts",
    linkValue: "#contacts",
  }
]

export default defineComponent({
  name: "Header",
  data() {
    return {
      "eventsName": eventsName,
      "eventsObjects": eventsObjects,
      "blogsName": blogsName,
      "blogsObjects": blogsObjects,
      "aboutName": aboutName,
      "aboutObjects": aboutObjects,
      "home": HOME
    }
  },
  components: {
    DropdownMenu,
    RouterLink
  }
})

</script>

<template>
<header>
  <nav>
    <span>Lalessandra&amp;Nanaise</span>
    <span><RouterLink :to="home">Home</RouterLink></span>
    <DropdownMenu :dropdown-name="eventsName" :link-objects="eventsObjects"></DropdownMenu>
    <DropdownMenu :dropdown-name="blogsName" :link-objects="blogsObjects"></DropdownMenu>
    <DropdownMenu :dropdown-name="aboutName" :link-objects="aboutObjects"></DropdownMenu>
  </nav>
</header>
</template>

<style scoped>

</style>
