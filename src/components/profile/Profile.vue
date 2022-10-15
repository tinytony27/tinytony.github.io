<template src="./Profile.html"></template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

//import { Component, Vue } from 'vue-property-decorator';

@Options({})
export default class Profile extends Vue {
  get nowAge(){
    const today = new Date();
    const thisYearsBirthday = new Date(today.getFullYear(), 7-1, 27);
    let age = today.getFullYear() - 1994;

    if(today < thisYearsBirthday){
        age--;
    }
    return age;
  }
}
</script>
