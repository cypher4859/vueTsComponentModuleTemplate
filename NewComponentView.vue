<template>
  <div>
    <new-component-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import NewComponentCard from './render/NewComponentCard.vue'

@Component({
  name: 'NewComponentView',
  components: {
    'new-component-card': NewComponentCard
  }
})
export default class NewComponentView extends Vue {
}
</script>
