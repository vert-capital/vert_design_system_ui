<template>
  <div class="v-table">
    <div class="v-table__body-wrapper">
      <table class="responsive-table">
        <thead>
          <tr>

            <th v-for="col in headers" class="v-table__cell" :class="[{
              'sortable': col.sortable,
              'none': col.sortable && col.sortType === 'none',
              'desc': col.sortable && col.sortType === 'desc',
              'asc': col.sortable && col.sortType === 'asc',
            }]" @click.stop="(col.sortable && col.sortType) ? updateSortField(col.prop, col.sortType) : null">
              {{ col.label }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for=" (item, index) in data" :key="index">
            <tr class="v-table__row" @click="clickRow(item)">
              <td v-for="col in headers" class="v-table__cell">
                <slot v-if="slots[`item-${col.prop}`]" :name="`item-${col.prop}`" v-bind="item" />
                <template v-else>
                  {{ generateColumnContent(col.prop, item as any) }}
                </template>
              </td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>
  </div>
</template>
<style src="./VTable.scss" lang="scss">
</style>
<script lang="ts">
import { defineComponent, PropType, ref, useSlots } from 'vue';
import { generateColumnContent } from '../../utils';

export interface IHeader {
  label: string;
  personalizaded?: boolean;
  sortable?: boolean;
  prop: string;
  sortType?: 'none' | 'desc' | 'asc';
}
export type SortType = 'asc' | 'desc'

export default defineComponent({
  name: 'VTable',
  props: {
    data: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array as PropType<Array<IHeader>>,
      required: true,
    },
  },
  emits: ['click-row', 'update-sort-field'],
  setup(props, { emit }) {
    const slots = useSlots();
    const clickRow = (item: any) => {
      emit('click-row', item);
    };

    const mustSort = ref(false);
    const clientSortOptions = ref<any>({});

    const updateSortField = (newSortBy: string, oldSortType: SortType | 'none') => {
      console.log('newSortBy', newSortBy);
      console.log('oldSortType', oldSortType);
      let newSortType: SortType | null = null;
      if (oldSortType === 'none') {
        newSortType = 'asc';
      } else if (oldSortType === 'asc') {
        newSortType = 'desc';
      } else {
        newSortType = (mustSort.value) ? 'asc' : null;
      }

      if (newSortType === null) {
        clientSortOptions.value = null;
      } else {
        clientSortOptions.value = {
          sortBy: newSortBy,
          sortDesc: newSortType === 'desc',
        };
      }
      emit('update-sort-field', {
        sortType: newSortType,
        sortBy: newSortBy,
      });
    };

    return {
      slots,
      clickRow,
      generateColumnContent,
      updateSortField
    };
  }
});
</script>
