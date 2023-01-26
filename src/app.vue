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
        style-type="shadow"
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
        style-type="outline"
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
    <v-button @click="testeActiveTab">active tab 2</v-button>
    <v-tab
      v-model="currentTab"
      :eixo="typeTab"
      border-bottom
      @change-tab="onChangeTab"
    >
      <template #header="slotProps">
        <v-tab-header
          tab-to="tab1"
          :eixo="typeTab"
          :model-value="slotProps.activeTab"
          @change-tab="slotProps.changeTab"
          >Exemplo 1</v-tab-header
        >
        <v-tab-header
          tab-to="tab2"
          :eixo="typeTab"
          :model-value="slotProps.activeTab"
          @change-tab="slotProps.changeTab"
        >
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
        stype-type="outline"
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
  <div>
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
  <div style="margin-left: 30%">
    <h4>Calendário de eventos</h4>
    <h3>Calendário reduzido (popUp)</h3>
    <v-calendar-button
      :url="`http://127.0.0.1:8081/event-central/event/`"
      authorization="JWT null"
      :event-class="Event"
      @day-was-clicked="onHandleClickDay"
      @search-was-inputed="onHandleSearch"
      @event-was-clicked="onHandleEventClicked"
      urlEvents="http://127.0.0.1:8081"
    >
    </v-calendar-button>
  </div>

  <hr />
  <br />
  <div
    v-for="(item, index) in eventsTypes"
    :key="index"
    style="max-width: 800px; margin-bottom: 0.5rem"
  >
    <v-event-card
      title="Obrigações - 3CRIBMG - 1"
      subtitle="(3CRIBMG - 1)(#556 | 1 - Senior - CDI+%)"
      responsable="Frederico Quadros (Responsável), Douglas Queres e João Dias"
      size="default"
      color="#3da5a5"
      no-wrap
    >
      <template #tag>
        <v-tag style="margin-bottom: 12px" status="helper">Tag helper</v-tag>
      </template>
    </v-event-card>
  </div>
  <div v-for="(item, index) in eventsTypes" :key="index" style="width: 200px">
    <v-event-card
      title="Obrigações - 3CRIBMG - 1"
      subtitle="(3CRIBMG - 1)(#556 | 1 - Senior - CDI+%)"
      responsable="Frederico Quadros (Responsável), Douglas Queres e João Dias"
      size="small"
    >
    </v-event-card>
  </div>
  <div v-for="(item, index) in eventsTypes" :key="index" style="width: 100px">
    <v-event-card
      title="Obrigações - 3CRIBMG - 1"
      subtitle="(3CRIBMG - 1)(#556 | 1 - Senior - CDI+%)"
      responsable="Frederico Quadros (Responsável), Douglas Queres e João Dias"
      size="very-small"
    >
    </v-event-card>
  </div>
  <br />
  <v-card type="shadow" border-size="sm">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi
    voluptatibus quam consequatur, quae perspiciatis debitis quas molestias
    repudiandae, nesciunt adipisci vel harum iste, ullam rerum corporis tempora.
    Laborum, excepturi!
  </v-card>
  <div class="item--checkbox">
    <input
      id="teste-234"
      v-model="checkbox"
      type="checkbox"
      name="teste"
      value="3"
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
import { eventTypes, IEventCard } from "./utils/types/calendar";
import VPopUp from "./components/popUp/VPopUp.vue";
import VCard from "./components/card/VCard.vue";
import VDropdown from "./components/dropdown/VDropdown.vue";
import VCalendarButton from "./components/calendar/VCalendarButton.vue";
import VEventCard from "./components/eventCard/VEventCard.vue";
import VMultiselect from "./components/form/multiselect/VMultiselect.vue";
import { Event } from "./utils/helpers/Event";

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

  setup() {
    const pokemons = ref({ count: 0, next: "", previous: "", results: [] });
    const currentTab = ref("tab1");
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

    const eventsTypes = ref<eventTypes[]>([
      "obrigacoes",
      "eventos_pagamento",
      "integralizacoes",
      "subscricoes",
      "atualizacao_status_patrimonios",
      "marcos_patrimonios",
      "vencimento_series",
      "rating",
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
      if (res) {
        const pokemons = await res.json();
        return pokemons;
      }
      return [];
    };

    async function updateDataPokemons(data = { offset: 0, limit: 5 }) {
      pokemons.value = await getPokemons(data);
      pagination.count = pokemons.value?.count;
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
      console.log("onHandleClickDay");
    }

    function onHandleSearch(search: any) {
      console.log("search:" + search);
    }

    function onHandleEventClicked(event: any) {
      console.log("event:" + event);
    }

    function onChangeTab(tab: string) {
      console.log("tab:" + tab);
      console.log("currentTab:" + currentTab.value);
    }

    function testeActiveTab() {
      currentTab.value = "tab2";
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
      eventsTypes,
      onHandleSearch,
      onHandleEventClicked,
      onChangeTab,
      currentTab,
      testeActiveTab,
    };
  },

  data() {
    return {
      typeTab: "x",
      testeSelect: "",
      dropDownExemplo: [],
      dropDownExemplo2: [],
      checkbox: [],
      Event,
      events: [
        {
          title: "Vencimento de séries - culpa est",
          subtitle: "(culpa officia - 10) (#19.15 | 2 - eiusmod enim - cra)",
          responsable: "Cook Herrera(Responsável), Brady Shaw",
          event_data: "2022-12-13",
          event_type: "integralizacoes",
        },
        {
          title: "Obrigações - dolore cupidatat",
          subtitle:
            "(proident consectetur - 2) (#48.63 | 9 - aute ullamco - cri)",
          responsable: "Espinoza Norris(Responsável), Alyson Hawkins",
          event_data: "2022-12-25",
          event_type: "vencimento_series",
        },
        {
          title: "Obrigações - ullamco exercitation",
          subtitle: "(consequat aute - 8) (#88.76 | 7 - labore laborum - cra)",
          responsable: "Boyle Love(Responsável), Melba Whitney",
          event_data: "2022-12-22",
          event_type: "vencimento_series",
        },
        {
          title: "Vencimento de séries - laborum cupidatat",
          subtitle: "(sit consequat - 0) (#65.31 | 8 - in pariatur - cra)",
          responsable: "Kathie Graves(Responsável), Evans Mcconnell",
          event_data: "2022-11-30",
          event_type: "eventos_pagamento",
        },
        {
          title: "Integralizaçao - ullamco consectetur",
          subtitle: "(ullamco sint - 9) (#28.51 | 5 - officia nisi - cra)",
          responsable: "Higgins Cash(Responsável), Audrey Chase",
          event_data: "2022-12-03",
          event_type: "atualizacao_status_patrimonios",
        },
        {
          title: "Integralizaçao - eiusmod duis",
          subtitle: "(aliquip aliquip - 2) (#58.99 | 2 - ex ullamco - cra)",
          responsable: "Little Pugh(Responsável), Jeanette Guzman",
          event_data: "2022-12-27",
          event_type: "vencimento_series",
        },
        {
          title: "Integralizaçao - esse ad",
          subtitle:
            "(labore nulla - 9) (#67.49 | 1 - reprehenderit ipsum - cra)",
          responsable: "Cummings Townsend(Responsável), Austin Rosa",
          event_data: "2022-12-08",
          event_type: "marcos_patrimonios",
        },
        {
          title: "Atualização de status do patrimônio - incididunt laborum",
          subtitle: "(id officia - 5) (#41.03 | 1 - laboris elit - cra)",
          responsable: "Klein Bell(Responsável), Therese Adams",
          event_data: "2022-12-08",
          event_type: "obrigacoes",
        },
        {
          title: "Obrigações - dolor qui",
          subtitle: "(ex ad - 8) (#96.02 | 7 - nulla anim - cra)",
          responsable: "Baker Mayer(Responsável), Carson Brooks",
          event_data: "2022-12-17",
          event_type: "rating",
        },
        {
          title: "Rating - sunt eu",
          subtitle: "(fugiat ullamco - 8) (#54.68 | 5 - voluptate sit - cri)",
          responsable: "Deana Drake(Responsável), Lizzie Rosario",
          event_data: "2022-12-17",
          event_type: "marcos_patrimonios",
        },
        {
          title: "Vencimento de séries - anim aliqua",
          subtitle: "(irure in - 0) (#86.39 | 5 - ipsum est - cra)",
          responsable: "Lee Hayes(Responsável), James Hess",
          event_data: "2022-12-24",
          event_type: "integralizacoes",
        },
        {
          title: "Subscrição - eu proident",
          subtitle: "(voluptate velit - 0) (#22.18 | 9 - elit et - debenture)",
          responsable: "Garrison Hill(Responsável), Stout Whitfield",
          event_data: "2022-12-22",
          event_type: "atualizacao_status_patrimonios",
        },
        {
          title: "Eventos de pagamento - anim laborum",
          subtitle: "(laborum enim - 1) (#63.12 | 2 - ut laborum - cri)",
          responsable: "Puckett Kirk(Responsável), Hull Acevedo",
          event_data: "2022-12-12",
          event_type: "marcos_patrimonios",
        },
        {
          title: "Integralizaçao - consequat consectetur",
          subtitle: "(aliqua officia - 2) (#95.51 | 5 - ut Lorem - cri)",
          responsable: "Nichole Peck(Responsável), Cantu Ayers",
          event_data: "2022-12-02",
          event_type: "subscricoes",
        },
        {
          title: "Marcos do patrimônio - eu irure",
          subtitle: "(nisi do - 8) (#84.61 | 3 - labore esse - cra)",
          responsable: "Keith Winters(Responsável), Colleen Bradshaw",
          event_data: "2022-12-14",
          event_type: "subscricoes",
        },
        {
          title: "Eventos de pagamento - consequat veniam",
          subtitle: "(laboris laboris - 9) (#95.83 | 3 - ex nulla - cra)",
          responsable: "Dana Mcgee(Responsável), Lynn Jackson",
          event_data: "2022-12-20",
          event_type: "subscricoes",
        },
        {
          title: "Vencimento de séries - dolor sint",
          subtitle: "(ut magna - 3) (#2.38 | 4 - magna duis - cri)",
          responsable: "Brennan Duffy(Responsável), Mavis Anthony",
          event_data: "2022-12-06",
          event_type: "atualizacao_status_patrimonios",
        },
        {
          title: "Marcos do patrimônio - reprehenderit nisi",
          subtitle: "(mollit anim - 6) (#38.68 | 8 - cillum irure - cri)",
          responsable: "Joyner Foster(Responsável), Clark Mooney",
          event_data: "2022-12-24",
          event_type: "atualizacao_status_patrimonios",
        },
        {
          title: "Rating - laboris ad 1",
          subtitle: "(eiusmod ea - 4) (#9.15 | 3 - nisi eiusmod - debenture)",
          responsable: "Jean Warner(Responsável), Ingram Nielsen",
          event_data: "2022-12-30",
          event_type: "obrigacoes",
        },
      ] as IEventCard[],

      isLoading: false,
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
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 400px;
}
</style>
