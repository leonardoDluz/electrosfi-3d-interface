<template>
  <span class="fill-height">
    <Loading :image="1" :loading="loading" />
    <div
      id="Drawing"
      class="Drawing"
      :class="loading ? 'fill-height' : 'simulator-container'"
    >
      <MobileAlert v-if="1 < 1"/>
      <NavbarDrawing v-if="!loading"/>
      <multipane layout="vertical" class="resizer-content" v-if="!loading">
        <div class="multipane-content left">
          <SideNavSimulator :is3d="true"/>
        </div >

        <multipane-resizer>
          <div class="multipane-content center">
            <ThreeDrawing/>
          </div>
        </multipane-resizer>

        <div class="multipane-content right">
          <RightNavSimulator :is3d="true"/>
        </div>

      </multipane>
    </div>
  </span>
</template>

<script>

import { Multipane, MultipaneResizer } from "vue-multipane" 

export default {
  name: "Simulator3d",
  components: {
    Loading: () => import("@/components/Loading"),
    NavbarDrawing: () => import("@/components/Navbar"),
    SideNavSimulator: () => import("@/components/SideNavSimulator"),
    RightNavSimulator: () => import("@/components/RightNavSimulator"),
    ThreeDrawing: () => import("@/components/ThreeDrawing"),
    multipane: Multipane,
    "multipane-resizer": MultipaneResizer,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
