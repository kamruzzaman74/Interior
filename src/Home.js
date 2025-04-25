import React from "react";
import Navbar from "./Navbar";
import FerosaIntro from "./FerosaIntro";
import WhyPickMe from "./WhyPickMe";
import TruthInDecoration from "./TruthInDecoration";
import Services from "./Services";
import AICostEstimator from "./AICostEstimator";
import Footer from "./Footer";
import AnimatedFinalComponent  from "./AnimatedFinalComponent"
import Portfolio from "./Portfolio"

export default function Home() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-pink-100 to-purple-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Ferosa Interior & Construction
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Transforming spaces into artistic elegance with modern interior designs and expert construction services.
        </p>
      </section>

      {/* Image Showcase Section */}
      <section className="grid md:grid-cols-3 gap-6 px-4 py-16 max-w-6xl mx-auto">
        {["an3.jpg", "ggjpg.jpg", "kk.jpg"].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 animate__animated animate__fadeIn animate__delay-3s"
          >
            <img
              src={src}
              alt={`Interior Design ${index + 1}`}
              className="w-full h-52 object-cover rounded-lg transition-transform duration-500 hover:scale-105 animate__animated animate__zoomIn animate__delay-2s"
            />
          </div>
        ))}
      </section>

      {/* Artistic Philosophy Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Crafting Dreams into Designs ✨
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 animate__animated animate__fadeIn animate__delay-2s">
            At Ferosa, we believe that interior design is not just about beauty, but about creating an experience. Our projects balance art and utility, bringing joy to everyday living.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg w-full md:w-1/3 animate__animated animate__fadeIn animate__delay-3s">
              <h4 className="text-xl font-semibold text-purple-700 mb-2">Inspired by You</h4>
              <p className="text-gray-700 text-sm">Each space is tailored to reflect your personal essence and lifestyle.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg w-full md:w-1/3 animate__animated animate__fadeIn animate__delay-4s">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">Detail Obsessed</h4>
              <p className="text-gray-700 text-sm">We obsess over textures, lighting, and color harmony to perfect the ambiance.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg w-full md:w-1/3 animate__animated animate__fadeIn animate__delay-5s">
              <h4 className="text-xl font-semibold text-pink-700 mb-2">Design with Soul</h4>
              <p className="text-gray-700 text-sm">We infuse every project with passion, creativity, and a touch of magic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section with Animation */}
      <FerosaIntro />

      {/* Sections with Animations */}
      <WhyPickMe />
      <Services />
      <Portfolio/>
      <TruthInDecoration />
      <AICostEstimator />
      <AnimatedFinalComponent/>

      {/* Footer with Animation */}
      <Footer />
    </div>
  );
}
