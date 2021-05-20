<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-account-edit </v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Ajoutez ou sélectionnez un utilisateur à assigner</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-autocomplete
                        v-model="value"
                        :items="items"
                        item-text="name"
                        item-value="id"
                        :search-input.sync="searchInput"
                        dense
                        label="Utilisateur"
                        @keyup="searchClient"
                        @change="valid = true"
                        :clearable="true"
                    >
                    </v-autocomplete>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Fermer
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate(index)">
                    Valider
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./addAssignment.js"></script>
