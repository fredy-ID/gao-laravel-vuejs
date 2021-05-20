<template>
            <v-card :loading="loading"  max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-card-title @click="test('a')">
                    <div>
                        <div>
                            {{ computer.name }}
                        </div>

                        <div class="ml-auto">
                            <rename-computer :id="computer.id" :index="index" @editElement="editComputerName"/>
                            <remove-computer :id="computer.id" :index="index" @removeElement="removeElement"/>
                        </div>
                    </div>

                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-list two-line>
                            <v-list-item-group
                            >
                                <template v-for="(time, index) in times">
                                <v-list-item
                                    :key="time.id"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ time.index }} h
                                        </v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <span v-if="time.assignment">
                                                {{ time.assignment.last_name + " " + time.assignment.first_name }}
                                            </span>
                                        </v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <add-assignment :index="index" :date="date" :time="time.index" :computerId="computer.id" @editElement="editAssignment"/>
                                    </v-list-item-action>                            <v-list-item-action>
                                        <remove-assignment
                                            v-if="time.assignment"
                                            :id="time.assignment.id"
                                            @removeElement="deleteAssignment"
                                        />
                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider
                                    v-if="index < times.length - 1"
                                    :key="index"
                                ></v-divider>
                                </template>
                            </v-list-item-group>
                        </v-list>
                    </v-container>
                </v-card-text>

            </v-card>
</template>
<script src="./computer.js"></script>
