<template>
    <div class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-secondary text-white">
                    <h5 class="modal-title">Add Network</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <!-- Form for capturing network name -->
                    <form @submit.prevent="submitForm">
                        <div class="form-group row  mt-4">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" id="networkName" class="form-control" v-model="networkName" :class="{ 'is-invalid': networkNameError }" />
                                <div class="invalid-feedback" v-if="networkNameError"> Network name is required.</div>
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
    },
    data() {
        return {
            networkName: '',
            networkNameError: false, // Validation state
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        submitForm() {
            // Check if the network name is empty
            if (!this.networkName) {
                this.networkNameError = true;
            } else {
                this.networkNameError = false;
                // Capture the form data and emit it back to the parent
                const formData = {
                    networkName: this.networkName,
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
</style>