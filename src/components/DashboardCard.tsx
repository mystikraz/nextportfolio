import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DashboardCardType = {
    placeholderImage?: string;
    blogTitleHeadingWillGoHer?: string;
    vector?: string;

    /** Style props */
    propBoxShadow?: CSSProperties["boxShadow"];
    propBorderRadius?: CSSProperties["borderRadius"];
};

const DashboardCard: NextPage<DashboardCardType> = ({
    placeholderImage,
    blogTitleHeadingWillGoHer,
    vector,
    propBoxShadow,
    propBorderRadius,
}) => {
    const cardStyle: CSSProperties = useMemo(() => {
        return {
            boxShadow: propBoxShadow,
            borderRadius: propBorderRadius,
        };
    }, [propBoxShadow, propBorderRadius]);

    return (
        <div
            className="bg-white shadow-[0px_0px_32px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start max-w-full text-left text-[1.5rem] text-heading-color font-body-02"
            style={cardStyle}
        >
            <img
                className="self-stretch h-[25rem] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                loading="eager"
                alt=""
                src={placeholderImage}
            />
            <div className="self-stretch flex flex-col items-start justify-start p-[2rem] gap-[2rem] mq900:gap-[2rem]">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.67rem]">
                        <h3 className="m-0 self-stretch h-[2.81rem] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-[1.19rem] mq450:leading-[1.69rem]">
                            {blogTitleHeadingWillGoHer}
                        </h3>
                        <div className="self-stretch h-[4rem] relative text-[1rem] leading-[150%] text-body inline-block">
                            Contents coming soon... Plz come back later.
                        </div>
                    </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[0rem] px-[0rem] pb-[0.67rem] bg-[transparent] flex flex-row items-center justify-start border-b-[1.3px] border-solid border-primary">
                    <div className="flex flex-row items-center justify-start gap-[1rem]">
                        <div className="h-[1.75rem] relative text-[0.88rem] leading-[150%] font-semibold font-body-02 text-black text-left inline-block">
                            View
                        </div>
                        <img className="h-[1rem] w-[1rem] relative" alt="" src={vector} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DashboardCard;
