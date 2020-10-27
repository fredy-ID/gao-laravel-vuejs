<template>
    <div class="d-flex flex-row justify-space-around align-center">
        <!-- <li v-for="computer in computers" v-bind:key="computer.id">
            {{ computer.name }} toto
        </li> -->
        <v-card
            :loading="loading"
            max-width="374"
            v-for="computer in computers" 
            v-bind:key="computer.id"
        >
            <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

            <v-card-title>{{ computer.name }}</v-card-title>

        </v-card>
    </div>
</template>
<script>
    export default {
        data: () => ({
            loading: false,
            selection: 1,
        }),
        props: {
            computers: {
                default: function () {
                    return {};
                }
            }
        },
        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>