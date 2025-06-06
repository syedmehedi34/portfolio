/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Dot } from "lucide-react";
import emailjs from "@emailjs/browser";
import contactLottie from "../assets/contact_lottie.json";
import Lottie from "lottie-react"; // Import Lottie component

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_obof31m",
        "template_jq7hx34",
        formRef.current,
        "cKfBXWMAovLIpkLKV"
      );
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-cyan-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* left container */}
            <div className="border">
              <h3 className="text-2xl text-white font-semibold mb-2">
                Let’s Build Something Amazing
              </h3>
              <p className="text-white text-lg">
                Whether it’s a new project, a collaboration, or just a chat
                about tech, I’m all ears! Drop me a message, and let’s make it
                happen.
              </p>

              {/* form  */}
              <section className="py-10">
                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-purple-500">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-gray-700 text-gray-300 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-gray-700 text-gray-300 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 text-gray-300 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    {submitStatus === "success" && (
                      <p className="text-green-500 text-center font-medium">
                        Message sent successfully!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-500 text-center font-medium">
                        Failed to send message. Please try again.
                      </p>
                    )}
                  </form>
                </div>
              </section>
            </div>

            {/* right container */}
            <div className="border flex items-center justify-center">
              <Lottie
                animationData={contactLottie}
                loop={true}
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
