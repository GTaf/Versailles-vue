<template>
  <div class="home">
    <img alt="logo" class="logo" src="../assets/versailles.png" />
    <p>Bienvenue à Versailles</p>
    <ChartWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
//import LineChart from "@/components/LineChart.vue";
//import Query from "@/components/Query.vue";
import ChartWrapper from '@/components/ChartWrapper.vue'

export default {
  name: "Home",
  components: {
    ChartWrapper,
    //Query,
  },
};
</script>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
