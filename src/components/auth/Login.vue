<template>

    <div class="login container">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center black-text">
                Login
            </h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email"/>
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password"/>
            </div>
            <p v-if="feedback" class="center red-text">{{ feedback }}</p>
            <div class="field center">
                <button class="btn black">Login</button>
            </div>
        </form>

        </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login() {
            if(this.email && this.password) {
                this.feedback = null
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    this.$router.push({ name: 'GMap' })
                })
                .catch(err =>
                {
                    this.feedback = err.message
                })
            } else {
                this.feedback = 'Please fill in both fields'
            }
        }
    }

}
</script>

<style>

body{
 background-image: url('~@/assets/map.jpg');
}

.login {
    max-width: 400px;
    margin-top: 60px;
}
.login h2 {
    font-size: 2.4em;
}
.login .field {
    margin-bottom: 16px;
}
</style>
