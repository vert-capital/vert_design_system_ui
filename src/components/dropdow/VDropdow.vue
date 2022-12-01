<template>
  <div class="v-dropdow" :class="setTypeStyle">
    <div class="v-dropdow__input" @click="showOptions = !showOptions">
      <span v-if="!multiple || showValue == placeholder">
        {{ showValue }}
      </span>
      <span v-else>
        <v-tag v-for="selected in showValue" status="secondary" square>
          {{ selected.label }}
          <label class="icon--close" :for="name + '-' + selected.value"></label>
        </v-tag>
      </span>
      <div
        class="v-dropdow__input--arrow"
        :class="{ 'v-dropdow__input--arrow--open': showOptions }"
      ></div>
    </div>
    <div class="v-dropdow__options" v-show="showOptions">
      <ul>
        <li v-for="option in options">
          <input
            v-model="valueOption"
            name="option"
            :value="option.value"
            :id="name + '-' + option.value"
            :type="setMultiple"
            @change="selectChange($event)"
          />
          <label :for="name + '-' + option.value">{{ option.label }}</label>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="v-dropdow__fullscreen"
    v-show="showOptions"
    @click="showOptions = !showOptions"
  ></div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import VTag from "../tag/VTag.vue";

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
  multiple?: boolean;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  multiple: false,
  placeholder: "Selecione",
  modelValue: [],
  type: "1",
  name: "exemplo",
});

const emit = defineEmits<{
  (e: "onChange", valueOption: any): void;
  (e: "update:modelValue", valueOption: any): void;
}>();

const setMultiple = computed((): string =>
  props.multiple ? "checkbox" : "radio"
);

const showValue = computed(() => {
  console.log(valueOption.value);

  if (valueOption.value.length == 0) {
    return props.placeholder;
  }
  if (!props.multiple) {
    const option = props.options.find(
      (element) => element.value == valueOption.value
    );
    return option?.label;
  } else {
    let options: any[] = [];
    valueOption.value.forEach((item: number) => {
      const find = props.options.find((element) => element.value == item);
      options.push(find);
    });
    return options;
  }
  // console.log(props.options)
});

const valueOption = ref(props.modelValue);
const showOptions = ref(false);

function selectChange(): void {
  emit("onChange", valueOption.value);
  emit("update:modelValue", valueOption.value);
}

const setTypeStyle = computed((): string => {
  if (props.type == "2") {
    return "v-dropdow__style--2";
  }
  return "";
});
// https://codepen.io/elmahdim/pen/nmWyzE
</script>

<style src="./VDropdow.scss" lang="scss"></style>
