export default {
    data: () => ({
      dialog: false,
      valid: true,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Champs requis',
        v => (v && v.length <= 25) || 'Trop long',
      ],
    }),

    methods: {
      validate () {
        // this.$refs.form.validate()
        axios.post('/api/client/create', {
            firstName: this.firstName,
            lastName: this.lastName,
        }).then( (response) => {
            this.firstName = '';
            this.lastName = '';
            this.valid =  true;
            this.dialog = false;
            this.$emit('createElement', response.data)
        })
      },
    },
}
