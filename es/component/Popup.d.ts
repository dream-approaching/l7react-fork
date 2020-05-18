import { IPopupOption } from '@antv/l7';
import * as React from 'react';
interface IPopupProps {
    option?: Partial<IPopupOption>;
    lnglat: number[];
    children?: React.ReactNode;
}
export default class PopupComponet extends React.PureComponent<IPopupProps> {
    private el;
    private scene;
    private popup;
    constructor(props: IPopupProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPopupProps): void;
    componentWillUnmount(): void;
    render(): any;
}
export {};
