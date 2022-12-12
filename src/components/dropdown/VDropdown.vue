<template>
  <div class="v-dropdow" :class="setTypeStyle">
    <div class="v-dropdow__input" @click="showOptions = !showOptions">
      <span>
        {{ showValue }}
      </span>
      <div
        class="v-dropdow__input--arrow"
        :class="{ 'v-dropdow__input--arrow--open': showOptions }"
      ></div>
    </div>
    <div v-show="showOptions" class="v-dropdow__options">
      <ul>
        <li
          v-for="(option, i) in options"
          :key="i"
          :tabIndex="option.value == valueOption ? -1 : i"
        >
          <input
            :id="name + '-' + option.value"
            name="option"
            :value="option.value"
            type="radio"
            @change="selectChange(option.value)"
          />
          <label :for="name + '-' + option.value">{{ option.label }}</label>
        </li>
      </ul>
    </div>
  </div>
  <div
    v-show="showOptions"
    class="v-dropdow__fullscreen"
    @click="showOptions = !showOptions"
  ></div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

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
  modelValue?: any;
  borderNone?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  placeholder: "Selecione",
  modelValue: [],
  name: "exemplo",
  id: "exemplo",
});

const emit = defineEmits<{
  (e: "onChange", valueOption: any): void;
  (e: "update:modelValue", valueOption: any): void;
}>();

watch(
  () => props.modelValue,
  (value) => {
    valueOption.value = value;
  }
);

const showValue: any = computed(() => {
  if (valueOption.value.length == 0) {
    return props.placeholder;
  }
  const option = props.options.find(
    (element) => element.value == valueOption.value
  );
  return option?.label;
});

const valueOption = ref(props.modelValue);
const showOptions = ref(false);

function selectChange(value: any): void {
  emit("onChange", value);
  emit("update:modelValue", value);
}

const setTypeStyle = computed((): string => {
  return "v-dropdow__style--2";
});
</script>

<style src="./VDropdown.scss" lang="scss"></style>
