function setGeometryProperty(state, data) {
    try {
        state.GeometryList.forEach((e) => {
            if (e.token == state.selectedToken) {
                e[data[0]] = data[1];
            }
        });
    } catch (err) {
        return { message: err.message }
    }
}
const setCurrentGeometrySize = (state, geometryData) => {
    setGeometryProperty(state, ['width', geometryData.width]);
    setGeometryProperty(state, ['height', geometryData.height]);
}
const setCurrentGeometrySizeWidth = (state, geometryData) => {
    setGeometryProperty(state, ['width', geometryData]);
}

const setCurrentGeometrySizeHeight = (state, geometryData) => {
    setGeometryProperty(state, ['height', geometryData]);
}

const setCurrentGeometryRadius = (state, geometryData) => {
    setGeometryProperty(state, ['radius', geometryData]);
}

const setCurrentGeometryRotation = (state, geometryData) => {
    setGeometryProperty(state, ['rotation', geometryData]);
}

export {
    setCurrentGeometrySize,
    setCurrentGeometrySizeWidth,
    setCurrentGeometrySizeHeight,
    setCurrentGeometryRadius,
    setCurrentGeometryRotation
}