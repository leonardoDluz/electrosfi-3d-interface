import api from "@/services/api";
import simulator3d from "@/services/simulator3d";
import router from '@/router'

const updateState2d = (state) => {
  if (!(location.href.split('/simulator/').length > 1)) return;
  state.sincronizado = false;
  var {
    title,
    description,
    coordinates,
    resolution,
    GeometryList,
    SourcesList,
    FluxList,
    until,
    scene_design,
    scene_simulation,
    author,
    default_material,
    plotOptions,
    productions,
    charts
  } = state;

  let params = {
    title,
    description,
    coordinates,
    _id: router.currentRoute.params.key,
    resolution,
    geometries: GeometryList,
    until,
    charts,
    sources: SourcesList,
    scene_design,
    flux: FluxList.map((content) => {
      return { ...content, "type_of_flux": content.type }
    }),
    scene_simulation,
    author,
    default_material,
    plotOptions,
    productions
  };
  api.patch(router.currentRoute.params.key, params).then(() => {
    state.sincronizado = true;
  });
}

const updateState3d = (state) => {
  if (!(location.href.split('/simulator3d/').length > 1)) return;
  state.sincronizado = false;

  var {
    title,
    author,
    description,
    GeometryList,
    SourcesList,
  } = state;

  const params = {
    title,
    author,
    description,
    _id: router.currentRoute.params.key,
    geometries: GeometryList,
    sources: SourcesList,
  }

  simulator3d.patch(router.currentRoute.params.key, params).then(() => {
    state.sincronizado = true;
  })
}

const updateState = (state) => {
  if (state.is3d) {
    updateState3d(state);
    return;
  }
  updateState2d(state);
}

export default updateState;