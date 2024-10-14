// ---------------------------------------------------------------------------
//                                M A R K U P
// ---------------------------------------------------------------------------

<template>
    <h1 class="display-4">Network Details</h1>
    <h3 class="display-4">Network 1</h3>
    <blockquote class="blockquote text-center">
        <p class="mb-0">Description of the network goes here with the details</p>
        <!-- <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> -->
    </blockquote>
    <br>
    <div class="row justify-content-center">
        <template v-for="(item, index) in items" :key="index">
            <SubnetItem :item="item" @click="navigateToNodePage"></SubnetItem>
        </template>
    </div>
</template>
  

// ---------------------------------------------------------------------------
//                                    JS
// ---------------------------------------------------------------------------


<script>
    import SubnetItem from '../components/NodeComponent.vue'

    export default {
        name: 'Network-page',
        components: {
            SubnetItem,
        },
        data() {
            return {
            items: [
                { id: 1, updated_at: '10/02/2022', name:'QN-B205', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 2, updated_at: '08/15/2015', name:'QN-B305', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 3, updated_at: '02/02/2022', name:'QN-B405', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 4, updated_at: '06/02/2022', name:'QN-B805', description: 'PQNI node in 220', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 5, updated_at: '12/02/2022', name:'QN-B905', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 6, updated_at: '02/02/2022', name:'QN-B705', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 7, updated_at: '03/02/2022', name:'QN-B305', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 8, updated_at: '10/02/2022', name:'QN-B225', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 9, updated_at: '06/02/2022', name:'QN-B455', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
                { id: 10, updated_at: '08/18/2022', name:'QN-B785', description: 'PQNI node in 222', label: 'QN_B205', posx:'100', posy:'200' },
            ]
            };
        }
    }
</script>


// ---------------------------------------------------------------------------
//                                  S T Y L E
// ---------------------------------------------------------------------------

<style scoped>
    /* h1 {
        color: #4258c6;
    } */
</style>
  