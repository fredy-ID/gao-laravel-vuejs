import AddAssignment from './dialogs/AddAssignment.vue';
import RemoveAssignment from './dialogs/RemoveAssignment.vue';
import RemoveComputer from './dialogs/RemoveComputer.vue';
import RenameComputer from './dialogs/RenameComputer.vue';

export default {
    props: {
        computer: {
            required: true
        },

        date: {
            required: true
        },

        index: {
            required: true
        },
    },
    components: {
        AddAssignment,
        RemoveComputer,
        RenameComputer,
        RemoveAssignment,
    },
    data: () => ({
        loading: false,
        selection: 1,
        cells: [],
        times: [],
        assignments: {},

    }),
    created () {
        this.initialize();
    },
    watch: {
        date: function(newVal, oldVal) { // watch it
            this.initialize();
        }
    },
    methods: {

        reserve () {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
        initialize () {
            this.assignments = {}
           this.computer.assignment.forEach(data => {
                // this.assignments[data.time] = null
                if(this.$props.date === data.date) {
                    this.assignments[data.time] = {
                        id: data.id,
                        last_name: data.client.last_name,
                        first_name: data.client.first_name
                    };
                }

            });

            this.displayTime();
        },
        displayTime() {
            this.times = [];
            // Début de période à 8h et fin à 18h
            for (let heure = 0; heure <= 10; heure++) {
                    var index = (heure + 8 < 10) ? '0' + (heure + 8) : (heure + 8);
                    this.times.push({
                    index: index,
                    assignment: (typeof this.assignments[(index +":00:00")] != undefined) ? this.assignments[(index +":00:00")] : false
                })
            }
        },

        removeElement(index) {
            this.$emit('removeElement', index)
        },

        editComputerName(data) {
            this.$emit('editElement', data)
        },
        editAssignment(data) {
            const newAssignment = data
            this.computer.assignment.forEach(assignment => {
                if(assignment.id === newAssignment.id) {
                    const index = this.computer.assignment.indexOf(assignment)
                    this.computer.assignment.splice(index, 1);
                    return;
                }
            });

            this.computer.assignment.push(newAssignment)
            this.initialize();
        },
        deleteAssignment(id) {
            const removedAssignmentId = id
            this.computer.assignment.forEach(assignment => {
                if(assignment.id === removedAssignmentId) {
                    const index = this.computer.assignment.indexOf(assignment)
                    this.computer.assignment.splice(index, 1);
                    return;
                }
            });
            this.initialize();
        },
        test(a) {
            console.log(a)
            console.log(this.$props.date)
        }
    },

}
