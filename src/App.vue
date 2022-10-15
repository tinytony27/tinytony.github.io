<template>
  <Header/>
  <About/>
  <Profile/>
  <Works/>
  <Contact/>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import About from './components/about/About.vue';
import Profile from './components/profile/Profile.vue';
import Works from './components/works/Works.vue';
import Contact from './components/contact/Contact.vue';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

@Options({
  components: {
    Header,
    About,
    Profile,
    Works,
    Contact,
    Footer
  },
})
export default class App extends Vue {}
</script>
