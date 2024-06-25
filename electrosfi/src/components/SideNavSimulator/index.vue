<template>
  <div id="side-nav-simulator" class="theme-background theme-text-color--text">
    <!-- <div > -->
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab
        href="#tab-1"
        :class="viewMode === 'geometries' ? 'active' : ''"
        @click="setCurrentViewMode('geometries')"
      >
        Geometry
      </v-tab>
      <v-tab
        href="#tab-2"
        :class="viewMode === 'sources' ? 'active' : ''"
        @click="setCurrentViewMode('sources')"
      >
        Sources
      </v-tab>
      <v-tab
        href="#tab-3"
        :class="viewMode === 'flux' ? 'active' : ''"
        @click="setCurrentViewMode('flux')"
      >
        Output
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <template>
          <v-simple-table height="500">
            <template v-slot:default>
              <draggable v-model="geometryListDraggableContent" tag="tbody">
                <tr
                  v-for="element in geometryListDraggableContent"
                  :key="element.token"
                  :class="element.token == selectedToken ? 'active' : ''"
                  @click="setSelectedTokenAction(element.token)"
                >
                  <td>{{ element.name }}</td>
                  <td>
                    <v-btn icon link @click="GeometryListRemove(element.token)">
                      <v-icon small> mdi-delete </v-icon>
                    </v-btn>
                    <v-btn icon link>
                      <v-icon small> mdi-pencil </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </draggable>
            </template>
          </v-simple-table>
        </template>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <template>
          <v-simple-table height="500">
            <template v-slot:default>
              <draggable v-model="sourcesListDraggableContent" tag="tbody">
                <tr
                  v-for="element in sourcesListDraggableContent"
                  :key="element.token"
                  :class="element.token == selectedToken ? 'active' : ''"
                  @click="setSelectedTokenAction(element.token)"
                >
                  <td>{{ element.name }}</td>
                  <td>
                    <v-btn icon link @click="GeometryListRemove(element.token)">
                      <v-icon small> mdi-delete </v-icon>
                    </v-btn>
                    <v-btn icon link>
                      <v-icon small> mdi-pencil </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </draggable>
            </template>
          </v-simple-table>
        </template>
      </v-tab-item>

      <v-tab-item value="tab-3">
        <template>
          <v-simple-table height="500">
            <template v-slot:default>
              <draggable v-model="fluxListDraggableContent" tag="tbody">
                <tr
                  v-for="element in fluxListDraggableContent"
                  :key="element.token"
                  :class="element.token == selectedToken ? 'active' : ''"
                  @click="setSelectedTokenAction(element.token)"
                >
                  <td>{{ element.name }}</td>
                  <td>
                    <v-btn icon link @click="GeometryListRemove(element.token)">
                      <v-icon small> mdi-delete </v-icon>
                    </v-btn>
                    <v-btn icon link>
                      <v-icon small> mdi-pencil </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </draggable>
            </template>
          </v-simple-table>
        </template>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import draggable from "vuedraggable";
// import { mapGetters, mapActions } from "vuex";
import loadStore from "./loadStore";

export default {
  name: "SideNavSimulator",
  components: {
    draggable
  },
  data: () => ({
    width: 300,
    tab: null
  }),
  props: {
    is3d: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    mode: function() {
      if (this.mode === "create") {
        this.setCurrentViewMode("geometries");
        this.tab = "tab-1";
      } else if (this.mode === "sources") {
        this.setCurrentViewMode("sources");
        this.tab = "tab-2";
      } else if (this.mode === "flux") {
        this.setCurrentViewMode("flux");
        this.tab = "tab-3";
      }
    }
  },
  created() {
    // const actions = loadStore.actions(this.is3d);
    // const getters = loadStore.getters(this.is3d);

    // Object.assign(this.$options.methods, actions)
    // Object.assign(this.$options.computed, getters)

    console.log({
      methods: this.$options.methods, 
      computed: this.$options.computed
    });
  },
  mounted() {
    console.log({
      GeometryList: this.GeometryList 
    }); 
  },
  methods: {
    // ...mapActions("simulator3d", [
    //   "setGeometryList",
    //   "setSelectedTokenAction",
    //   "GeometryListRemove",
    //   "setCurrentMode",
    //   "setCurrentViewMode",
    //   "setFluxList",
    //   "OpenModalSettingsFlux",
    //   "setShowModalSettingsFlux"
    // ]) ,
    ...loadStore.mapDynamicActions(),
    onResize: function(width) {
      this.width = width;
    }
  },
  computed: {
    // ...mapGetters("simulator3d", [
    //   "GeometryList",
    //   "selectedToken",
    //   "mode",
    //   "SourcesList",
    //   "viewMode",
    //   "FluxList"
    // ]),
    ...loadStore.mapDynamicGetters(),

    sourcesListDraggableContent: {
      get() {
        return Object.entries(this.SourcesList)
          .reverse()
          .map(entry => entry[1]);
      },
      set(val) {
        this.setSourcesList(val.reverse());
      }
    },
    fluxListDraggableContent: {
      get() {
        return Object.entries(this.FluxList)
          .reverse()
          .map(entry => entry[1]);
      },
      set(val) {
        this.setFluxList(val.reverse());
      }
    },
    geometryListDraggableContent: {
      get() {
        return Object.entries(this.GeometryList)
          .reverse()
          .map(entry => entry[1]);
      },
      set(value) {
        this.setGeometryList(value.reverse());
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "./styles.scss";
</style>
