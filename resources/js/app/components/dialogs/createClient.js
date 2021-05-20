export default {
    data: () => ({
      dialog: false,
      valid: false,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Champs requis',
        v => (v && v.length <= 25) || 'Trop long',
      ],
    }),

    methods: {
      validate () {
        this.valid =  false;
        // this.$refs.form.validate()
        axios.post('/api/client/create', {
            firstName: this.firstName,
            lastName: this.lastName,
        }).then( (response) => {
            this.firstName = '';
            this.lastName = '';
            this.dialog = false;
            this.$emit('createElement', response.data)
        })
      },
    },
}
