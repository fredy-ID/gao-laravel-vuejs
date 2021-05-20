export default {

    props: {
        id: {
            required: true
        },
    },

    data: () => ({
      dialog: false,
      valid: true,
    }),

    methods: {
        remove (id) {
            // this.$refs.form.validate()
            axios.post('/api/assignment/delete', {
                id: id,
            }).then( (response) => {
                const success = response.data.success
                if(success) {
                    this.$emit('removeElement', id)
                }
            })
        },
    },
}
