<script lang="ts">
import { defineComponent, ref } from 'vue'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'

export default defineComponent({
  name: "DropdownMenu",
  components: {
    BDropdown,
    BDropdownItem
  },
  props: {
    dropCount : {
      type: Number,
      required: true
    },
    dropdownName: {
      type: String,
      required: true
    },
    linkObjects: {
      type: Array,
      required: true
    }
  },
  setup() {
    const myDropdown = ref(null)

    function showDropdown() {
      myDropdown.value?.show()
    }
    function hideDropdown() {
      myDropdown.value?.hide()
    }

    return { myDropdown, showDropdown, hideDropdown }
  }
})
</script>

<template>
  <div @mouseover="showDropdown" @mouseleave="hideDropdown">
    <BDropdown no-caret
               :auto-close="false"
               ref="myDropdown1"
               is-nav
               :text="dropdownName">
      <BDropdownItem v-for="(linkObject, i) in linkObjects"
                     :key="linkObject.linkValue || i"
                     :href="linkObject.linkValue">
        {{ linkObject.linkName }}
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<style scoped>
:deep(.dropdown > button) {
  background-color: transparent !important;
  border-radius: 0;
  padding: 0;
}

:deep(.dropdown > button):hover{
  text-decoration: underline #181818;
}

:deep(.dropdown > ul) {
  border: none;
}

:deep(.dropdown > ul li a) {
  border: none;
  padding: 0;
  margin: 0;
}

:deep(.dropdown-item){
  border-bottom: 1px solid #242424 !important;
}

</style>
