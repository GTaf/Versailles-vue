<script>
import LineChart from "@/components/LineChart.vue";
export default {
  name: "ChartWrapper",
  data: function() {
      return {
          selected : 1
      }
  },
  components: {
    LineChart,
  },
};
</script>

<template>
  <div>
    <ul class="test">
      <li> <button v-on:click="selected = 1">Température</button></li>
      <li> <button v-on:click="selected = 2">Hygrometrie</button></li>
      <li> <button v-on:click="selected = 3">Ensoleillement</button></li>
    </ul>
    <p>{{selected}}</p>
    <LineChart v-bind:sensorId="selected"></LineChart>
  </div>
</template>

<style>
ul.test {
  white-space: nowrap;
  margin: 10px 10px;
}

ul.test > li {
  display: inline;
  padding: 2px 5px 2px 5px;
}
</style>