import Computers from '../components/Computer.vue';
import CreateComputer from '../components/dialogs/CreateComputer.vue';
import CreateClient from '../components/dialogs/CreateClient.vue';

export default {

    components: {
        Computers,
        CreateComputer,
        CreateClient,
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
            this.computers.push(data)
        },
        removeElement(index) {
            if (index > -1) {
                this.computers.splice(index, 1);
            }
        },
        editElement(data) {
            const index = data[0]
            const name = data[1]
            this.computers[index].name = name
        },
        test(a) {
            console.log(a)
        }
    },

    created() {
        this.getComputers();
    },
}
