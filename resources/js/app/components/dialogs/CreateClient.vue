<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark> mdi-account-plus</v-icon>
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="headline">Ajouter un client</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="lastName" :counter="25" :rules="nameRules" label="Nom" required ></v-text-field>
                        <v-text-field v-model="firstName" :counter="25" :rules="nameRules" label="Prénom" required ></v-text-field>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Fermer
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Ajouter
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./createClient.js"></script>
