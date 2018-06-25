<template>
  <div>
    <h3>Count is {{ count }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
