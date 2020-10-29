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
                <span class="headline">Attribuer un ordinateur</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-autocomplete v-model="value" :items="items" dense label="Filled"></v-autocomplete>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Fermer
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Valider
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
    //   items: ['foo', 'bar', 'fizz', 'buzz', 'buziz', 'bupzz', 'buzkz', 'vbuzz', 'bruzz', 'bfuzz'],
      items: [],
      value: null,
    }),

    methods: {
      validate () {
          console.log('ajout attribution')
      },
    },
}
</script>