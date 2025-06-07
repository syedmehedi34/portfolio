/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Github } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import contactLottie from "../assets/contact_lottie.json";
import Lottie from "lottie-react";
import backgroundImage from "../assets/background-image.jpg";

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
    <section
      id="contact"
      className="py-16 bg-cyan-800 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-cyan-950 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20">
            {/* Left Container */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let’s Build Something Amazing
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Whether it’s a new project, a collaboration, or just a chat
                  about tech, I’m all ears! Drop me a message, and let’s make it
                  happen.
                </p>
              </div>

              {/* left form  */}
              <div className="bg-cyan-50/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
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
                        className="w-full px-4 py-3 text-white border border-cyan-600/60 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-600/90 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 text-white border border-cyan-600/60 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-600/90 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 text-white border border-cyan-600/60 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-600/90 transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300 font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-center font-medium">
                      Message sent successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-center font-medium">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Right Container */}
            <div className="flex flex-col items-center justify-center space-y-8">
              <div
                className="w-52 h-52 rounded-full p-5 border-3 border-cyan-500 tracking-tight"
                style={{
                  boxShadow:
                    "0 0 10px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.5)",
                  animation: "glow 1.5s ease-in-out infinite alternate",
                }}
              >
                <Lottie
                  animationData={contactLottie}
                  loop={true}
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                />
              </div>
              <style jsx>
                {`
                  @keyframes glow {
                    from {
                      box-shadow: 0 0 10px rgba(6, 182, 212, 0.4),
                        0 0 20px rgba(6, 182, 212, 0.5);
                    }
                    to {
                      box-shadow: 0 0 20px rgba(6, 182, 212, 0.85),
                        0 0 30px rgba(6, 182, 212, 0.5);
                    }
                  }
                `}
              </style>
              <div className="space-y-4 text-white text-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 " />
                  <span>syedmehedi34@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 " />
                  <span>+880 173 177 1438</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 " />
                  <span>Rajshahi, Bangladesh</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://linkedin.com/in/syedmehedi34",
                    Icon: FaLinkedinIn,
                  },
                  { href: "https://github.com/syedmehedi34", Icon: Github },
                  {
                    href: "https://facebook.com/syedmehedi34",
                    Icon: FaFacebookF,
                  },
                  { href: "https://wa.me/+8801731771438", Icon: FaWhatsapp },
                  { href: "mailto:syedmehedi34@gmail.com", Icon: Mail },
                ].map(({ href, Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-cyan-100 hover:text-cyan-600 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
