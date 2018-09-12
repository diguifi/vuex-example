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
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

</style>
