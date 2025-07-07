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
  name: "NavBar",
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
<header id="header">
  <nav id="navbar">
    <span id="logo-title">Lalessandra&amp;Nanaise</span>
    <div id="links">
      <span><RouterLink :to="home">Home</RouterLink></span>
      <DropdownMenu :drop-count="1" :dropdown-name="eventsName" :link-objects="eventsObjects"></DropdownMenu>
      <DropdownMenu :drop-count="2" :dropdown-name="blogsName" :link-objects="blogsObjects"></DropdownMenu>
      <DropdownMenu :drop-count="3" :dropdown-name="aboutName" :link-objects="aboutObjects"></DropdownMenu>
    </div>
  </nav>
</header>
</template>

<style scoped>

#header {
  position: sticky;
  top:0;
  width: 100vw;
  padding-left: 1em;
}

#header, #navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
}

#navbar {
  justify-self: end;
}

#links {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  z-index: 10;
  padding-left: 1em;
}

#logo-title {
  font-size: 30px;
  text-align: center;
}

#navbar {
  width: 60%;
}
</style>
