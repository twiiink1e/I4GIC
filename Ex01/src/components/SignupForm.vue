<template>
  <div>
    <div class="container">
      <div class="log_in">
        <p style="font-size:25px;">Sign Up</p>
        <h4>Please fill this form below to sign up</h4>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <label for="username">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
        />
        <label for="firstname">First name</label>
        <input
          type="firstname"
          name="firstname"
          id="firstname"
          placeholder="First name"
        />
        <label for="lastname">Last name</label>
        <input
          type="lastname"
          name="lastname"
          id="lastname"
          placeholder="Last name"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create your Password"
        />
        <h5>
          By creating an account you agree to our
          <a href="http://#">Term & Privacy</a>.
        </h5>
        <button type="submit" id="btn_signup">Sign up</button>
      </div>
      <div style="margin: 10px 0 0 18vw"><a href="/">Log in instead</a>!</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 90vh;
}

.log_in {
  background-color: rgba(255, 255, 255, 0.8);
  color:black;
  width: 50%;
  padding: 1rem;
  border-radius: 2%;
  box-shadow: rgba(91, 99, 109, 0.582) 0px 0px 0px 6px;
}

.log_in > div {
  text-align: center;
}

.log_in h3 {
  color: #ecf3f7;
}

.log_in h4 {
  margin-bottom: 10px;
}

.log_in > label {
  color: rgb(0, 0, 0);
}

.log_in > input {
  background-color: #fafafa;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.log_in > input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}

#btn_signup {
  cursor: pointer;
  background-color: rgb(93, 189, 117);
  color: white;
  border-style: outset;
  border-color: #275a27;
  width: 6rem;
  font: sans-serif;
  text-shadow: none;
  height: 2rem;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
