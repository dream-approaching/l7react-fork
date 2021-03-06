import { PositionName } from '@antv/l7';
import * as React from 'react';
interface IColorLegendProps {
    position: PositionName;
    className?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}
export default function CustoonConrol(props: IColorLegendProps): React.ReactPortal;
export {};
