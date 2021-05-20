<template>
    <div>
        <v-list-item>
            <v-list-item-content>Calories:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.calories }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Fat:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.fat }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Carbs:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.carbs }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Protein:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.protein }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Sodium:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.sodium }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Calcium:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.calcium }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>Iron:</v-list-item-content>
            <v-list-item-content class="align-end">
            {{ item.iron }}
            </v-list-item-content>
        </v-list-item>
        </div>
</template>

<script>
export default {
    props: {
        item: {
            required: true
        },
    },
    data: () => ({

    })
}
</script>

<style>

</style>
