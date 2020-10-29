<template>

    <div>
        <div>

            <v-row align="center" class="ma-12">
                <h1>Liste des ordinateurs </h1>
                <create-computer @createElement="getCreatedElement" />
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date" label="Picker in dialog" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(date), test(date)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-col v-for="computer in computers" v-bind:key="computer.id" cols="12" sm="6" md="4">
                    <computers :computer="computer" />
                </v-col>
            </v-row>

        </div>
    </div>

</template>
<script>
import Computers from '../components/Computer';
import CreateComputer from '../components/dialogs/CreateComputer';


export default {
    
    components: {
        Computers,
        CreateComputer,
    },
    
    data() {
        return {
            computers: [],
            date: new Date().toISOString().substr(0, 10),
            modal: false,
        };
    },

    methods: {
        getComputers() {
            axios.get('/api/computers', { params: { date: this.date }}).then(response => {
                this.computers = response.data.data;
                const date = response.config.params.date;
            }).catch(error => {
                console.log(error);
            });;
        },
        getCreatedElement(data) {
            this.computers = [];
            this.computers.push(data)
        },
        test(a) {
            console.log(a)
        }
    },

    created() {
        this.getComputers();
    },
}
</script>
