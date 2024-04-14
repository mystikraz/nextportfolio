import React from 'react'

const Resume = () => {
    return (
        <div className="relative leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.63rem] w-full max-w-screen">
            My resume
            <h1 className="m-0 relative text-[4rem] leading-[120%] font-bold font-inherit text-left mq450:text-[2.38rem] mq450:leading-[2.88rem] mq900:text-[3.19rem] mq900:leading-[3.81rem]">
                Resume
            </h1>
            <embed src="/Rajan_Resume.pdf" type="application/pdf" width="100%" height="1000px" />
        </div>
    )
}

export default Resume