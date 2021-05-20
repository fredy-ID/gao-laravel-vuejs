<template>
        <!-- <li v-for="computer in computersList" v-bind:key="computer.id">
            {{ computer.name }} toto
        </li> -->
            <v-card :loading="loading"  max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-card-title @click="test('a')">
                    {{ computer.name }}
                    <remove-computer :id="computer.id" :index="index" @removeElement="removeElement"/>
                    <rename-computer :id="computer.id" :index="index" @editElement="editComputerName"/>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-simple-table>
                            <template v-slot:default>
                            <tbody>
                                <v-row v-for="(time, key) in times" :key="key">
                                    <v-col cols="3"> {{ time.index }} h</v-col>
                                    <v-col cols="5">
                                        <span v-if="time.assignment">
                                            {{ time.assignment.last_name + " " + time.assignment.first_name }}
                                        </span>
                                    </v-col>
                                    <v-col cols="2">
                                        <add-assignment :index="key" :date="date" :time="time.index" :computerId="computer.id" @editElement="editAssignment"/>
                                        <remove-assignment
                                            v-if="time.assignment"
                                            :id="time.assignment.id"
                                            @removeElement="deleteAssignment"
                                        />
                                    </v-col>
                                </v-row>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </v-card-text>

            </v-card>
</template>
<script src="./computer.js"></script>
