<template>
  <ApiProvider>
    <Crowdloan />
  </ApiProvider>

  <modal-loading v-if="isLoading" />

  <transition name="fade">
    <alert-box v-if="showAlertMsg" :msg="alertMsg" :alert-type="alertType" />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Crowdloan from './pages/Crowdloan.vue';
import ApiProvider from './config/ApiProvider.vue';
import ModalLoading from './components/shared/ModalLoading.vue';
import AlertBox from './components/shared/AlertBox.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    Crowdloan,
    ApiProvider,
    ModalLoading,
    AlertBox
  },
  setup() {
    const store = useStore();

    const isLoading = computed(() => store.getters.isLoading);
    const showAlertMsg = computed(() => store.getters.showAlert.showAlertMsg);
    const alertMsg = computed(() => store.getters.showAlert.alertMsg);
    const alertType = computed(() => store.getters.showAlert.alertType);

    return {
      isLoading,
      showAlertMsg,
      alertMsg,
      alertType
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
