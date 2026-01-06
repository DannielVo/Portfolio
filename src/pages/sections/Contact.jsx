import React from "react";
import { LINKEDIN_URL } from "../../assets/assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex grow w-full h-screen flex-col justify-center items-center overflow-x-hidden pt-16 scroll-mt-24"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative z-10 w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Contact me
            </h2>
          </div>
          <div className="text-center mb-10 max-w-2xl">
            <p className="text-base text-gray-300 md:text-lg leading-relaxed">
              Whether you have a project in mind, an idea to discuss, or simply
              want to connect, I’m always open to meaningful conversations. Feel
              free to reach out, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col w-full max-w-md gap-4 sm:flex-row sm:justify-center">
            <a
              className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[160px] px-6 py-3.5 text-base font-semibold text-white bg-primary hover:bg-hover rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              className="group relative flex items-center justify-center w-full sm:w-auto min-w-[160px] px-6 py-3.5 text-base font-semibold text-white border border-gray-700 bg-transparent rounded-lg hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200 shadow-lg  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href="mailto:hello@dannielvo.com"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]">
                mail
              </span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
