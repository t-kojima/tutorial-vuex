
<template>
  <div class="textarea-comp">
    <p class="error">{{ error }}</p>
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: 'textareaComp',
  data () {
    return {
      error: '入力は必須必須！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
