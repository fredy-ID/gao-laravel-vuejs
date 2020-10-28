<template>

    <div>
        <div>
            <v-row align="center" class="ma-12">
                <h1>Liste des ordinateurs </h1>
                <create-computer @createElement="getCreatedElement" />
            </v-row>
            <computers :computers="computers[0]" :assignments="assignments[0]"/>
        </div>
    </div>

</template>
<script>
import Computers from '../components/Computer';
import CreateComputer from '../components/dialogs/CreateComputer';

export default {
    data() {
        return {
            computers: [],
            assignments: [],
        };
    },
    components: {
        Computers,
        CreateComputer,
    },

    methods: {
        getComputers() {
            axios.get('/api/computers').then(response => {
                this.computers.push(response.data)
                console.log(response)
            });
        },
        getCreatedElement(data) {
            this.computers = [];
            this.computers.push(data)
        },
        getAssignments() {
            axios.get('/api/computers/assignments').then(response => {
                this.assignments.push(response.data.data)
                console.log(this.assignments)
            });
        },
    },

    created() {
        this.getComputers();
        this.getAssignments();
    }
}
</script>
