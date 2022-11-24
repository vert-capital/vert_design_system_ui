<template>
  <div style="width: 80%; margin: 0 auto">
    <h1>COMPONENTES</h1>
    <hr />
    <h4>TABELA E PAGINAÇÃO</h4>
    <br />
    <v-table
      :data="pokemons.results"
      :headers="[
        { label: 'Nome', prop: 'name', sortable: true, sortType: 'asc' },
        { prop: 'url', label: 'Link', personalizaded: true },
      ]"
      @clickRow="clickRowTable"
    >
      <template #item-url="{ url }"
        ><a :href="url" target="_blank">{{ url }}</a></template
      >
    </v-table>
    <v-pagination
      :count="pagination.count"
      :currentPage="pagination.page"
      :size="pagination.size"
      @onChangePagination="onChangePagination"
    >
    </v-pagination>
    <hr />
    <h4>BOTÕES</h4>
    <br />
    <div class="d-flex">
      <v-button
        icon="close"
        style_type="shadow"
        status="helper"
        @click="onClickButton"
        >Erro: 402 favor falar com desenvolvedor
      </v-button>
      <v-button icon="alert" status="warning" @click="onClickButtonWarning"
        >Aviso</v-button
      >
      <v-button icon="check" status="success" disabled>Sucesso</v-button>
      <v-button icon="info" status="primary">Padrão</v-button>
    </div>
    <br />
    <VPopUp title="Calendário de eventos" positionContent="bottom center">
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
    </VPopUp>

    <hr />
    <h4>TAB</h4>
    <br />
    <v-tab :eixo="typeTab">
      <template #header>
        <v-tab-header tabTo="tab1" :eixo="typeTab" actived
          >Exemplo 1</v-tab-header
        >
        <v-tab-header tabTo="tab2" :eixo="typeTab">
          <v-tag icon="alert" status="secondary" square>2</v-tag>
          Exemplo 2
        </v-tab-header>
      </template>
      <div>
        <v-tab-content :eixo="typeTab" contentId="tab1">
          <h2>Le po pul</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam laboriosam debitis, cupiditate dolores tenetur libero?
            Provident, dicta iste expedita animi dolorum, temporibus excepturi
            maxime, ea dolorem eveniet consequuntur rerum!
          </p>
        </v-tab-content>
        <v-tab-content :eixo="typeTab" contentId="tab2">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint
            sunt suscipit molestiae nemo laudantium, facere itaque atque
            dolorum, quo quasi est. Possimus explicabo alias aspernatur eveniet,
            voluptas vel aperiam!
          </p>
        </v-tab-content>
      </div>
    </v-tab>
    <br />
    <hr />
    <h4>SELECT</h4>
    <br />
    <div>
      <v-select
        id="app_select"
        name="select_app"
        :options="selectOptions"
        v-model="testeSelect"
      >
      </v-select>
    </div>
    <form>
      <input type="text" />
      <v-button
        icon="info"
        status="primary"
        style_type="outline"
        @click="onClickButtonWarning"
        >Padrão</v-button
      >
    </form>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { VTable, VButton, VPagination } from "./index";
import VTab from "./components/tab/VTab.vue";
import VTabContent from "./components/tab/VTabContent.vue";
import VTabHeader from "./components/tab/VTabHeader.vue";
import VSelect from "./components/form/select/VSelect.vue";
import VTag from "./components/tag/VTag.vue";
import VPopUp from "./components/popUp/VPopUp.vue";

export default defineComponent({
  name: "App",
  components: {
    VTable,
    VButton,
    VTab,
    VTabContent,
    VTabHeader,
    VPagination,
    VSelect,
    VTag,
    VPopUp,
  },
  data() {
    return {
      typeTab: "x",
      testeSelect: "",
    };
  },
  setup() {
    const pokemons = ref({ count: 0, next: "", previous: "", results: [] });

    const pagination = reactive({
      count: 0,
      page: 1,
      size: 5,
    });

    const selectOptions = reactive([
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ]);

    function onChangePagination(data: any) {
      updateDataPokemons({
        offset: Number(data.page_size) * Number(data.page),
        limit: data.page_size,
      });
    }

    const getPokemons = async (data: any) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${data.offset}&limit=${data.limit}`
      );
      const pokemons = await res.json();
      return pokemons;
    };

    async function updateDataPokemons(data = { offset: 0, limit: 5 }) {
      pokemons.value = await getPokemons(data);
      pagination.count = pokemons.value.count;
    }

    onMounted(async () => {
      updateDataPokemons();
    });

    function clickRowTable(row: any) {
      console.log(row);
      alert("click na linha: " + row.name);
    }

    return {
      pagination,
      selectOptions,
      pokemons,
      onChangePagination,
      clickRowTable,
    };
  },
  methods: {
    onClickButton() {
      alert("Erro: 402 favor falar com desenvolvedor");
    },
    onClickButtonWarning() {
      alert("Aviso");
    },
  },
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
