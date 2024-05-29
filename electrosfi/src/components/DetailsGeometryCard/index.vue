<template>
  <v-card v-if="geometry" max-width="100%">
    <v-card-text>
      <p class="text-capitalize">
        <strong>{{ geometry.name }}</strong>
      </p>
      <div>
        <v-chip class="ma-1" small
          >Material: {{ geometry.materialTitle }}</v-chip
        >
        <v-chip class="ma-1" small
          >Refractive Index: {{ geometry.epsilon }}</v-chip
        >
        <v-chip class="ma-1" small>Position X: {{ geometry.x }}</v-chip>
        <v-chip class="ma-1" small>Position Y: {{ geometry.y }}</v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  namme: "DetailsGeometryCard",
  props: {
    geometry: { type: Object, default: null }
  }
};
</script>
