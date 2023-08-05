<template>
    <div>
        <h1>component one!</h1>
        <p>this is about component one.</p>
        <button @click="counter++">Add One</button>
        <p>{{ counter }}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  renderTracked(evt) {
    console.log("renderTracked: ",evt);
    alert("renderTracked");
  },
  renderTriggered(evt) {
    console.log("renderTriggered: ",evt)
    alert("renderTriggered");
  }
}
</script>

<style scoped>
    div {
        display: inline-block;
        background-color: lightgreen;
    }
</style>