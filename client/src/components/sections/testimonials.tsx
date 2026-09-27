import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Heading from "../ui/heading";
import { useTestimonials } from "../../hooks/queries/use-portfolio-data";
import { useState, useEffect } from "react";

interface Testimonial {
  testimonial: string;
  name: string;
  position: string;
  company?: string;
  avatar: string;
}

export function Testimonials() {
  const { data: testimonialsData, isLoading, error } = useTestimonials();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    if (testimonialsData?.data?.testimonials && testimonialsData.data.testimonials.length > 0) {
      setTestimonials(testimonialsData.data.testimonials);
    } else if (!isLoading) {
      setTestimonials([]);
    }
  }, [testimonialsData, isLoading]);
  
  return (
    <section className="flex flex-col items-center justify-center relative">
      {/* Status banners */}
      <div className="w-full max-w-[1200px] mx-auto px-4 mb-4">
        {isLoading && (
          <p className="text-sm text-gray-400 text-center">Loading latest testimonials — showing sample content</p>
        )}
        {error && (
          <p className="text-sm text-yellow-400 text-center">Unable to load testimonials — showing sample content</p>
        )}
      </div>

      <Heading 
        heading={"Feedbacks From Clients"} 
        paragraph={"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business."} 
      />
      {testimonials.length > 0 && <AnimatedTestimonials testimonials={testimonials} />}
    </section>
  );
}