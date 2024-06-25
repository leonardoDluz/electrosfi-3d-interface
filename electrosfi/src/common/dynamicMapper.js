const dynamicMapper = (mapFunction, type) => {
  return () => Object.keys(mapFunction(false)).reduce((acc, key) => {
    acc[key] = function() {
      const mapper = mapFunction(this.is3d);
      return type === 'getters' ? mapper[key].call(this) : mapper[key].bind(this);
    };
    return acc;
  }, {});
};

export default dynamicMapper;