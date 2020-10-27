<template>

    <div>
        <div>
            <v-row align="center" class="ma-12">
                <h1>Liste des ordinateurs </h1>
                <create-computer @createElement="getCreatedElement" />
            </v-row>
            <computer :computers="computers[0]"/>
        </div>
    </div>

</template>
<script>
import Computer from '../components/Computer';
import CreateComputer from '../components/dialogs/CreateComputer';

export default {
    data() {
        return {
            computers: [],
        };
    },
    components: {
        Computer,
        CreateComputer,
    },

    methods: {
        getComputers() {
            axios.get('/api/computers').then(response => {
                this.computers.push(response.data)
            });
        },
        getCreatedElement(data) {
            this.computers = [];
            this.computers.push(data)
        }
    },

    created() {
        this.getComputers();
    }
}
</script>
