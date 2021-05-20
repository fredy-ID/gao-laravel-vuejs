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

            <v-container fluid>
                <v-data-iterator
                    :items="computers"
                    :items-per-page.sync="itemsPerPage"
                    :page.sync="page"
                    :search="search"
                    hide-default-footer
                >

                <!-- header -->
                <template v-slot:header >
                    <v-toolbar
                    dark
                    outlined
                    color="blue darken-3"
                    class="mb-10"
                    >
                    <v-text-field
                        v-model="search"
                        clearable
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Chercher un ordinateur"
                    ></v-text-field>
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-spacer></v-spacer>
                        <span
                            class="mr-4
                            grey--text"
                        >
                            Page {{ page }} sur {{ numberOfPages }}
                        </span>

                        <!-- navigation buttons -->
                        <v-btn
                            fab
                            dark
                            color="blue darken-3"
                            class="mr-1"
                            @click="formerPage"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            fab
                            dark
                            color="blue darken-3"
                            class="ml-1"
                            @click="nextPage"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </template>
                    </v-toolbar>
                </template>

                <template v-slot:default="{ items }">
                    <v-row justify="center">
                        <v-col
                            v-for="(computer, index) in items"
                            v-bind:key="computer.id"
                            cols="12"
                            sm="6"
                            md="4"
                        >

                            <computers
                            :date="date"
                            :computer="computer"
                            :index="index"
                            @removeElement="removeElement"
                            @editElement="editElement" />
                        </v-col>
                    </v-row>
                </template>

                </v-data-iterator>
            </v-container>

            <!-- <v-row>
                <v-col v-for="(computer, index) in computers" v-bind:key="computer.id" cols="12" sm="6" md="4">
                    <computers
                    :date="date"
                    :computer="computer"
                    :index="index"
                    @removeElement="removeElement"
                    @editElement="editElement" />
                </v-col>
            </v-row> -->

        </div>
    </div>

</template>
<script src="./home.js"></script>

