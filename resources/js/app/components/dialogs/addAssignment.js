
export default {
    props: {
        time: {
            required: true
        },
        computerId: {
            required: true
        },
        date: {
            required: true
        },
        index: {
            required: true
        },
    },

    data: () => ({
      dialog: false,
      valid: true,
      items: [],
      value: null,
      searchInput: "",
    }),

    watch: {
        search(val) {
          if (val && (!this.select || this.select !== val)) {
            this.searchClient(val)
          }
        }
    },

    methods: {
      validate (index) {
        const computerId = parseInt(this.$props.computerId);
        const time = parseInt(this.$props.time);
        const date = this.$props.date;
        const clientId = this.value;

        axios.get('/api/create/assignment', { params: { date: date, computer: computerId, time: time, client: clientId }}).then((response) => {
            this.$emit('editElement', response.data.assignment[0])
        }).catch(error => {
            console.log(error);
        });

      },

        searchClient() {
            this.items = [];
            if(this.searchInput.length >= 3) {
                setTimeout(() => {
                    axios.get('/api/clients/search', { params: { search: this.searchInput } }).then(response => {
                        response.data[0].forEach(client => {
                            this.items.push({id:client.id, name:client.first_name + " " + client.last_name})
                        });
                    }).catch(error => {
                        console.log(error);
                    });;
                }, 500);
            }
        },
    },
}
