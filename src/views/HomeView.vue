<template>
  <div class="home">
     <sliders/>
    <phones/>
    <popular/>
  </div>
</template>

<script>
import phones from '../components/PhonesComp.vue';
import sliders from '../components/slidersComp.vue';
import popular from '../components/PopCatComp.vue';
export default {
  name: 'HomeView',
  components: {
    phones,
    sliders,
    popular
  }
}
</script>
