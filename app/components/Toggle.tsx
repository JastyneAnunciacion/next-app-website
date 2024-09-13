import React from 'react';

interface ToggleProps {
    toggleText?: string;
    placeTextLeft?: boolean;
    toggleWidth: string;
    aspectWidth?: number;
    aspectHeight?: number;
    justifyBetween?: boolean,
    bgColor?: string,
}

const Toggle = ({
    toggleText,
    placeTextLeft = false,
    toggleWidth,
    aspectWidth = 1,
    aspectHeight = 1,
    justifyBetween = false,
    bgColor = '#372B5B'
}: ToggleProps) => {
    return (
        <label className={`${justifyBetween && 'justify-between'} inline-flex items-center h-full w-full cursor-pointer`}>
            {toggleText && placeTextLeft && (
                <span className={`me-3`}>
                    {toggleText}
                </span>
            )}
            <input type="checkbox" value="" className="sr-only peer" />
            <div
                style={{
                    width: toggleWidth,
                    aspectRatio: `${aspectWidth}/${aspectHeight}`,
                    backgroundColor: bgColor
                }}
                className={`relative rounded-full peer peer-checked:bg-[#B767FA] flex items-center
                    after:h-[71.43%] after:aspect-square after:bg-[#6E6E6E] after:rounded-full after:translate-x-[20%] peer-checked:after:translate-x-[180%] after:transition-all after:duration-300 after:ease-in-out peer-checked:after:bg-white`}
            />
            {
                toggleText && !placeTextLeft && (
                    <span className={`ms-3`}>
                        {toggleText}
                    </span>
                )
            }
        </label >
    );
};

export default Toggle;
