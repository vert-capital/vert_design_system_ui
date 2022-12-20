<template>
  <div class="v-dropdow">
    <div class="v-dropdow__input" @click="showOptions = !showOptions">
      <span v-if="showValue == placeholder">
        {{ showValue }}
      </span>
      <span v-else>
        <v-tag
          v-for="(selected, index) in showValue"
          :key="index"
          status="secondary"
          square
        >
          {{ selected.label }}
          <label class="icon--close" :for="name + '-' + selected.value"></label>
        </v-tag>
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
            type="checkbox"
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
import VTag from "@/components/tag/VTag.vue";

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
    valueOption.value.push(value);
  }
);

const showValue: any = computed(() => {
  if (valueOption.value.length == 0) {
    return props.placeholder;
  }

  const options: any[] = [];
  valueOption.value?.forEach((item: number) => {
    const find = props.options.find((element) => element.value == item);
    options.push(find);
  });
  return options;
});

const valueOption = ref(props.modelValue);
const showOptions = ref(false);

function selectChange(value: any): void {
  if (valueOption.value.includes(value)) {
    const index = valueOption.value.indexOf(value);
    valueOption.value.splice(index, 1);
  } else {
    valueOption.value.push(value);
  }

  emit("onChange", valueOption.value);
  emit("update:modelValue", valueOption.value);
}
</script>

<style src="./VMultiselect.scss" lang="scss"></style>
