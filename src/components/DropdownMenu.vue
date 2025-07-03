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
/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
