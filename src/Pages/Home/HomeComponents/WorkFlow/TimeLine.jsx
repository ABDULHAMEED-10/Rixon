import TitleAndPara from "../TitleAndPara";
import { titleParaInfo } from "../../../../demoData";
import { Link } from "react-router-dom";
export const TimeLine = () => {
  return (
    <div className="py-10">
      <div className="mx-auto min-w-2xl px-4 lg:px-8 lg:min-w-6xl">
        <TitleAndPara prop={titleParaInfo[1]} />
      </div>
      <div className="px-10 md:px-24 mx-auto max-w-7xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600 rounded-2xl py-10 hover:scale-105 hover:border-green-500 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300 shadow-xl">
        <ol className="relative border-s border-green-600 dark:border-green-600">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border-none dark:bg-green-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-green-600 dark:text-green-400">
              Contact
            </time>
            <h3 className="text-lg font-semibold text-white">
              Quick Text
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300">
              Submit your query on our official Whatsapp Handle. Our agents will
              connect you with tech experts to discuss your needs, recommend
              solutions, and show you ways to boost your business.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-green-600 transition rounded ring-1 ring-green-600 hover:bg-green-600 hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Learn More{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border-none dark:bg-green-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-green-600 dark:text-green-400">
              Meeting
            </time>
            <h3 className="text-lg font-semibold text-white">
              Insights & Action Planning Session
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300">
              During your meeting, our team of tech experts will gain a
              comprehensive understanding of your problem or idea. They will
              then develop the best possible solutions and demonstrate a clear
              roadmap for growing and scaling your business.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border-none dark:bg-green-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-green-600 dark:text-green-400">
              Promise
            </time>
            <h3 className="text-lg font-semibold text-white">
              Proposal and Execution
            </h3>
            <p className="text-base font-normal text-gray-300">
              Once you choose our customized proposal to unlock success for your
              business, we&apos;ll maintain close communication every step of
              the way. You&apos;ll receive weekly comprehensive updates,
              ensuring you&apos;re always informed and empowered. And of course,
              your valuable feedback is always welcome, and Yeah Fast Delivery
              for sure.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default TimeLine;
