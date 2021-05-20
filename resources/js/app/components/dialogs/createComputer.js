export default {
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
      validate () {
        // this.$refs.form.validate()
        axios.post('/api/computers/create', {
            name: this.name,
        }).then( (response) => {
            this.name = '';
            this.valid =  true;
            this.dialog = false;
            this.$emit('createElement', response.data)
        })
      },
    },
}
