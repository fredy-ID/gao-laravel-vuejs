export default {
    props: {
        id: {
            required: true
        },
        index: {
            required: true
        },
    },

    data: () => ({
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nom requis',
        v => (v && v.length <= 25) || 'Nom de l\'ordinateur trop long',
      ],
    }),

    methods: {
      edit (id, index) {
          const name = this.name
        // this.$refs.form.validate()
        axios.post('/api/computers/edit', {
            id: id,
            name: name,
        }).then( (response) => {
            this.name = '';
            this.valid =  true;
            this.dialog = false;

            const success = response.data.success
            if(success) {
                this.$emit('editElement', [index, name])
            }
        })
      },
    },
}
