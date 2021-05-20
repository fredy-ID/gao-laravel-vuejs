export default {
    data: () => ({
      dialog: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Nom requis',
        v => (v && v.length <= 25) || 'Nom de l\'ordinateur trop long',
      ],
    }),

    methods: {
      validate () {
        this.valid =  false;
        // this.$refs.form.validate()
        axios.post('/api/computers/create', {
            name: this.name,
        }).then( (response) => {
            this.name = '';
            this.dialog = false;
            this.$emit('createElement', response.data)
        })
      },
    },
}
