<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Modifier le nom de l'ordinateur</span>
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
                    Annuler
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="edit(id, index)">
                    Modifier
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./renameComputer.js"></script>
