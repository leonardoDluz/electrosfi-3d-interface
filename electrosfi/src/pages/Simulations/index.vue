<template>
  <v-container id="simulations_container" class="mt-10">
    <Loading :loading="simulations.length === 0" />
    <span v-if="!loading">
      <v-row v-if="simulations.length >= 1">
        <v-col>
          <p class="text-subtitle">Your Simulations</p>
        </v-col>
      </v-row>
      <v-row v-if="simulations.length < 1" justify="center">
        <v-col cols="4" class="text-center">
          <v-img src="/img/illustrations/empty.svg" class="mb-3"></v-img>
          <h2>This is empty</h2>
          <p>Create a new simulation</p>
        </v-col>
      </v-row>
      <div>
        <v-row>
          <v-col
            cols="12"
            v-for="simulation in simulations"
            :key="simulation.id"
          >
            <SimulationCard :simulation="simulation" />
          </v-col>
        </v-row>
      </div>
    </span>
  </v-container>
</template>

<script>
import api from "@/services/api.js";
import Swal from "sweetalert2";
import SimulationCard from "@/components/SimulationCard";

import { mapGetters } from "vuex";

import Loading from "@/components/Loading";

export default {
  name: "Simulations",
  components: {
    Loading,
    SimulationCard
  },
  data: () => ({
    simulations: [],
    editedIndex: null,
    dialog: false,
    loading: true,
    currentSimulation: "",
    selectedSimulationURL: "",
    shareModal: false,
    loadingDelete: false
  }),
  watch: {
    editedIndex: function() {
      this.dialog = !this.dialog;
    }
  },
  mounted: function() {
    this.getData();
    this.setPageInfo();
  },
  computed: {
    ...mapGetters("simulator", ["author"])
  },
  methods: {
    share: function(address) {
      this.selectedSimulationURL = address;
      this.shareModal = true;
    },
    setPageInfo: function() {
      document.title = "Your simulations - ElectrosFI";
      document
        .querySelector('meta[name="description"')
        ?.setAttribute(
          "content",
          "Simulate and edit photonic tools online - ElectrosFI"
        );
    },
    getData: async function() {
      try {
        const { data } = await api.get(`/author/${this.author}`);
        if (data.error) throw new Error(data.message);
        this.simulations = await data.data.reverse();
        this.loading = false;
      } catch (err) {
        Swal.fire({ title: "An error appears", text: err.message });
      }
    }
  }
};
</script>
<style lang="scss">
#loading {
  height: 100vh;
}
</style>
