import { createContext, useContext } from 'react';
export var SceneContext = createContext({});
export function useSceneValue() {
  return useContext(SceneContext);
}
//# sourceMappingURL=SceneContext.js.map