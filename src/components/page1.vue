<template>
  <div>
    <form @submit.prevent>
      <h1>SIGN IN Mohamed Adel</h1>
      <p style="color: darkgray">if you care registered user sign in now</p>
      <input type="text" placeholder="your e-mail" v-model="form.email" /><br />
      <input type="password" placeholder="your password" v-model="form.password" /><br />
      <a href="#" style="color: darkgray" class="so">forget password?</a><br />
      <button @click="login">sign in</button><br />
      <p style="color: darkgray">
        <a href="#" style="color: darkgray">Request access</a> to your clinic
      </p>
      <p style="color: skyblue">JOIN AS A CLINIC</p>
    </form>

    <p class="response" v-if="response">{{ response }}</p>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "page1",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      response: null,
      error: null,
    };
  },
  methods: {
    login() {
      axios
        .post("https://test-api.baredex.com/api/admin/login", this.form)
        .then((res) => {
          this.response = 'Welcome ya basha ' + res.data.data.user.name
        })
        .catch((error) => {
          this.error = JSON.stringify(error.response.data.message);
        });
    },
  },
};
</script>
<style>
body {
  background-color: azure;
}

.response {
  font-size: 30px;
  color: blue;
  font-weight: bold;
}

.error {
  font-size: 30px;
  color: tomato;
  font-weight: bold;
}

form {
  background-color: whitesmoke;
  height: 300px;
  width: 700px;
  margin-left: 300px;
  text-align: center;
}
form input {
  margin-bottom: 10px;
  border: 2px solid rgba(235, 229, 229, 0.884);
  border-radius: 5px;
  height: 20px;
  width: 400px;
  color: darkgray;
}

form button {
  width: 400px;
  height: 30px;
  margin-top: 10px;
  background-color: skyblue;
  color: snow;
  border: 0px solid#fff;
  border-radius: 6px;
}

form .so {
  margin-right: 270px;
}
</style>
