<template>
    <div class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-secondary text-white">
                    <h5 class="modal-title">Add Subnet</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <!-- Form for capturing network name -->
                    <form @submit.prevent="submitForm">
                        <div class="form-group row mt-4">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Network</label>
                            <div class="col-sm-10">
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
                                <div class="invalid-feedback" v-if="selectedNetworError"> Network is required.</div>
                            </div>
                        </div>
                        <div class="form-group row mt-4">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" id="networkName" class="form-control" v-model="subnetName"
                                    :class="{ 'is-invalid': subnetNameError }" />
                                <div class="invalid-feedback" v-if="subnetNameError"> Subnet name is required.</div>
                            </div>
                        </div>
                        <div class="modal-footer p-0 pt-2 mt-5">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        networkList: []
    },
    data() {
        return {
            subnetName: '',
            subnetNameError: false,
            selectedNetwork: null, 
            selectedNetworError: false,
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        networkOnSelect(option) {
            this.selectedNetwork = option;
        },
        submitForm() {
            // Check if the network name is empty
            if (!this.subnetName) {
                this.subnetNameError = true;
            }
            else if (!this.selectedNetwork) {
                this.selectedNetworError = true;
            } 
            else {
                this.subnetNameError = false;
                // Capture the form data and emit it back to the parent
                const formData = {
                    networkName: this.subnetName,
                };
                this.$emit('save', formData); // Emit the form data to parent

                // Optionally close the modal after submission
                this.closeModal();

                // You can now make an API call here or pass the data to the parent
                this.makeApiCall(formData);
            }
        },
        makeApiCall(data) {
            // Mock API call
            console.log('Making API call with:', data);

            // Example of using axios for API call
            // axios.post('/api/networks', data)
            //   .then(response => {
            //     console.log('Network added:', response);
            //   })
            //   .catch(error => {
            //     console.error('Error adding network:', error);
            //   });
        },
    },
};
</script>

<style scoped>
/* Optionally style the modal */
.modal.show {
    background-color: rgba(0, 0, 0, 0.5);
}
.nav-link.dropdown-toggle {
    color: rgb(0, 0, 0);
    padding: 8px 15px;
    border-radius: 4px;
    border: 1px solid rgb(232, 232, 232);
    transition: background-color 0.3s ease;
}

.nav-link.dropdown-toggle:hover {
    background-color: rgb(78, 78, 78);
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
</style>