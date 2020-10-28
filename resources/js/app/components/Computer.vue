<template>
    <v-row >
        <!-- <li v-for="computer in computers" v-bind:key="computer.id">
            {{ computer.name }} toto
        </li> -->
        <v-col v-for="computer in computers" v-bind:key="computer.id" cols="12" sm="4">
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
                                <tr v-for="assignment in assignments" v-bind:key="assignment.time" v-bind:value="[assignment.client_id.last_name, assignment.client_id.first_name]">
                                    <td>{{ assignment.client_id.first_name }} {{ assignment.client_id.last_name }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>
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
            },
            assignments: {
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