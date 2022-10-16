<script setup lang="ts">
function nowAge(): number{
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), 7-1, 27);
  let age = today.getFullYear() - 1994;

  if(today < thisYearsBirthday){
      age--;
  }
  return age;
}
</script>

<template src="./ProfileView.html"></template>
