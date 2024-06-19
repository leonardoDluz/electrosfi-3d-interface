import api from "@/services/api";
import router from '@/router'

const updateState = (state) => {
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

  const params = {
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

export default updateState;