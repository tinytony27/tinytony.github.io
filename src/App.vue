<template>
  <About/>
  <Profile/>
  <Works/>
  <Contact/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import About from './components/about/About.vue';
import Profile from './components/profile/Profile.vue';
import Works from './components/works/Works.vue';
import Contact from './components/contact/Contact.vue';

@Options({
  components: {
    About,
    Profile,
    Works,
    Contact
  },
})
export default class App extends Vue {}
</script>
