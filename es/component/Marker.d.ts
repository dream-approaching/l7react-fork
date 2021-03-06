import { ILngLat, IMarker, IMarkerOption } from '@antv/l7';
import * as React from 'react';
interface IMarkerProps {
    option?: IMarkerOption;
    lnglat: ILngLat | number[];
    onMarkerLoaded?: (marker: IMarker) => void;
    children?: React.ReactNode;
}
export default class MarkerComponet extends React.PureComponent<IMarkerProps> {
    private el;
    private scene;
    private marker;
    constructor(props: IMarkerProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IMarkerProps): void;
    componentWillUnmount(): void;
    render(): any;
}
export {};
