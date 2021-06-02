const app = Vue.createApp({
    data() {
        return {
            inputOne: '',
            inputTwo: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello from the Vue app!');
        },
        registerInputOne(event) {
            this.inputOne = event.target.value;
        },
        registerInputTwo(event) {
            this.inputTwo = event.target.value;
        }
    }
});

app.mount('#assignment');