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
      <v-button
        icon="info"
        status="primary"
        style_type="outline"
        @click="onClickButtonWarning"
        >Padrão out</v-button
      >
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
    <v-tab :eixo="typeTab" border-bottom>
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
        borderNone
        id="app_select"
        name="select_app"
        :options="selectOptions"
        v-model="testeSelect"
      >
      </v-select>
    </div>
    <form>
      <div style="width: 250px">
        <div class="form-group input-size-sm icon--search">
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      <v-button
        icon="info"
        status="primary"
        style_type="outline"
        @click="onClickButtonWarning"
        >Padrão</v-button
      >
    </form>
    <br />
    <hr />
    <h4>TAG</h4>
    <br />
    <div class="d-flex">
      <v-tag status="helper">Tag helper</v-tag>
      <v-tag status="warning">Tag warning</v-tag>
      <v-tag status="success">Tag success</v-tag>
      <v-tag status="primary">Tag primary</v-tag>
      <v-tag status="secondary">Tag secondary</v-tag>
    </div>
    <br />
    <div class="d-flex">
      <v-tag status="helper" type="outline">Tag helper</v-tag>
      <v-tag status="warning" type="outline">Tag warning</v-tag>
      <v-tag status="success" type="outline">Tag success</v-tag>
      <v-tag status="primary" type="outline">Tag primary</v-tag>
      <v-tag status="secondary" type="outline">Tag secondary</v-tag>
    </div>
    <br />
    <div class="d-flex">
      <v-tag status="helper" type="ice">Tag helper</v-tag>
      <v-tag status="warning" type="ice">Tag warning</v-tag>
      <v-tag status="success" type="ice">Tag success</v-tag>
      <v-tag status="primary" type="ice">Tag primary</v-tag>
      <v-tag status="secondary" type="ice">Tag secondary</v-tag>
    </div>
    <br />
    <div class="d-flex">
      <v-tag status="helper" square>Tag helper</v-tag>
      <v-tag status="warning" square>Tag warning</v-tag>
      <v-tag status="success" square>Tag success</v-tag>
      <v-tag status="primary" square>Tag primary</v-tag>
      <v-tag status="secondary" square>Tag secondary</v-tag>
    </div>
    <br />
    <v-dropdow
      :options="selectOptions"
      v-model="dropDowExemplo"
      name="teste1"
      multiple
    ></v-dropdow>
    <div style="width: 200px">
      <v-dropdow
        name="teste2"
        :options="selectOptions"
        v-model="dropDowExemplo2"
        type="2"
      ></v-dropdow>
    </div>
  </div>
  <br />
  <div>
    <h4>CALENDARIO</h4>
    <VCalendar
      :key="config.locale + config.week.nDays"
      :selected-date="new Date()"
      :config="config"
      :events="events"
      :is-loading="isLoading"
      @event-was-clicked="reactToEvent"
      @updated-period="updatedPeriod"
      @updated-mode="updatedPeriod"
      @event-was-resized="reactToEvent"
      @edit-event="editEvent"
      @delete-event="deleteEvent"
      @day-was-clicked="reactToEvent"
      @event-was-dragged="handleEventWasDragged"
      @interval-was-clicked="handleIntervalWasClicked"
    >
      <template #customCurrentTime>
        <div
          :style="{
            height: '3px',
            backgroundColor: 'cornflowerblue',
            position: 'relative',
          }"
        >
          <div
            :style="{
              position: 'absolute',
              left: '-7px',
              top: '-6px',
              height: '15px',
              width: '15px',
              backgroundColor: 'cornflowerblue',
              borderRadius: '50%',
            }"
          ></div>
        </div>
      </template>
    </VCalendar>

    <hr />

    <v-card type="shadow">
      <template #buttons>
        <v-button
          icon="info"
          status="primary"
          style_type="outline"
          @click="onClickButtonWarning"
          >Padrão</v-button
        >
      </template>
      <template #input>
        <input type="text" />
      </template>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint sunt
        suscipit molestiae nemo laudantium, facere itaque atque dolorum, quo
        quasi est. Possimus explicabo alias aspernatur eveniet, voluptas vel
        aperiam!
      </p>
    </v-card>
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
import VCalendar from "./components/calendar/VCalendar.vue";
import { IConfig, IEvent } from "./utils/types/calendar";
import VPopUp from "./components/popUp/VPopUp.vue";
import VCard from "./components/card/VCard.vue";
import VDropdow from "./components/dropdow/VDropdow.vue";

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
    VCalendar,
    VPopUp,
    VCard,
    VDropdow,
  },
  data() {
    return {
      typeTab: "x",
      testeSelect: "",
      dropDowExemplo: [],
      dropDowExemplo2: "",

      config: {
        week: {
          startsOn: "monday",
          scrollToHour: 8,
        },
        locale: "pt-BR",
        style: {
          fontFamily: `'Lato', 'sans-serif', 'Verdana`,
          colorSchemes: {
            meetings: {
              color: "#fff",
              backgroundColor: "#131313",
            },
            ladies: {
              color: "#fff",
              backgroundColor: "#ff4081",
            },
          },
        },
        dayBoundaries: {
          start: 7,
          end: 17,
        },
        defaultMode: "week",
        showCurrentTime: true,
        isSilent: true,
        dayIntervals: {
          height: 50,
          length: 30,
          displayClickableInterval: true,
        },
      } as IConfig,
      events: [] as IEvent[],

      layout: "none",
      isLoading: false,
      eventDialogForm: {
        title: "",
        id: "",
      },
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
        value: 1,
        label: "Janeiro",
      },
      {
        value: 2,
        label: "Fevereiro",
      },
      {
        value: 3,
        label: "Março",
      },
      {
        value: 4,
        label: "Abril",
      },
      {
        value: 5,
        label: "Maio",
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

    reactToEvent(payload: any) {
      console.log(payload);
    },

    updatedPeriod(e) {
      console.log("updated period");
      console.log(e);
    },

    triggerLoadAnimations() {
      this.isLoading = !this.isLoading;

      setTimeout(() => this.triggerLoadAnimations(), 5000);
    },

    editEvent(payload: string) {
      console.log("editEvent%s: ", payload);
    },

    deleteEvent(payload: string) {
      console.log("deleteEvent%s: ", payload);
    },

    handleEventWasDragged(e) {
      console.log("event was dragged");
      console.log(e);
    },

    handleIntervalWasClicked(e) {
      console.log("interval was clicked");
      console.log(e);
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
