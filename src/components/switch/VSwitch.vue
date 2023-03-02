<template>
  <div class="v-switch" :class="{ active: modelValue }">
    <label class="switch">
      <input type="checkbox" @click="toggleCheckbox" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const status = ref(props.modelValue);

const toggleCheckbox = () => {
  status.value = !status.value;
  emit("update:modelValue", status.value);
};
</script>

<style src="./VSwitch.scss" lang="scss" scoped />
