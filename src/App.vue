<template>
  <div id="app">
    <Header/>
    <Form/>
  </div>
</template>

<script>
import Header from './components/Header'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Header,
    Form
  }
}
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: url("'./assets/fonts/Poppins-Regular.ttf'");
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: linear-gradient(120deg, #642B73, #C6426E );
  min-height: 100vh;
  font-family: "Poppins";
}

#app {
  
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: white;
}
</style>
