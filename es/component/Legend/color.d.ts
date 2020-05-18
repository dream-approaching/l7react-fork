import * as React from 'react';
interface IColorLegendProps {
    items?: any[];
    title: string;
    className?: string;
    style?: React.CSSProperties;
}
import './style.css';
export declare const ColorComponent: React.MemoExoticComponent<(props: IColorLegendProps) => JSX.Element>;
export {};
