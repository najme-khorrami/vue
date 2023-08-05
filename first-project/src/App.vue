<template>
  <h1>hello</h1>
  <!-- <router-link to="/one">go to one</router-link>
  <router-link to="/two">go to two</router-link><br>
  <div>
    <router-view></router-view>
  </div> -->
  <div class="box">
    <comp-two></comp-two>
  </div>
  <hr>

  <div class="box">
    <h1>radio boxes</h1>
  <form @submit.prevent="sendInfo1">
    <label>
      <input type="radio" v-model="input" value="one"> one
    </label>
    <label>
      <input type="radio" v-model="input" value="two"> two
    </label>
    <label>
      <input type="radio" v-model="input" value="three"> three
    </label>
    <label>
      <input type="radio" v-model="input" value="four"> four
    </label>
    <input type="submit">
  </form>
  <h3>resut:</h3>
  <span>{{ result1 }}</span>
  </div>

  <div class="box">
    <h1>check boxes</h1>
  <form @submit.prevent="sendInfo2">
    <label>
      <input type="checkbox" v-model="likes" value="one"> one
    </label>
    <label>
      <input type="checkbox" v-model="likes" value="two"> two
    </label>
    <label>
      <input type="checkbox" v-model="likes" value="three"> three
    </label>
    <label>
      <input type="checkbox" v-model="likes" value="four"> four
    </label>
    <input type="submit">
  </form>
  <h3>resut:</h3>
  <span>{{ result2 }}</span>
  </div>

  <div class="box">
    <h1>dropDown list(select)</h1>
  <form @submit.prevent="sendInfo3">
    <select name="" id="" v-model="selected">
      <option disabled value="">choosw one</option>
      <option value="one">one</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
    <input type="submit">
  </form>
  <h3>resut:</h3>
  <span>{{ result3 }}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theComp: '',
        input: '',
        likes: [],
        selected: '',
        result1: 'no submitted yet',
        result2: 'no submitted yet',
        result3: 'no submitted yet'
      }
    },
    methods: {
      sendInfo1() {
        if(this.input){
          this.result1= this.input 
        }
      },
      sendInfo2() {
        if(this.likes){
          this.result2= this.likes 
        }
      },
      sendInfo3() {
        if(this.selected){
          this.result3= this.selected 
        }
      }
    }
  }
</script>

<style scoped>
  button {
    margin: 10px;
  }
  div {
    border: 2px dashed black;
    padding: 15px;
    margin: 15px;
  }
  a {
    background-color: lightsteelblue;
    border-radius: 5px;
    padding: 8px;
    color: #fff;
    text-decoration: none;
    margin: 20px;
  }
  .box{
    display: flex;
    flex-direction: column;
    border: 5px dashed black;
  }

</style>
