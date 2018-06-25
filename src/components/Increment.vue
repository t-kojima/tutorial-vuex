<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
  </div>
</template>

<script>
import { increment } from '../vuex/actions'
import { decrement } from '../vuex/actions'
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
