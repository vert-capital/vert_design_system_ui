<template>
  <div class="skeleton" v-if="isLoading">
    <div class="skeleton-left">
      <div class="line h14"></div>
      <div class="line h10 w50"></div>
      <div class="line h10 w75"></div>
    </div>
  </div>
  <div class="event-card" @click="handleClicked" v-else>
    <div class="event-status" :style="`border-color: ${color};`">
      <div class="event-body" :class="[`event-body--${size}`]">
        <slot v-if="size === 'default'" name="tag"></slot>
        <p class="break-ellipsis event-body--title break-ellipsis--title">
          {{ title }}
        </p>

        <p
          v-if="subtitle != '' && size !== 'very-small'"
          class="break-ellipsis break-ellipsis--subtitle"
        >
          {{ subtitle }}
        </p>
        <p v-if="size === 'default' && responsable != ''">
          {{ responsable }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    default: "Título do evento",
  },
  subtitle: {
    type: String,
    default: "",
  },
  responsable: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "default",
  },
  status: {
    type: String,
    default: "pending",
  },
  color: {
    type: String,
    default: "inerent",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["on-clicked"]);

function handleClicked() {
  emit("on-clicked");
}
</script>

<style src="./VEventCard.scss" lang="scss" />
