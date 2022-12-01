<template>
    <VPopUp title="Detalhes do evento" positionContent="bottom center" :show-icon="false" :show-pop-up="open">
      <template #popup-body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          ipsum ipsam cupiditate dolorem quibusdam commodi fugit illo suscipit,
          est beatae? Similique suscipit voluptatem quo ratione quas hic quis
          molestiae officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          ipsum ipsam cupiditate dolorem quibusdam commodi fugit illo suscipit,
          est beatae? Similique suscipit voluptatem quo ratione quas hic quis
          molestiae officiis!
        </p>
      </template>
      <template #popup-footer>
        <!-- inser component button with label Cancelar -->
        <VButton label="Cancelar" />
      </template>
    </VPopUp>
</template>
<script lang="ts" setup>
import { VButton } from '@/components';
import VPopUp from '@/components/popUp/VPopUp.vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

</script>