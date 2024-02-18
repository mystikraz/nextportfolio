import CardFormInputs from "@/components/CardFormInputs";
import DashboardCard from "@/components/DashboardCard";
import StrategyDirectionContainer from "@/components/StrategyDirectionContainer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.94rem] box-border tracking-[normal]">
      <header className="self-stretch h-[7.5rem] bg-white shadow-[0px_5.3px_80px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1rem] text-body font-body-02">
        <div className="w-[109.31rem] h-[4.33rem] flex flex-row items-center justify-center gap-[2.67rem] max-w-full mq900:gap-[2.67rem] mq1800:w-[79.06rem]">
          {/* <img
            className="h-[2.5rem] w-[11.67rem] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/logo.svg"
          /> */}
          <div className="h-[2.25rem] w-[23rem] max-w-full" />
          <div className="w-[30.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1800:hidden">
            <Link href="/" className="h-[2rem] relative leading-[150%] text-primary inline-block shrink-0">Home
            </Link>
            <Link href="#portfolio" className="h-[2rem] relative leading-[150%] inline-block shrink-0">Portfolio
            </Link>
            <Link href="#about" className="h-[2rem] relative leading-[150%] inline-block shrink-0 whitespace-nowrap">About me
            </Link>
            {/* <Link href="#testimonials" className="h-[2rem] relative leading-[150%] inline-block shrink-0">Testimonials
            </Link> */}
          </div>
          <div className="self-stretch w-[23rem] overflow-hidden max-w-full" />
          <button className="cursor-pointer py-[1.17rem] px-[1.75rem] bg-[transparent] rounded-[5.33px] flex flex-row items-center justify-center border-[1.3px] border-solid border-primary hover:bg-mediumslateblue-200 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-mediumslateblue-100">
            <Link href="#contact" className="h-[2rem] relative text-[1rem] leading-[150%] font-body-02 text-primary text-left inline-block whitespace-nowrap">
              Contact Me
            </Link>
          </button>
        </div>
      </header>
      <section className="self-stretch bg-bg-shade flex flex-row items-center justify-start py-[8.33rem] px-[5.33rem] box-border [row-gap:20px] max-w-full text-left text-[1.33rem] text-heading-color font-body-02 mq900:py-[3.56rem] mq900:px-[1.31rem] mq900:box-border mq1350:py-[5.44rem] mq1350:px-[2.63rem] mq1350:box-border mq1800:flex-wrap">
        <div className="w-[49.44rem] flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[2rem] min-w-[49.42rem] min-h-[32.94rem] max-w-full mq450:gap-[2rem] mq1350:min-w-full mq1800:flex-1 mq1800:pr-[0rem] mq1800:box-border mq1800:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
            <div className="relative leading-[150%] font-semibold text-center mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Hey, I am Rajan
            </div>
            <b className="self-stretch h-[10.75rem] relative text-[4.67rem] leading-[120%] inline-block shrink-0 mq450:text-[2.81rem] mq450:leading-[3.38rem] mq900:text-[3.75rem] mq900:leading-[4.5rem]">
              <span>{`I am `}</span>
              <span className="text-primary">{`full stack `}</span>
              <span>software developer</span>
            </b>
            <h3 className="m-0 w-[38.83rem] relative text-[1.5rem] leading-[150%] font-normal font-inherit text-body inline-block max-w-full mq450:text-[1.19rem] mq450:leading-[1.81rem]">
              I&apos;,m an experienced Software Engineer </h3>
          </div>
          <div className="flex flex-row items-start justify-start pt-[1.33rem] px-[0rem] pb-[0rem]">
            <button className="cursor-pointer [border:none] py-[1.17rem] px-[1.44rem] bg-primary rounded-[5.33px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumslateblue-100">
              <div className="h-[2rem] relative text-[1rem] leading-[150%] font-body-02 text-white text-left inline-block">
                Get In Touch
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[45.61rem] w-[57.33rem] relative object-cover max-w-full mq1800:flex-1 rounded-lg shadow-lg 
          transition duration-300 transform hover:scale-105 hover:shadow-xl filter grayscale-0 hover:grayscale"
          loading="eager"
          alt="rajan"
          src="/rajan.jpeg"
        />
      </section>
      <section className="overflow-hidden flex flex-col items-start justify-center py-[9.33rem] pr-[5.38rem] pl-[5.33rem] box-border gap-[6.67rem] max-w-full text-center text-[1.33rem] text-heading-color font-body-02 mq450:pt-[3.94rem] mq450:pb-[3.94rem] mq450:box-border mq900:gap-[6.67rem] mq900:py-[6.06rem] mq900:px-[1.31rem] mq900:box-border mq1350:gap-[6.67rem] mq1350:pl-[2.63rem] mq1350:pr-[2.69rem] mq1350:box-border">
        <div className="w-[64rem] flex flex-col items-start justify-center gap-[1.33rem] max-w-full">
          <div className="relative leading-[150%] font-semibold shrink-0 mq450:text-[1.06rem] mq450:leading-[1.63rem]">
            My Skills
          </div>
          <div className="self-stretch flex flex-col items-start justify-start shrink-0 text-left text-[4rem] mq900:gap-[2rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[2.38rem] mq450:leading-[2.88rem] mq900:text-[3.19rem] mq900:leading-[3.81rem]">
              My Expertise
            </h1>
          </div>
        </div>
        <div className="w-[109.31rem] overflow-x-auto flex flex-row items-start justify-center gap-[2.67rem] max-w-full text-left text-[2rem] mq900:gap-[2.67rem]">
          <StrategyDirectionContainer
            dimensionCode="/productchain-1@2x.png"
            serviceDescription={`Tech Lead`}
          >As a seasoned Tech Lead with over 8 years of experience,
            I am dedicated to driving technical excellence, fostering innovation, and delivering exceptional results. With my extensive experience in
            ASP.NET Core, Next.js, and AWS, combined with a passion for leadership and collaboration,
            I am ready to tackle the most challenging projects and drive success for your organization.
          </StrategyDirectionContainer>

          <StrategyDirectionContainer
            dimensionCode="/featherpen-1-1@2x.png"
            serviceDescription="Software Development"
            propGap="1.33rem"
            propGap1="2rem"
            propColor="#000"
          >As a software developer, I am committed to delivering high-quality software solutions that drive business value and
            exceed client expectations. With expertise in ASP.NET Core, Next.js, AWS, and Agile development methodologies, I am equipped to tackle the most challenging projects and deliver exceptional results. Whether you need a scalable web application,
            a dynamic frontend experience, or a resilient cloud-native solution, I am ready to bring your vision to life.
          </StrategyDirectionContainer>
          <StrategyDirectionContainer
            dimensionCode="/tag-1@2x.png"
            serviceDescription="Serverless Architecture"
            propGap="1.33rem"
            propGap1="2rem"
            propColor="#000"
          >As a practitioner of serverless architecture on AWS, I am passionate about harnessing the power of cloud-native technologies to
            build scalable, resilient, and cost-effective applications. With expertise in AWS Lambda, event-driven architecture, and a track record of successful serverless projects,
            I am equipped to tackle the most challenging requirements and drive innovation for your organization.
          </StrategyDirectionContainer>
          <StrategyDirectionContainer
            dimensionCode="/tag-1@2x.png"
            serviceDescription="Ci/CD Pipelines"
            propGap="1.33rem"
            propGap1="2rem"
            propColor="#000"
          >As a practitioner of CI/CD pipelines with GitHub Actions,Azure DevOps, Aws Code Pipeline, I am committed to helping organizations
            streamline their software delivery processes, improve collaboration, and deliver value to customers faster.
            With expertise in automating build, test, and deployment workflows, I am well-equipped to drive continuous improvement
            and innovation within your development teams.
          </StrategyDirectionContainer>
        </div>
      </section>
      <section id="about" className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.81rem] box-border max-w-full text-center text-[1.33rem] text-heading-color font-body-02">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-[8.33rem] pr-[5.38rem] pl-[5.33rem] box-border gap-[7.17rem] max-w-full shrink-0 z-[1] mq900:gap-[7.17rem] mq900:py-[3.56rem] mq900:px-[1.31rem] mq900:box-border mq1350:gap-[7.17rem] mq1350:py-[5.44rem] mq1350:pr-[2.69rem] mq1350:pl-[2.63rem] mq1350:box-border">
          <img
            className="h-[62.25rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[33rem] mq900:min-w-full rounded-lg shadow-lg 
            transition duration-300 transform hover:scale-105 hover:shadow-xl filter grayscale-0 hover:grayscale"
            loading="eager"
            alt=""
            src="/rajan_yak.jpg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] min-w-[33.38rem] max-w-full mq450:gap-[2rem] mq900:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[0.67rem]">
              <div className="relative leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.63rem]">
                About
              </div>
              <h1 className="m-0 relative text-[4rem] leading-[120%] font-bold font-inherit text-left mq450:text-[2.38rem] mq450:leading-[2.88rem] mq900:text-[3.19rem] mq900:leading-[3.81rem]">
                About Me
              </h1>
            </div>
            <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[150%] font-normal font-inherit text-body text-left mq450:text-[1.19rem] mq450:leading-[1.81rem]">
              <p className="m-0">
                I have a demonstrated history of working in the information technology and services industry.
                Skilled in Cloud computing(AWS), Web, Desktop and mobile application development with tools like C#, Nodejs, Nextjs, ASP.Net Core, Web API, Reactjs,
                Xamarin, SQL Server, Postgres.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Strong engineering professional with a BIT focused in Computing, Software Engineering from Islington College.

              </p>
            </h3>
          </div>
        </div>

      </section>
      <section id="portfolio">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7rem] px-[4rem] box-border gap-[5rem] min-h-[74.38rem] max-w-full shrink-0 mt-[-4.62rem] text-[1rem] mq450:gap-[5rem] mq900:gap-[5rem] mq900:pb-[2.94rem] mq900:box-border mq1350:pl-[2rem] mq1350:pr-[2rem] mq1350:pb-[4.56rem] mq1350:box-border">
          <div className="w-[109.31rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1800:flex-wrap">
            <div className="w-[64rem] flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
              <div className="h-[2rem] relative leading-[150%] font-semibold inline-block">
                Recent Projects
              </div>
              <div className="self-stretch flex flex-col items-center justify-start shrink-0 text-left text-[3rem] mq900:gap-[2rem]">
                <h1 className="m-0 self-stretch h-[4.81rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[1.81rem] mq450:leading-[2.19rem] mq900:text-[2.38rem] mq900:leading-[2.88rem]">
                  My Portfolio
                </h1>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0.83rem] px-[1.31rem] bg-deeppink-200 h-[4.67rem] rounded-[10.67px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center box-border gap-[1rem] whitespace-nowrap hover:bg-deeppink-100">
              <img
                className="h-[2rem] w-[2rem] relative"
                alt=""
                src="/social-icon.svg"
              />
              <div className="h-[2rem] relative text-[1rem] leading-[150%] font-body-02 text-white text-left inline-block">
                Visit My
              </div>
            </button>
          </div>
          <div className="w-[109.31rem] flex flex-col items-center justify-start max-w-full mq450:gap-[5.33rem] mq900:gap-[5.33rem]">
            <div className="self-stretch flex flex-col items-center justify-start max-w-full mq450:gap-[5.33rem] mq900:gap-[5.33rem]">
              <div className="self-stretch grid flex-row items-start justify-start py-[0rem] pr-[0.13rem] pl-[0rem] box-border gap-[2.67rem] max-w-full grid-cols-[repeat(3,_minmax(415px,_1fr))] mq900:gap-[2.67rem] mq900:grid-cols-[minmax(415px,_1fr)] mq1800:justify-center mq1800:grid-cols-[repeat(2,_minmax(415px,_720px))]">
                <DashboardCard
                  placeholderImage="/placeholder--image@2x.png"
                  blogTitleHeadingWillGoHer="Ahuse"
                  vector="/vector.svg"
                />
                <DashboardCard
                  placeholderImage="/placeholder--image-1@2x.png"
                  blogTitleHeadingWillGoHer="App Dashboard"
                  vector="/vector-1.svg"
                  propBoxShadow="0px 5.3px 16px rgba(0, 0, 0, 0.15)"
                  propBorderRadius="unset"
                />
                <DashboardCard
                  placeholderImage="/placeholder--image-2@2x.png"
                  blogTitleHeadingWillGoHer="Easy Rent"
                  vector="/vector-1.svg"
                  propBoxShadow="0px 5.3px 32px rgba(0, 0, 0, 0.15)"
                  propBorderRadius="8px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section id="contact" className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[9.38rem] px-[1.25rem] pb-[9.31rem] box-border gap-[4rem] max-w-full text-center text-[1.33rem] text-heading-color font-body-02 mq900:gap-[4rem] mq900:pt-[3.94rem] mq900:pb-[3.94rem] mq900:box-border mq1350:gap-[4rem] mq1350:pt-[6.06rem] mq1350:pb-[6.06rem] mq1350:box-border">
        <div className="w-[64rem] flex flex-col items-center justify-start gap-[1.31rem] max-w-full shrink-0">
          <div className="relative leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.63rem]">
            Get In Touch
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[4rem] mq900:gap-[2rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[2.38rem] mq450:leading-[2.88rem] mq900:text-[3.19rem] mq900:leading-[3.81rem]">
              Contact me
            </h1>
            <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[150%] font-normal font-inherit text-body mq450:text-[1.19rem] mq450:leading-[1.81rem]">
              If we wish to contact me for any software development jobs. Plz free free to contact me.</h3>
            
          </div>
        </div>
        <div className="w-[64rem] flex flex-col items-center justify-start gap-[2rem] max-w-full shrink-0 text-left mq900:gap-[2rem]">
          <CardFormInputs inputValue="First name" contactLastName="Last name" />
          <CardFormInputs
            inputValue="Email"
            contactLastName="Phone number"
            propPadding="unset"
            propGap="0.63rem"
            propPadding1="unset"
            propGap1="0.63rem"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.69rem] max-w-full shrink-0">
            <div className="self-stretch relative leading-[150%] shrink-0 mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Choose a topic
            </div>
            <div className="self-stretch rounded-lg bg-white box-border flex flex-row flex-wrap items-start justify-start py-[1rem] pr-[1.06rem] pl-[0.94rem] [row-gap:20px] max-w-full shrink-0 border-[1.3px] border-solid border-primary">
              <div className="flex-1 relative leading-[150%] inline-block min-w-[5.69rem] max-w-full mq450:text-[1.06rem] mq450:leading-[1.63rem]">
                Select one...
              </div>
              <img
                className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-start justify-start py-[1.33rem] px-[0rem] box-border gap-[1.33rem] max-w-full text-black">
            <div className="h-[2rem] relative leading-[150%] flex items-center mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Which best describes you?
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] max-w-full text-[1.17rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.17rem] min-w-[20.13rem] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <div className="h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] bg-white box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray" />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    First choice
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <input
                    className="m-0 h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray"
                    type="checkbox"
                  />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    Third choice
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <input
                    className="m-0 h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray"
                    type="checkbox"
                  />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    Fifth choice
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.17rem] min-w-[20.13rem] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <div className="h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] bg-white box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray" />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    Second choice
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <div className="h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] bg-white box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray" />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    Fourth choice
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.67rem] max-w-full shrink-0 mq450:flex-wrap">
                  <div className="h-[1.33rem] w-[1.33rem] relative rounded-[21.33px] bg-white box-border overflow-hidden shrink-0 border-[1.3px] border-solid border-darkslategray" />
                  <div className="h-[1.75rem] flex-1 relative leading-[150%] inline-block min-w-[18.88rem] max-w-full">
                    Other
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.69rem] shrink-0">
            <div className="self-stretch relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Message
            </div>
            <textarea
              className="bg-white h-[15rem] w-auto [outline:none] self-stretch rounded-lg box-border flex flex-row items-start justify-center p-[1rem] font-body-02 text-[1.33rem] text-dimgray border-[1.3px] border-solid border-primary"
              placeholder="Type your message..."
              rows={12}
              cols={51}
            />
          </div>

          <button className="cursor-pointer [border:none] pt-[1.13rem] px-[1.13rem] pb-[1.19rem] bg-primary w-[10.69rem] rounded-lg flex flex-row items-center justify-center box-border hover:bg-mediumslateblue-100">
            <div className="relative text-[1.33rem] leading-[150%] font-body-02 text-white text-left mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Submit
            </div>
          </button>
          <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[150%] font-normal font-inherit text-body mq450:text-[1.19rem] mq450:leading-[1.81rem]">
              If the form above doesn&apos;t work for any reason. Drop me your email in <Link href="mailto:rajan.tandukar@outlook.com">rajan.tandukar@outlook.com</Link></h3>
        </div>
      </section>
      <footer className="self-stretch bg-bg-shade overflow-hidden flex flex-col items-center justify-start pt-[6.63rem] pb-[6.69rem] pr-[1.31rem] pl-[1.25rem] box-border gap-[6.69rem] max-w-full text-left text-[1.33rem] text-black font-body-02 mq450:gap-[6.69rem] mq450:pt-[4.31rem] mq450:pb-[4.38rem] mq450:box-border mq900:gap-[6.69rem]">
        <div className="w-[109.38rem] flex flex-row flex-wrap items-center justify-start py-[0rem] px-[0rem] box-border [row-gap:40px] max-w-full">
          <div>
            <img
              className="h-[2.5rem] w-[34.75rem] relative overflow-hidden shrink-0 max-w-full"
              loading="eager"
              alt=""
              src="/social-icon.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.19rem] pl-[0rem] box-border min-w-[29.56rem] gap-[1.25rem] max-w-full z-[1] ml-[-0.75rem] mq900:flex-wrap mq900:min-w-full">
            <Link href="/" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Home
            </Link>
            <Link href="#portfolio" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Portfolio
            </Link>
            <Link href="#about" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">{`About me `}</Link>
            <Link href="#contact" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Contact
            </Link>
            {/* <Link href="#testimonials" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Testimonials
            </Link> */}
            <Link href="#portfolio" className="relative leading-[150%] mq450:text-[1.06rem] mq450:leading-[1.63rem]">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-row items-start justify-center py-[0rem] pr-[0.25rem] pl-[19.63rem] box-border gap-[0.94rem] max-w-full z-[2] ml-[-0.75rem] mq900:flex-wrap mq900:pl-[9.81rem] mq900:box-border">

            <Link href="https://www.linkedin.com/in/rajan-tandukar-a8385220/" target="_blank">
              <img
                className="h-[2rem] w-[2rem] relative rounded-[5.33px] overflow-hidden shrink-0 min-h-[2rem]"
                loading="eager"
                alt=""
                src="/linkedin.svg"
              />
            </Link>

            <Link href="https://github.com/mystikraz" target="_blank">
              <img
                className="h-[2rem] w-[2rem] relative rounded-[5.33px] overflow-hidden shrink-0 min-h-[2rem]"
                loading="eager"
                alt=""
                src="/github-circle.svg"
              />
            </Link>

            <Link href="https://stackoverflow.com/users/6310002/rajon-tanducar" target="_blank">
              <img
                className="h-[2rem] w-[2rem] relative rounded-[5.33px] overflow-hidden shrink-0 min-h-[2rem]"
                loading="eager"
                alt=""
                src="/stackoverflow.svg"
              />
            </Link>
          </div>
        </div>
        <div className="w-[109.31rem] flex flex-col items-start justify-start gap-[2.69rem] max-w-full text-[1.17rem] mq900:gap-[2.69rem]">
          <div className="self-stretch h-[0.08rem] relative bg-gray-200" />
          <div className="self-stretch flex flex-row items-start justify-between py-[0rem] px-[0rem] box-border gap-[1.25rem] max-w-full mq900:flex-wrap">
            <div className="w-[28.69rem] flex flex-row items-start justify-start py-[0rem] pr-[0.13rem] pl-[0rem] box-border gap-[1.94rem] max-w-full mq450:flex-wrap mq450:gap-[1.94rem]">
              <div className="flex-1 relative leading-[150%] inline-block min-w-[5.69rem]">
                Copyright &copy; rajantandukar 2023
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
