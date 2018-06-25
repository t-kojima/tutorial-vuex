<template>
  <div class="form">
    Form Page
    <HeadComp />
    <TextareaComp />
    <StringComp />
    <button @click='buttonAction'>{{ button }}</button>
  </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'form',
  components: { HeadComp, TextareaComp, StringComp },
  data () {
    return {
      button: 'かくにん'
    }
  },
  methods: mapActions('Form', {
    'buttonAction': 'buttonAction'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
