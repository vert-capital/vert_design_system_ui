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
      @click-row="clickRowTable"
    >
      <template #item-url="{ url }"
        ><a :href="url" target="_blank">{{ url }}</a></template
      >
    </v-table>
    <v-pagination
      :count="pagination.count"
      :current-page="pagination.page"
      :size="pagination.size"
      @on-change-pagination="onChangePagination"
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
    <VPopUp title="Calendário de eventos" position-content="bottom center">
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
        <v-tab-header tab-to="tab1" :eixo="typeTab" actived
          >Exemplo 1</v-tab-header
        >
        <v-tab-header tab-to="tab2" :eixo="typeTab">
          <v-tag icon="alert" status="secondary" square>2</v-tag>
          Exemplo 2
        </v-tab-header>
      </template>
      <div>
        <v-tab-content :eixo="typeTab" content-id="tab1">
          <h2>Le po pul</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam laboriosam debitis, cupiditate dolores tenetur libero?
            Provident, dicta iste expedita animi dolorum, temporibus excepturi
            maxime, ea dolorem eveniet consequuntur rerum!
          </p>
        </v-tab-content>
        <v-tab-content :eixo="typeTab" content-id="tab2">
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
        v-model="testeSelect"
        border-none
        name="select_app"
        :options="selectOptions"
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
    <v-multiselect
      v-model="dropDownExemplo"
      :options="selectOptions"
      name="teste1"
    ></v-multiselect>
    <div style="width: 200px">
      <v-dropdown
        v-model="dropDownExemplo2"
        name="teste2"
        :options="selectOptions"
      ></v-dropdown>
    </div>
  </div>
  <br />
  <hr />
  <div class="section-calendar">
    <h4>CARD</h4>
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

  <hr />
  <br />
  <div class="section-calendar">
    <h4>Calendário de eventos</h4>
    <h3>Calendário reduzido (popUp)</h3>
    <v-calendar-button
      :events="events"
      @day-was-clicked="onHandleClickDay"
      @search-was-inputed="onHandleSearch"
      @event-was-clicked="onHandleEventClicked"
    >
    </v-calendar-button>
  </div>

  <hr />
  <br />
  <div v-for="(item, index) in aplication" :key="index">
    <v-event-card
      title="Obrigações - Pagamento de Juros"
      style="margin-top: 20px"
      subtitle="(3CRIBMG - 1)(#556 | 1 - Senior - CDI+%)"
      responsable="Frederico Quadros (Responsável), Douglas Queres e João Dias"
      size="small"
      :aplication="(item as any)"
    >
      <template #tag>
        <v-tag style="margin-bottom: 12px" status="helper">Tag helper</v-tag>
      </template>
    </v-event-card>
  </div>
  <br />
  <v-card type="shadow">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi
    voluptatibus quam consequatur, quae perspiciatis debitis quas molestias
    repudiandae, nesciunt adipisci vel harum iste, ullam rerum corporis tempora.
    Laborum, excepturi!
  </v-card>
  <div class="item--checkbox">
    <input
      type="checkbox"
      name="teste"
      id="teste-234"
      value="3"
      v-model="checkbox"
    />
    <label for="teste-234">TESTE</label>
  </div>

  <br />
  {{ checkbox }}
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { VTable, VButton, VPagination } from "./index";
import VTab from "./components/tab/VTab.vue";
import VTabContent from "./components/tab/VTabContent.vue";
import VTabHeader from "./components/tab/VTabHeader.vue";
import VSelect from "./components/form/select/VSelect.vue";
import VTag from "./components/tag/VTag.vue";
import type { IEvent } from "./utils/types/calendar";
import VPopUp from "./components/popUp/VPopUp.vue";
import VCard from "./components/card/VCard.vue";
import VDropdown from "./components/dropdown/VDropdown.vue";
import VCalendarButton from "./components/calendar/VCalendarButton.vue";
import VEventCard from "./components/eventCard/VEventCard.vue";
import VMultiselect from "./components/form/multiselect/VMultiselect.vue";

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
    VCard,
    VDropdown,
    VCalendarButton,
    VEventCard,
    VMultiselect,
  },

  data() {
    return {
      typeTab: "x",
      testeSelect: "",
      dropDownExemplo: [],
      dropDownExemplo2: [],
      checkbox: [],
      events: [
        {
          id: 1,
          title: "Obrigações",
          application: 1,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "Caio Arruda",
          emission: 1,
        },
        {
          id: 2,
          title: "Pagamento de Juros",
          application: 2,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "Márcio",
        },
        {
          id: 3,
          title: "Pagamento de Juros A",
          application: 3,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "Maria das Dores",
        },
        {
          id: 4,
          title: "Pagamento de Juros B",
          application: 4,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "João das Neves",
        },
        {
          id: 5,
          title: "Pagamento de Juros C",
          application: 5,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "João das Couves",
        },
        {
          id: 6,
          title: "Pagamento de Juros D",
          application: 6,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "João das Flores",
        },
        {
          id: 8,
          title: "Pagamento de Juros E",
          application: 7,
          time: { start: "2022-12-06 08:00", end: "2022-12-06 09:00" },
          event_data: "2022-12-06",
          responsable: "José das Couves",
        },
      ] as IEvent[],

      isLoading: false,
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

    const aplication = reactive([
      "obligations",
      "payment_events",
      "payments",
      "subscriptions",
      "patrimony_status",
      "patrimony",
      "series_status",
      "series_expiration",
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

    const calendarSelectedDate = ref(new Date());

    function reactToEvent(payload: any) {
      const date = new Date(payload.date);
      calendarSelectedDate.value = date;
    }

    function onClickButtonWarning() {
      alert("onClickButtonWarning");
    }

    function onClickButton() {
      alert("onClickButton");
    }

    function onHandleClickDay() {
      alert("onHandleClickDay");
    }

    function onHandleSearch(search: any) {
      alert("search:" + search);
    }

    function onHandleEventClicked(event: any) {
      alert("event:" + event);
    }

    return {
      pagination,
      selectOptions,
      pokemons,
      onChangePagination,
      clickRowTable,
      calendarSelectedDate,
      reactToEvent,
      onClickButtonWarning,
      onClickButton,
      onHandleClickDay,
      aplication,
      onHandleSearch,
      onHandleEventClicked,
    };
  },
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
.section-calendar {
  width: 400px;
  height: 600px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 400px;
}
</style>
