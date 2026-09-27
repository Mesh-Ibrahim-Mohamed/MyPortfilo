import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../ui/heading";
import { skills } from "../../config/about/skills";
import { socialLinks } from "../../config/about/social-links";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          ".about-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".about-intro",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".skill-card",
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".professional-focus, .technical-skills, .community-contribution, .online-presence",
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black text-white py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <Heading heading={"About Me"} paragraph={"Ibrahim Abdelsalam is a Software Engineer and Data Analyst based in Cairo, Egypt, with 1.5 years of experience in data analysis, software system development, and database design."} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="md:text-xl text-[15px] font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="professional-focus">
              <h3 className="md:text-2xl text-xl font-bold mb-4 text-purple-400">Professional Focus</h3>
              <p className="text-gray-400">I focus on solving complex problems, writing clean code, and building reliable software systems that turn sensitive data into practical business insights.</p>
            </div>

            <div className="technical-skills">
              <h3 className="md:text-2xl text-xl font-bold mb-4 text-purple-400">Technical Skills</h3>
              <p className="text-gray-400">Power BI, DAX, Excel, Power Query, SQL, Python, Pandas, NumPy, Matplotlib, Seaborn, .NET Core, C++, C#, data structures, and algorithms.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="community-contribution">
              <h3 className="md:text-2xl text-xl font-bold mb-4 text-purple-400">Community & Open Source</h3>
              <p className="text-gray-400">I enjoy continuous learning, competitive programming, and building practical solutions that make complex technical work easier to understand.</p>
            </div>

            <div className="online-presence">
              <h3 className="md:text-2xl text-xl font-bold mb-4 text-purple-400">Online Presence</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}