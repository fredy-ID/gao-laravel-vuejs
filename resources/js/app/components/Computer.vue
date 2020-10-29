<template>
        <!-- <li v-for="computer in computersList" v-bind:key="computer.id">
            {{ computer.name }} toto
        </li> -->
            <v-card :loading="loading"  max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-card-title>{{ computer.name }}</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-simple-table>
                            <template v-slot:default>
                            <tbody>
                                <v-row v-for="(time, key) in times" :key="key">
                                    <v-col cols="3"> {{ time.index }}h</v-col>
                                    <v-col cols="5">
                                        <span v-if="time.assignment">
                                            {{ time.assignment.last_name + " " + time.assignment.first_name }}
                                        </span>
                                    </v-col>
                                    <v-col cols="2">
                                        <add-assignment />
                                    </v-col>
                                </v-row>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </v-card-text>

            </v-card>
</template>
<script>
    import AddAssignment from './dialogs/AddAssignment';

    export default {
        props: {
            computer: {
                required: true
            },
        },
        components: {
            AddAssignment,  
        },
        data: () => ({
            loading: false,
            selection: 1,
            cells: [],
            times: [],
            assignments: {},

        }),
        created () {
                this.initialize();
        },
        methods: {
            
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
            initialize () {
                
               this.computer.assignment.forEach(data => {
                    this.assignments[data.time] = {
                        id: data.id,
                        last_name: data.client_id.last_name,
                        first_name: data.client_id.first_name
                    };
                });
                
                this.displayTime();
            },
            displayTime() {
                this.times = [];

                for (let i = 0; i < 10; i++) {
                        var index = (i + 8 < 10) ? '0' + (i + 8) +':00:00' : (i + 8) +':00:00';

                        this.times.push({
                        index: index,
                        assignment: (typeof this.assignments[index] !== 'undefined') ? this.assignments[index] : false
                    })
                }
            },
        },
        
        
        
    }
</script>