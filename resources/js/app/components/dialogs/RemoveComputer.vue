<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn outlined icon dark color="error" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-minus </v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Supprimer un ordinateur</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    Voulez-vous réellement supprimer cet ordinateur ?
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Annuler
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="remove(id, index)">
                    Supprimer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./removeComputer.js"></script>
