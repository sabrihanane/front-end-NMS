// ---------------------------------------------------------------------------
// M A R K U P //
---------------------------------------------------------------------------

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-brand">Network Management System</div>
            <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <!-- First Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownMenu1" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ selectedNetwork ? selectedNetwork.name : 'Select Network...' }}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li v-for="option in networkList" :key="option.id">
                                <a class="dropdown-item" href="#" @click="networkOnSelect(option)">
                                    {{ option.name }}
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Second Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownMenu2" role="button"
                            data-bs-toggle="dropdown" :class="{ 'disabled': !isNetworkSelected }" aria-expanded="false"
                            :aria-disabled="!isNetworkSelected">
                            {{ selectedSubnet ? selectedSubnet : 'Select Subnet...' }}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2" v-if="isNetworkSelected">
                            <li v-for="option in subnetDropdownData" :key="option">
                                <a class="dropdown-item" href="#" @click="subnetOnSelect(option)">
                                    {{ option }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="text-center">
        <div v-if="contentVisible">
            <div class="d-flex justify-content-between align-items-center mt-2 pt-2 pb-2 ps-4 pe-4 navbar-expand-lg navbar-light bg-light">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li class="breadcrumb-item" v-if="selectedNetwork">
                            {{ selectedNetwork.name }}
                        </li>
                        <li class="breadcrumb-item active" v-if="selectedSubnet">
                            {{ selectedSubnet }}
                        </li>
                    </ol>
                </nav>

                <div>
                    <button class="btn btn-outline-primary me-2" @click="openAddNetworkModal()">
                        Add Network
                    </button>
                    <button class="btn btn-outline-primary" @click="openAddSubnetModal()">
                        Add Subnet
                    </button>
                </div>
            </div>
            <h4 class="mt-4" >Subnet : {{ selectedSubnet }}</h4>
            <blockquote class="blockquote text-center">
                <p class="mb-0">Description of the subnet goes here</p>
            </blockquote>
        </div>


        <div v-else class="text-center mt-5">
            <div class="text-center mt-5">
                <img src="../assets/Subnet-03.jpg" alt="Network Image" class="img-fluid small-image mt-5" />
            </div>
            <h2 class="mt-5">Welcome to the Network Management System</h2>
            <p>Please select a network and a subnet to proceed.</p>
        </div>
    </div>


    <div v-if="contentVisible">
        <br />

        <div class="row justify-content-center">
            <template v-for="(item, index) in items" :key="index">
                <NodeComponent :item="item"></NodeComponent>
            </template>
        </div>

        <AddNetworkModal v-if="isAddNetworkModalVisible" @close="handleAddNetworkModalClose" />
        <AddSubnetModal v-if="isAddSubnetModalVisible" :networkList="networkList" @close="handleAddSubnetModalClose" />
    </div>
</template>

// ---------------------------------------------------------------------------
// JS //
---------------------------------------------------------------------------

<script>
import AddSubnetModal from "@/components/modals/AddSubnetModal.vue";
import NodeComponent from "../components/NodeComponent.vue";
import AddNetworkModal from "@/components/modals/AddNetworkModal.vue";

export default {
    name: "Subnet-page",
    components: {
        NodeComponent,
        AddNetworkModal,
        AddSubnetModal,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    updated_at: "10/02/2022",
                    name: "QN-B205",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 2,
                    updated_at: "08/15/2015",
                    name: "QN-B305",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 3,
                    updated_at: "02/02/2022",
                    name: "QN-B405",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 4,
                    updated_at: "06/02/2022",
                    name: "QN-B805",
                    description: "PQNI node in 220",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 5,
                    updated_at: "12/02/2022",
                    name: "QN-B905",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 6,
                    updated_at: "02/02/2022",
                    name: "QN-B705",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 7,
                    updated_at: "03/02/2022",
                    name: "QN-B305",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 8,
                    updated_at: "10/02/2022",
                    name: "QN-B225",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 9,
                    updated_at: "06/02/2022",
                    name: "QN-B455",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
                {
                    id: 10,
                    updated_at: "08/18/2022",
                    name: "QN-B785",
                    description: "PQNI node in 222",
                    label: "QN_B205",
                    posx: "100",
                    posy: "200",
                },
            ],

            networkList: [
            {
                    id: 1,
                    created_at: "07/30/2018",
                    updated_at: "10/22/2020",
                    deleted_at: null,
                    name: "KS95-TU9",
                    subnets: null,
                },
                {
                    id: 2,
                    created_at: "06/02/2022",
                    updated_at: "06/02/2022",
                    deleted_at: "06/02/2022",
                    name: "KHSL-GF6",
                    subnets: null,
                },
            ],
            subnetDropdownData: [],
            selectedNetwork: null,
            selectedSubnet: null,
            isNetworkSelected: false,
            isAddNetworkModalVisible: false,
            isAddSubnetModalVisible: false,
        };
    },
    computed: {
        // Determines if both dropdowns have been selected
        contentVisible() {
            return this.selectedNetwork && this.selectedSubnet;
        }
    },
    methods: {
        networkOnSelect(option) {
            this.selectedNetwork = option;
            this.isNetworkSelected = true;

            // Populate dropdown2 options based on the selected network
            if (option.name === 'KS95-TU9') {
                this.subnetDropdownData = ['PQNI'];
            } else if (option.name === 'KHSL-GF6') {
                this.subnetDropdownData = [];
            }

            // Reset the second dropdown when a new network is selected
            this.selectedSubnet = null;
        },
        subnetOnSelect(option) {
            this.selectedSubnet = option;
        },
        openAddNetworkModal() {
            this.isAddNetworkModalVisible = true;
        },
        openAddSubnetModal() {
            this.isAddSubnetModalVisible = true;
        },
        handleAddNetworkModalClose(result) {
            this.isAddNetworkModalVisible = false;
            if (result === "success") {
                console.log("Add network Modal closed with success");
            } else {
                console.log("Add network Modal closed with failure");
            }
        },
        handleAddSubnetModalClose(result) {
            this.isAddSubnetModalVisible = false;
            if (result === "success") {
                console.log("Add subnet Modal closed with success");
            } else {
                console.log("Add subnet Modal closed with failure");
            }
        },
    },
};
</script>



// ---------------------------------------------------------------------------
// S T Y L E
// ---------------------------------------------------------------------------


<style scoped>
.navbar-brand {
    font-weight: bold;
}

.nav-link.dropdown-toggle {
    color: rgb(1, 188, 110);
    padding: 8px 15px;
    border-radius: 4px;
    border: 1px solid rgb(1, 188, 110);
    transition: background-color 0.3s ease;
}

.nav-link.dropdown-toggle:hover {
    background-color: rgb(1, 188, 110);
    color: white;
}

.dropdown-menu {
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
    padding: 10px 20px;
    transition: background-color 0.2s ease;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.navbar-nav .nav-item {
    margin-right: 10px;
}

.nav-link.disabled {
    pointer-events: none;
    background-color: #e9ecef;
    color: #6c757d;
}

.small-image {
    width: 600px;
    max-width: 100%; /* Ensures responsiveness */
}

@media (max-width: 768px) {
    .nav-link.dropdown-toggle {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
