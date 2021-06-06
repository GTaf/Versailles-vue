<script>
export default {
	name: 'Query',
    data: function () {
        return {
            data: {},
            dataArray: []
        }
    },
    beforeMount(){
        this.getData();
    },
    methods: {
        async getData() {
            const res = await fetch('http://localhost:8081/2/1/');
            const data = await res.json();
            this.data = data;
            var array = []
            for(var i = 0; i < data.length; i++) {
                array.push(data[i]['value'])
            }
            this.dataArray = array;
        }
    }
}
</script>

<template>
    <div>
        <p>{{ data }}</p> 
        <p>{{ dataArray }}</p>
    </div>
</template>

<style>
	a {
		text-decoration: none;
	}
</style>