export default {
    sincronizado: false,
    title: "Untitled Simulation",
    author: "fulanodeTal",
    errors: [],
    resolution: 10,
    id: '',
    description: "Untitled simulation description",
    scene_design: "",
    scene_simulation: "",
    movie: "",
    view_simulation: false,
    loading_simulation: false,
    until: 200,
    is3d: true,
    GeometryList: [
        {
            class: "geometry",
            name: "block 1",
            token:"2a09aaf31f864e3874442aeb53a513a8",
            fill: 0x00ff00,
            shape: "block",
            width: 10,
            height: 10,
            depth: 4,
            x: 10,
            y: 0,
            z: 0
          },
          {
            class: "geometry",
            name: "triangle 1",
            token:"2a09aaf31f864e3874442aeb53a513a9",
            fill: 0x00ff00,
            shape: "triangle",
            width: 5,
            height: 5,
            depth: 2.5,
            x: -4,
            y: 4,
            z: 0
          },
          {
            class: "geometry",
            name: "circle 1",
            token:"2a09aaf31f864e3874442aeb53a513a7",
            fill: 0x00ff00,
            shape: "circle",
            radius: 4,
            x: -3,
            y: -3,
            z: 0
          },
    ],
    SourcesList: [],
    FluxList: [],
    productions: [],
    charts: [],
    showError: false,
    errorMessage: "",
    showModalSettingsFlux: false,
    pml: {
        thickness: 1.0
    },
    dimensions: {
        width: 400,
        height: 400,
        relationship: {
            x: 25,
            y: 25,
            z: 25
        }
    },
    coordinates: {
        x: 16,
        y: 16,
        z: 0
    },
    default_material: 1,
    cell: {
        fill: '#ffffff',
        epsilon: 1,
        material_id: 0,
        materialTitle: 'Default Material',
        materialDescription: 'This is the default material'
    },
    epsilon: 1,
    frequencia: 12,
    wavelength: 2 * 11 ** 0.5,
    width: 20,
    ShowModalComplete: false,
    userMaterials: [],
    drawing: false,
    viewMode: "geometries",
    scaleBy: 1.15,
    currentScale: 1,
    konvaStage: {},
    gridVisible: false,
    materialForm: false,
    showMiniCanvas: false,
    configKonva: {
        width: window.innerWidth,
        height: window.innerHeight,
        fill: "#fff",
        left: 0,
        top: 0,
        draggable: false
    },
    currentGeometry: {
        Geometry: {
            height: 0,
            width: 0,
            epsilon: 12,
        },
    },
    larguraSidenav: "",
    alturaNav: "",
    mode: "create",
    shape: "block",
    zoomAction: "In",
    color: "#000",
    selectedToken: "",
    selectedSourceToken: "",
    selectedInsideToken: "",
    modalView: "nenhum",
    lastMode: "create",
    showPlotOptions: false,
    plotOptions: {
        generateAxis: 1,
        generateVideo: 0,
        generateDielectric: 1,
        until: 20,
        plotAxis: "Ez",
        realtime: 0,
        labels: 0,
        field_parameters: {
            interpolation: "spline36",
            alpha: 1,
            cmap: "RdBu"
        },
        monitor_parameters: {
            alpha: 1.0,
            color: "g",
            facecolor: "none",
            edgecolor: "r",
            linewidth: 1,
            hatch: "o",
            label_color: "g",
            label_alpha: 0.3,
            offset: 20
        },
        source_parameters: {
            color: "r",
            alpha: 1.0,
            facecolor: "none",
            edgecolor: "r",
            linewidth: 1,
            hatch: "",
            label_color: "r",
            label_alpha: 0,
            offset: 20
        },
        plotViews: {
            eps_flag: 0,
            sources_flag: 0,
            monitor_flag: 0,
            boundaries_flag: 0
        },
        boundary_parameters: {
            alpha: 1.0,
            facecolor: "g",
            edgecolor: "g",
            linewidth: 1,
            hatch: ""
        },
        eps_parameters: {
            alpha: 1.0,
            interpolation: "spline36",
            cmap: "binary"
        },
    },
    generateVideo: 0
}