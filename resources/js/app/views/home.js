import Computers from '../components/Computer.vue';
import CardComputer from '../components/CardComputer.vue';
import CreateComputer from '../components/dialogs/CreateComputer.vue';
import CreateClient from '../components/dialogs/CreateClient.vue';

export default {

    components: {
        Computers,
        CreateComputer,
        CreateClient,
        CardComputer,
    },

    data() {
        return {
            computers: [],
            date: new Date().toISOString().substr(0, 10),
            modal: false,

            // data iterator
            itemsPerPageArray: [4, 8, 12],
            page: 1,
            itemsPerPage: 4,
            search: '',
        };
    },

    computed: {
        numberOfPages () {
          return Math.ceil(this.computers.length / this.itemsPerPage)
        },
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
        },

        // data iterator
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
          },
          formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
          },
    },

    created() {
        this.getComputers();
    },
}
