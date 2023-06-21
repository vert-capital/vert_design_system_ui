<template>
  <div v-if="showLoadingAnimation" class="v-loading">
    <div class="v-loading__container">
      <div :class="`lds-${loadingType}`">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <div v-if="showText" class="wainting">
    <span>{{ waitingText }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  showLoadingAnimation: {
    type: Boolean,
    default: true,
  },
  showText: {
    type: Boolean,
    default: true,
  },
  waitingText: {
    type: String,
    default: "Carregando...",
  },
  loadingType: {
    type: String,
    default: "ring",
  },
});
</script>
<style lang="scss">
.wainting {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: $brand-color-primary-pure;
}
.v-loading {
  width: 100%;
  margin: auto;
  transition: color 0.5s ease-in-out;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;

  &__container {
    display: inline-block;

    span {
      font-size: 1rem;
      font-weight: bold;
      color: $brand-color-primary-pure;
      margin-left: 1rem;
    }
  }
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.5rem;
  border: 4px solid $brand-color-primary-pure;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $brand-color-primary-pure transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: $brand-color-primary-pure;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
