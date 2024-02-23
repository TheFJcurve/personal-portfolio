import { Divider, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Heading size={"md"}>Projects</Heading>
      <Divider margin={2} />
      <ProjectCard
        orientation="left"
        projectTitle={"Resume Generator"}
        projectDescription={[
          "Tired of writing resumes? Generate a new resume in minutes!",
          "Created using MERN Stack, older resumes can be re-used and edited.",
          "One component can be shared across multiple resumes.",
          "LaTeX to generate beautiful and stable resumes in a choice of fonts.",
        ]}
        projectLinks={[
          "https://github.com/TheFJcurve/resume-generator-app",
          "https://github.com/TheFJcurve/Resume-Generator",
        ]}
        projectLinkDisplayName={["GitHub", "Bash Version"]}
        skills={[
          "ReactJS",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "ChakraUI",
          "LaTeX",
          "Bash",
        ]}
      />
      <ProjectCard
        orientation="right"
        projectTitle={"GameHub: ReactJS Website"}
        projectDescription={[
          "Created a beautiful and responsive website to browse games.",
          "Implemented sorting, searching and filtering of games.",
          "Integrated RAWG API to fetch games and their details.",
        ]}
        projectLinks={[
          "https://github.com/TheFJcurve/react-project",
          "https://react-project-rosy-six.vercel.app/",
        ]}
        projectLinkDisplayName={["GitHub", "Visit Website"]}
        skills={["ReactJS", "RESTful APIs", "ChakraUI", "TypeScript"]}
      />
      <ProjectCard
        orientation="left"
        projectTitle={"Parivartan: Car Security System"}
        projectDescription={[
          "A car security system that uses a sensor to unlock the car.",
          "Scans Driver's Liscence and FingerPrints to allow access.",
          "Indian National 4th Place at IIT Bombay Vigyantaram.",
        ]}
        projectLinks={[
          "https://github.com/TheFJcurve/Parivartan",
          "https://devpost.com/software/parivartan-car-security-simplified?ref_content=user-portfolio&ref_feature=in_progress",
        ]}
        projectLinkDisplayName={["GitHub", "DevPost Hackathon Winner"]}
        skills={["Python", "Raspberry Pi", "FingerPrint Sensor"]}
      />
      <ProjectCard
        orientation="right"
        projectTitle={"Klimacc: API Climate App"}
        projectDescription={[
          "Predict the weather of any city in the whole world!",
          "Fetches information from APIs, processes it and displays, all using Python!",
          "Suggests the best source of renewable energy based on the data!",
          "International Hackathon Winner",
        ]}
        projectLinks={[
          "https://github.com/TheFJcurve/Klimacc",
          "https://devpost.com/software/klimacc-one-click-to-sustainability?ref_content=user-portfolio&ref_feature=in_progress",
        ]}
        projectLinkDisplayName={["GitHub", "DevPost Hackathon Winner"]}
        skills={[
          "Python",
          "Tkinter",
          "Matplotlib",
          "Numpy",
          "Pandas",
          "RESTful APIs",
        ]}
      />
    </>
  );
};

export default Projects;
