// ---------------------------------------------------------------------------
//                                M A R K U P
// ---------------------------------------------------------------------------

<template>
    <h3 class="display-6">{{route}}</h3>
    <h5><strong>Node: </strong>{{ name }}</h5>
    <h5><strong>Description: </strong>{{ description }}</h5>
    <h5><strong>Label: </strong>{{ label }}</h5>
    <h5><strong>Pos X: </strong>{{ posx }}</h5>
    <h5><strong>Pos y: </strong>{{ posy }}</h5>
</template>


<script>
    export default {
        name: 'Node-page',
        computed: {
            id() {
                return this.$route.params.id;
            },
            route() {
                return this.$route.params.route;
            },
            name() {
                return this.$route.params.name;
            },
            description() {
                return this.$route.params.description;
            },
            label() {
                return this.$route.params.label;
            },
            posx() {
                return this.$route.params.posx;
            },
            posy() {
                return this.$route.params.posy;
            },
        }
    }
</script>


