import React from 'react';
import './styles.css';

interface RoundedRectangleProps {
    width: string | number;
    height: string | number;
    borderRadiusSide: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ width, height, borderRadiusSide }) => {
    const normalizedWidth = typeof width === 'number' ? `${width}px` : width;
    const normalizedHeight = typeof height === 'number' ? `${height}px` : height;

    // Map prop to corresponding CSS class
    const borderRadiusClass = `border-${borderRadiusSide}`;

    return (
        <div
            className={`roundedRectangle ${borderRadiusClass}`}
            style={{
                width: normalizedWidth,
                height: normalizedHeight,
            }}
        />
    );
};

export default RoundedRectangle;
