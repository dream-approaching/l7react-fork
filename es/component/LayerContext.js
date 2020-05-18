import { createContext, useContext } from 'react';
export var LayerContext = createContext({});
export function useLayerValue() {
  return useContext(LayerContext);
}
//# sourceMappingURL=LayerContext.js.map