"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Check, CheckCircle, Leaf, ShieldCheck, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="WonderGreenLawn"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Professional Lawn Care You Can Trust"
      description="Providing fast, efficient, and honest lawn maintenance for Houston homeowners. Get your yard looking fantastic today."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-with-eco-food-bowl_624325-680.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-cute-clothes-reaching-plants-greenhouse_197531-12330.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-man-selling-crops-from-his-garden_329181-16532.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/gardener-with-weedwacker-cutting-grass-garden_329181-20539.jpg",
          alt: "Satisfied customer",
        },
      ]}
      avatarText="Join 20+ satisfied local homeowners"
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#features",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Fast Response",
        },
        {
          type: "text-icon",
          text: "Professional",
          icon: Check,
        },
        {
          type: "text",
          text: "Reliable",
        },
        {
          type: "text-icon",
          text: "Eco-Friendly",
          icon: Leaf,
        },
        {
          type: "text",
          text: "Locally Owned",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Your Trusted Lawn Partner"
      description="WonderGreenLawn brings expert care to every property we touch. We believe in fast service, honesty, and quality results."
      subdescription="With a 4.8 rating and years of local experience, we are dedicated to making Houston lawns shine."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/happy-attractive-male-gardener-glasses-posing-while-trimming-bush-with-electric-hedge-clippers_7502-10137.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Precision Mowing",
          description: "Professional cut for a clean, manicured look every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-using-trimming-tool-bush_23-2148256658.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/bush-pruning-with-hedge-trimmer_342744-536.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Lawn Maintenance",
          description: "Fertilization and soil care to foster robust lawn health.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-siblings-tending-scallion_23-2147828857.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/woman-harvesting-vegetables_23-2148568621.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Seasonal Cleanup",
          description: "Comprehensive debris and leaf removal to keep yards tidy.",
          imageSrc: "http://img.b2bpic.net/free-photo/gardening-beautiful-spring-flowers-with-garden-supplies_169016-1828.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/side-view-man-carrying-box_23-2149722682.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Reliable Services"
      description="We offer comprehensive care to keep your landscape healthy and vibrant."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elmer Sanchez",
          handle: "@local",
          testimonial: "Excellent work and high quality. Found my go-to guy!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fashionable-woman-looking-away_23-2148276099.jpg",
        },
        {
          id: "2",
          name: "Melvin Escobar",
          handle: "@local",
          testimonial: "Hasty and professional. Lawn looked like a clean shaven beard.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-is-talking-smartphone-while-sitting-grass-park_169016-22896.jpg",
        },
        {
          id: "3",
          name: "Jessa Guillar",
          handle: "@localguide",
          testimonial: "Fast, efficient and honest. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-watering-his-plants-his-garden-man-blue-shirt-family-works-backyard_1157-41453.jpg",
        },
        {
          id: "4",
          name: "Mark D.",
          handle: "@local",
          testimonial: "Consistent service every time I call.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-engaged-household-task_23-2151741259.jpg",
        },
        {
          id: "5",
          name: "Sara B.",
          handle: "@local",
          testimonial: "Fantastic transformation of my backyard.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-couple-with-flower_23-2148966573.jpg",
        },
      ]}
      showRating={true}
      title="Customer Reviews"
      description="See why Houston homeowners trust WonderGreenLawn."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: Star,
          title: "Rating",
          value: "4.8",
        },
        {
          id: "m2",
          icon: CheckCircle,
          title: "Projects",
          value: "100+",
        },
        {
          id: "m3",
          icon: Users,
          title: "Happy Clients",
          value: "20+",
        },
      ]}
      title="Our Impact"
      description="Quality numbers behind our service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What areas do you serve?",
          content: "We primarily serve the Houston area, including Gulfton and surrounding neighborhoods.",
        },
        {
          id: "f2",
          title: "How do I schedule?",
          content: "Simply call us at (832) 665-6863 for a free quote and scheduling.",
        },
        {
          id: "f3",
          title: "What are your hours?",
          content: "We operate Monday through Saturday. Please call for specific availability.",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Ready for a professional lawn care service? Call us today at (832) 665-6863 or send us a message."
      buttons={[
        {
          text: "Call Now",
          href: "tel:8326656863",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "(832) 665-6863",
              href: "tel:8326656863",
            },
            {
              label: "6909 Renwick Dr, Houston, TX",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Lawn Care",
              href: "#features",
            },
            {
              label: "Mowing",
              href: "#features",
            },
            {
              label: "Cleanup",
              href: "#features",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 WonderGreenLawn"
      bottomRightText="All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
