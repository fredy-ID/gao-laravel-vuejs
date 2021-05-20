<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-minus </v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Supprimer l'affectation</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    Voulez-vous réellement retirer cet utilisateur pour cette tranche horaire ?
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Annuler
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="remove(id)">
                    Supprimer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./removeAssignment.js"></script>
