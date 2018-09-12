<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ counterItens }} itens</p>

    <button v-on:click="removeAllItens">Remove all Itens</button>
    <p>{{msg}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapMutations, mapActions } from 'vuex';

@Component({
  name: 'Stats',
  components: {
  },
  computed: {
    ...mapGetters([
        'counterItens',
        ]),
  },
  methods: {
      ...mapMutations(['REMOVE_ALL']),
      ...mapActions(['removeAll']),
  },
})
export default class Stats extends Vue {
    public removeAll: any;
    public msg: string;

    constructor() {
        super();
        this.msg = '';
    }

    public removeAllItens() {
        this.removeAll().then(() => {
            this.msg = 'They have been removed';
        });
    }
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

button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>
