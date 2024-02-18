import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type StrategyDirectionContainerType = {
    dimensionCode?: string;
    serviceDescription?: string;

    /** Style props */
    propBorderBottom?: CSSProperties["borderBottom"];
    propGap?: CSSProperties["gap"];
    propGap1?: CSSProperties["gap"];
    propColor?: CSSProperties["color"];
    children?: React.ReactNode;
};

const StrategyDirectionContainer: NextPage<StrategyDirectionContainerType> = ({
    dimensionCode,
    serviceDescription,
    propBorderBottom,
    propGap,
    propGap1,
    propColor,
    children
}) => {
    const contentStyle: CSSProperties = useMemo(() => {
        return {
            borderBottom: propBorderBottom,
        };
    }, [propBorderBottom]);

    const sectionTitleStyle: CSSProperties = useMemo(() => {
        return {
            gap: propGap,
        };
    }, [propGap]);

    const content1Style: CSSProperties = useMemo(() => {
        return {
            gap: propGap1,
        };
    }, [propGap1]);

    const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
        return {
            color: propColor,
        };
    }, [propColor]);

    return (
        <div
            className="w-[25.31rem] rounded-[10.67px] bg-bg-shade box-border flex flex-col items-start justify-start p-[2rem] max-w-full text-left text-[2rem] text-heading-color font-body-02 border-b-[4px] border-solid border-primary mq450:gap-[2rem] mq450:pt-[1.31rem] mq450:pb-[1.31rem] mq450:box-border"
            style={contentStyle}
        >
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq450:gap-[2rem]"
                style={sectionTitleStyle}
            >
                <button className="cursor-pointer [border:none] p-[0.83rem] bg-white rounded-[10.67px] shadow-[0px_0px_16px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center">
                    <img
                        className="h-[3.33rem] w-[3.33rem] relative object-cover"
                        alt=""
                        src={dimensionCode}
                    />
                </button>
                <div
                    className="self-stretch flex flex-col items-start justify-start gap-[1.33rem]"
                    style={content1Style}
                >
                    <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-[1.19rem] mq450:leading-[1.69rem] mq900:text-[1.63rem] mq900:leading-[2.25rem]">
                        {serviceDescription}
                    </h1>
                    <div
                        className="self-stretch relative text-[1.33rem] leading-[150%] text-body mq450:text-[1.06rem] mq450:leading-[1.63rem]"
                        style={loremIpsumDolorStyle}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyDirectionContainer;
