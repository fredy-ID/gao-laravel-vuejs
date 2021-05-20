<template>

    <div>
        <div @click="fetchComputers">
        Je suis toto
        </div>
    </div>

</template>
<script>

    export default {
        methods: {
            fetchComputers() {
                axios.get('/api/computers').then(response => {
                    // console.log(response)
                })
            },
        }
    }

</script>
