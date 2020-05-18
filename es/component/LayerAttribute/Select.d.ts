import { IActiveOption, ILayer } from '@antv/l7';
import * as React from 'react';
interface ILayerProps {
    layer: ILayer;
    select: {
        option: IActiveOption | boolean;
    };
}
declare const _default: React.NamedExoticComponent<ILayerProps>;
export default _default;
