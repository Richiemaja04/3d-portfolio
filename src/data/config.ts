const config = {
  title: "Richie M | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Richie, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Richie, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Richie",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Richie M",
  email: "richiemaja04@gmail.com",
  site: "https://richiem.dev",

  // for github stars button
  githubUsername: "Richiemaja04",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/richie-m-50b542294/",
    instagram: "https://www.instagram.com/_irichie_",
    github: "https://github.com/Richiemaja04",
  },
};
export { config };
