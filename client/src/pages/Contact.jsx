import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import TransitionLink from "../components/UI/TransitionLink";

const Contact = () => {
  return (
    <PageWrapper>
      <main className="">
        <div className="max-w-7xl mx-auto  px-6 md:px-12 lg:px-24 pt-32 pb-24">
          {/* Hero Header */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight max-w-4xl mb-16">
            Get in touch for
            <br />
            guidance, support, and
            <br />
            tailored solutions.
          </h1>

          {/* Black Div Placeholder (Replacing Image) */}
          <div className="w-full h-75 md:h-125 lg:h-175 bg-black mb-24">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQpPYMqsHpeaFVRKy_0ycyNWfo_Qq1gRFXt7AawAXeFaqXTFZM27BjJ52jJE9haqC1IBHoMK55gk_ig7ARccyqdF86z0F5_7JxSD-jaizBV9aN1TbmUBPniMyEqy23epxpaCF61tYAfiHjrPv-ckge2pRdmxVJ92a9m8MXCNIamZ7ZzY7GruOHMHNuUSINMbo0k61gbl_OWjZ-BCGkRCAu1uCmla2a_OdkaEadWtMuWni5jMPOigMAFueExfgpSHP4ccTL9CyoNo"
              alt="hero imgage"
              className="object-cover object-center w-full h-full grayscale"
            />
          </div>

          {/* Contact Grid Section */}
          <div className="w-full border-t border-[#333333]">
            {/* Row 1: Inquiries */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 py-12 border-b border-[#333333]">
              <div className="md:col-span-3 text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
                01 / INQUIRIES
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  GENERAL
                </div>
                <TransitionLink
                  href="mailto:aniket.dev.me@gmail.com"
                  className="font-serif text-xl md:text-2xl hover:text-gray-300 transition-colors"
                >
                  hello@solium.com
                </TransitionLink>
              </div>
              <div className="md:col-span-5">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  PRESS
                </div>
                <TransitionLink
                  href="mailto:aniket.dev.me@gmail.com"
                  className="font-serif text-xl md:text-2xl hover:text-gray-300 transition-colors"
                >
                  press@solium.com
                </TransitionLink>
              </div>
            </div>

            {/* Row 2: Studio */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 py-12 border-b border-[#333333]">
              <div className="md:col-span-3 text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
                02 / STUDIO
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  ADDRESS
                </div>
                <address className="font-serif text-xl md:text-2xl not-italic leading-relaxed">
                  1428 Cinematic Way,
                  <br />
                  Suite 300
                  <br />
                  Los Angeles, CA 90028
                </address>
              </div>
              <div className="md:col-span-5">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  MAP
                </div>
                <TransitionLink
                  href="#"
                  className="font-serif text-xl md:text-2xl hover:text-gray-300 transition-colors"
                >
                  Get Directions
                </TransitionLink>
              </div>
            </div>

            {/* Row 3: Connect */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 py-12">
              <div className="md:col-span-3 text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
                03 / CONNECT
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  SOCIAL
                </div>
                <div className="flex flex-col space-y-2 font-serif text-xl md:text-2xl">
                  <TransitionLink
                    href="#"
                    className="hover:text-gray-300 transition-colors w-fit"
                  >
                    Instagram
                  </TransitionLink>
                  <TransitionLink
                    href="#"
                    className="hover:text-gray-300 transition-colors w-fit"
                  >
                    Letterboxd
                  </TransitionLink>
                  <TransitionLink
                    href="#"
                    className="hover:text-gray-300 transition-colors w-fit"
                  >
                    Twitter
                  </TransitionLink>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mb-3">
                  PHONE
                </div>
                <TransitionLink
                  href="tel:+919386183875"
                  className="font-serif text-xl md:text-2xl hover:text-gray-300 transition-colors"
                >
                  +919386183875
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default Contact;
