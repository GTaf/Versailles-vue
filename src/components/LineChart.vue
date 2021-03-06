<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["sensorId"],
  watch: {
    sensorId: function () {
      this.getData("http://localhost:8081/" + this.sensorId);
    },
    data: function () {
      this._data._chart.destroy();
      this.renderLineChart();
    },
  },
  data() {
    return {
      info: null,
      data: [],
      res: null,
    };
  },
  computed: {
    chartData: function () {
      return this.data;
    },
  },
  methods: {
    async getData(adress) {
      const res = await fetch(adress);
      this.res = res;
      const data = await res.json();
      var array = [];
      for (var i = 0; i < data.length; i++) {
        array.push(data[i]["value"]);
      }
      this.data = array;
    },
    renderLineChart: function () {
      this.renderChart(
        {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Temperature",
              data: this.data,
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
            {
              label: "Ensoleillement",
              data: [2, 2, 4, 3, 10, 12, 8, 10, 10, 10, 10],
              backgroundColor: "transparent",
              borderColor: "rgba(1, 216, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: false,
            text: "My Data",
          },
        }
      );
    },
  },
  beforeMount() {
    this.getData("http://localhost:8081/" + this.sensorId);
  },
  mounted() {
    this.renderLineChart();
  },
};
</script>