import { mapActions, mapGetters } from "vuex";
import dynamicMapper from "../../common/dynamicMapper"

const actions = (is3d) => {
  const namespace = is3d ? "simulator3d" : "simulator";
  return mapActions(namespace, [
    "setGeometryList",
    "setSelectedTokenAction",
    "GeometryListRemove",
    "setCurrentMode",
    "setCurrentViewMode",
    "setFluxList",
    "OpenModalSettingsFlux",
    "setShowModalSettingsFlux"
  ]);
};

const getters = (is3d) => {
  const namespace = is3d ? "simulator3d" : "simulator";
  return mapGetters(namespace, [
    "GeometryList",
    "selectedToken",
    "mode",
    "SourcesList",
    "viewMode",
    "FluxList"
  ]);
};

const mapDynamicGetters = dynamicMapper(getters, 'getters');
const mapDynamicActions = dynamicMapper(actions, 'actions');

export default {
  mapDynamicGetters,
  mapDynamicActions
};
