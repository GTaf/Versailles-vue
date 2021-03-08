<script>
import LineChart from "@/components/LineChart.vue";
import Query from './Query.vue';
export default {
  name: "ChartWrapper",
  data: function() {
      return {
          selected : 1,
          period : 1
      }
  },
  components: {
    LineChart,
    Query,
  },
};

</script>

//TODO use v-for
<template>
  <div>
    <ul class="sensor">
      <li> <button v-bind:greened="selected == 1 ? true : false" v-on:click="selected = 1" >Température</button></li>
      <li> <button v-bind:greened="selected == 2 ? true : false" v-on:click="selected = 2" >Hygrometrie</button></li>
      <li> <button v-bind:greened="selected == 3 ? true : false" v-on:click="selected = 3" >Ensoleillement</button></li>
    </ul>
    <ul class="period">
      <li> <button v-bind:greened="period == 1 ? true : false" v-on:click="period = 1" >Day</button></li>
      <li> <button v-bind:greened="period == 2 ? true : false" v-on:click="period = 2" >Week</button></li>
      <li> <button v-bind:greened="period == 3 ? true : false" v-on:click="period = 3" >Month</button></li>
      <li> <button v-bind:greened="period == 4 ? true : false" v-on:click="period = 4" >Year</button></li>
    </ul>
    <p>{{period}}</p>
    <Query/>
    <LineChart v-bind:sensorId="selected"></LineChart>
  </div>
</template>

<style>
ul.sensor {
  white-space: nowrap;
  margin: 10px 10px;
}

ul.sensor > li {
  display: inline;
  padding: 2px 10px 2px 10px;
}

ul.period {
  white-space: nowrap;
  margin: 10px 10px;
}

ul.period > li {
  display: inline;
  padding: 2px 5px 2px 5px;
}

button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    text-decoration:underline;
    font-weight: bold;
}

button[greened=true]{
    color: #42b983;;
}
</style>