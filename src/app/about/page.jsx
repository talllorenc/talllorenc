
import ContactForm from "@/components/ContactForm/ContactForm";
import React, { useContext } from "react";

const AboutPage = () => {

  return (
    <section className="overflow-hidden container mb-4">
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-60 xl:w-60"
              src="/about/me.jpg"
              alt="profile img"
            />
          </div>

          <div className="relative lg:ml-10">
            <blockquote className="relative">
              <div className="text-2xl font-medium leading-9 text-white">
                <p>
                  My name is talllorenc and I really hope that everyone will
                  find something for themselves in this place. I've been doing
                  music for 5 years now, but I'm not doing it at the moment.
                  Here are my experiences and thoughts for the last 5 years and
                  I would really like to share it with you
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/about/me.jpg"
                      alt="profile img"
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-white">
                      talllorenc
                    </div>
                    <div className="text-base font-medium text-[#F75380]">
                      Soul healer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <ContactForm/>
    </section>
  );
};

export default AboutPage;
