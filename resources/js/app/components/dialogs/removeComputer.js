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
    }),

    methods: {
        remove (id, index) {
            // this.$refs.form.validate()
            axios.post('/api/computers/delete', {
                id: id,
            }).then( (response) => {
                const success = response.data.success
                if(success) {
                    this.$emit('removeElement', index)
                }
            })
        },
    },
}
