<template>
  <div class="v-select">
    <div class="v-select--label" v-if="label">
      <label :for="id">{{ label }}</label>
    </div>
    <div class="v-selec--content">
      <select
        :class="[
          { 'v-select--border': props.borderNone },
          `v-select--input v-select--size-${size}`,
        ]"
        :name="name"
        :id="id"
        :required="required"
        :disabled="disable"
        @change="selectChange($event)"
      >
        <option value="" v-if="placeholder">{{ placeholder }}</option>
        <option
          v-for="option in options"
          :value="option.value"
          :selected="option.value == selected"
          aria-checked="false"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>
<style src="./VSelect.scss" lang="scss"></style>
<script lang="ts" setup>
import { watch, ref } from "vue";

export interface ISelectOptions {
  value: any;
  label: string;
}

export interface Props {
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  options: Array<ISelectOptions>;
  required?: boolean;
  disable?: boolean;
  size?: string;
  modelValue?: string | number;
  borderNone?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "lg",
  borderNone: false,
  options: () => [],
  modelValue: "",
});

const emit = defineEmits<{
  (e: "onChange", selected: any): void;
  (e: "update:modelValue", selected: any): void;
}>();

const selected = ref<any>(props.modelValue);

watch(["modelValue"], (modelValue) => {
  if (modelValue !== selected.value) {
    selected.value = modelValue;
  }
});

function selectChange(event: any): void {
  selected.value = event.target.value;
  emit("onChange", selected.value);
  emit("update:modelValue", selected.value);
}
</script>
