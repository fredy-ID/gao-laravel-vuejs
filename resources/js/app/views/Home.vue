<template>

    <div>
        <div>

            <v-row align="center" class="ma-12">
                <h1>Liste des ordinateurs </h1>
                <create-computer @createElement="getCreatedElement" />
                <create-client />
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date" label="Picker in dialog" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(date), test(date)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-col v-for="(computer, index) in computers" v-bind:key="computer.id" cols="12" sm="6" md="4">
                    <computers
                    :date="date"
                    :computer="computer"
                    :index="index"
                    @removeElement="removeElement"
                    @editElement="editElement" />
                </v-col>
            </v-row>

        </div>
    </div>

</template>
<script src="./home.js"></script>

