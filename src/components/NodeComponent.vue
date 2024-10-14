// ---------------------------------------------------------------------------
//                                M A R K U P
// ---------------------------------------------------------------------------

<template>
    <div class="card mx-3 my-4 p-0" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Node: {{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text"><em>Last updated: {{ item.updated_at }}</em></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Label: {{ item.label }}</li>
            <li class="list-group-item">Pox X: {{ item.posx }}</li>
            <li class="list-group-item">Pos Y: {{ item.posy }}</li>
        </ul>
        <div class="card-body">
            <button class="btn btn-outline-primary m-2" @click="navigateToNodePage('LTPs')">5 Total LTP (3 Busy)</button>
            <button class="btn btn-outline-primary m-2" @click="navigateToNodePage('Links')">10 Total Links (4 Down)</button>
        </div>
    </div>
</template>
  

// ---------------------------------------------------------------------------
//                                    JS
// ---------------------------------------------------------------------------


<script>
    export default {
        name: 'Node-Component',
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            navigateToNodePage(route) {
                console.log("navigateToNodePage, route = ", route);
                const id = this.item.id;
                const name = this.item.name;
                const description = this.item.description;
                const label = this.item.label;
                const posx = this.item.posx;
                const posy = this.item.posy;
                this.$router.push({ name: 'node', params: { id: id, route: route, name: name, description: description, label: label, posx: posx, posy: posy } });
            }
        }
    }
</script>


// ---------------------------------------------------------------------------
//                                  S T Y L E
// ---------------------------------------------------------------------------

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    h1 {
        color: #4258c6;
    }

    a {
        color: #42c536;
    }
</style>
  