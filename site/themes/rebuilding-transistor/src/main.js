import Vue        from 'vue'
import PlanCard from './components/PlanCard'
import ScheduleToggle from './components/ScheduleToggle'

Vue.config.productionTip = false


window.vm     = new Vue({
	el: '#app',
  components: {
    PlanCard,
    ScheduleToggle,
  },

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