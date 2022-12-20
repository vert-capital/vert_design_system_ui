<template>
  <div class="v-select">
    <div v-if="label" class="v-select--label">
      <label :for="id">{{ label }}</label>
    </div>
    <div class="v-selec--content">
      <select
        :id="id"
        :class="[
          { 'v-select--border': props.borderNone },
          `v-select--input v-select--size-${size}`,
        ]"
        :name="name"
        :required="required"
        :disabled="disable"
        @change="selectChange($event)"
      >
        <option v-if="placeholder" value="">{{ placeholder }}</option>
        <option
          v-for="(option, index) in options"
          :key="index"
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
  id: "select_id",
  name: "select_name",
  placeholder: "",
  label: "",
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

watch(
  () => props.modelValue,
  (modelValue) => {
    if (modelValue !== selected.value) {
      selected.value = modelValue;
    }
  }
);

function selectChange(event: any): void {
  selected.value = event.target.value;
  emit("onChange", selected.value);
  emit("update:modelValue", selected.value);
}
</script>
<style src="./VSelect.scss" lang="scss"></style>
