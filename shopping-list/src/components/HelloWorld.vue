<template>
  <div class="hello">
    <div class="right">
      <h1>{{ title }}</h1>

      <ul>
        <li v-for="(item, index) in itens" v-bind:key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="left">
      <stats />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Stats from '@/components/Stats.vue';
import { mapState } from 'vuex';

@Component({
  components: {
    Stats,
  },
  computed: {
    ...mapState([
        'title',
        'itens']),
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
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
