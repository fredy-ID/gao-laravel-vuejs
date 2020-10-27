<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Ajouter un ordinateur</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="name" :counter="25" :rules="nameRules" label="Nom de l'ordinateur" required ></v-text-field>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Validate
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
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
            this.$emit('createElement', response.data.data)
        })
      },
    },
}
</script>