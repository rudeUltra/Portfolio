import Image from "next/image";

export const Education = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white-900 sm:text-4xl md:mx-auto text-[#AEFEFF]">
            Experience
          </h2>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                <Image src="/images/graduate.png" width={100} height={100} alt="Icon" className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  B.Tech Computer Science VIT Vellore
                </h6>
                <p className="text-sm text-white-900">
                <span>✅</span> I did my Bachelors in Computer Science and Engineering from VIT Vellore.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                <Image src="/images/hard-work.png" width={100} height={100} alt="Icon" className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Full Stack Developer | MERCOR.IO
                </h6>
                <h5 className="mb-3 text-xl font-bold leading-5">
                  JavaScript | AWS | NodeJS | Python | Twilio | DynamoDB | React.JS
                </h5>
                <div className="text-sm text-white-900">
                  <div>
                  
                    <p>
                      <span>✅</span>Developed Entire Back-End infrastructure on AWS creating API gateways with Lambda function to create REST APIs using Node.JS and DynamoDB

                    </p>
                    <br/>
                    <p>
                       <span>✅</span>Added multiple functionalities including Email and Voice call automation with AI Python script | FrontEnd Design using React Native
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  