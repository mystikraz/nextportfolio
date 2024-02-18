import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardFormInputsType = {
    inputValue?: string;
    contactLastName?: string;

    /** Style props */
    propPadding?: CSSProperties["padding"];
    propGap?: CSSProperties["gap"];
    propPadding1?: CSSProperties["padding"];
    propGap1?: CSSProperties["gap"];
};

const CardFormInputs: NextPage<CardFormInputsType> = ({
    inputValue,
    contactLastName,
    propPadding,
    propGap,
    propPadding1,
    propGap1,
}) => {
    const inputStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
            gap: propGap,
        };
    }, [propPadding, propGap]);

    const input1Style: CSSProperties = useMemo(() => {
        return {
            padding: propPadding1,
            gap: propGap1,
        };
    }, [propPadding1, propGap1]);

    return (
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] max-w-full shrink-0 text-left text-[1.33rem] text-heading-color font-body-02 mq900:gap-[2rem]">
            <div
                className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.69rem] min-w-[20.13rem] max-w-full"
                style={inputStyle}
            >
                <div className="self-stretch relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
                    {inputValue}
                </div>
                <input
                    className="[outline:none] bg-white self-stretch h-[4rem] rounded-lg box-border min-w-[15.63rem] border-[1.3px] border-solid border-primary"
                    type="text"
                />
            </div>
            <div
                className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.69rem] min-w-[20.13rem] max-w-full"
                style={input1Style}
            >
                <div className="self-stretch relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
                    {contactLastName}
                </div>
                <input
                    className="[outline:none] bg-white self-stretch h-[4rem] rounded-lg box-border min-w-[15.63rem] border-[1.3px] border-solid border-primary"
                    type="text"
                />
            </div>
        </div>
    );
};

export default CardFormInputs;
