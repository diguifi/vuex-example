<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ counterItens }} itens</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  name: 'Stats',
  components: {
  },
  computed: {
    ...mapGetters([
        'counterItens',
        ]),
  },
})
export default class Stats extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
