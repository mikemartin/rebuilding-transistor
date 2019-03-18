import Vue        from 'vue'
import Components from './components';

Vue.config.productionTip = false


window.vm     = new Vue({
	el: '#app',
  components: Components,

  methods: {
    selectPlan(plan) {
      this.$emit('select', plan)
    }
  },

  data() {
    return {
      schedule: 'monthly',
      selectedPlan: 'Starter',
    }
  },
});