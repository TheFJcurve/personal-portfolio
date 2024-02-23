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
          "Tired of writing resumes? Generate a resume in minutes!",
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
    </>
  );
};

export default Projects;
