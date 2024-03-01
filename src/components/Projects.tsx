import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TbPointFilled } from "react-icons/tb";

interface ProjectCardInfoProps {
  projectDescription: string[];
}

const ProjectCardInfo = ({ projectDescription }: ProjectCardInfoProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor={"styleColor.600"}
      borderRadius={30}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition={"all 0.3s ease-in-out"}
      color={"white"}
      width={"100%"}
    >
      {projectDescription.map((description, index) => (
        <HStack margin={2} key={index}>
          <TbPointFilled />
          <Text align={"start"} size={"sm"}>
            {description}
          </Text>
        </HStack>
      ))}
    </Box>
  );
};

interface ProjectCardLinksProps {
  projectTitle: string;
  projectLinks: string[];
  projectLinkDisplayName: string[];
  skills: string[];
}
const ProjectCardLinks = ({
  projectTitle,
  projectLinks,
  projectLinkDisplayName,
  skills,
}: ProjectCardLinksProps) => {
  return (
    <Card
      variant={"outline"}
      padding={2}
      borderColor={"styleColor.600"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition={"all 0.3s ease-in-out"}
      borderRadius={30}
    >
      <CardHeader>
        <Heading size={"md"}>{projectTitle}</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={"sm"} marginBottom={2}>
          Skills Used:{" "}
        </Heading>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
          }}
        >
          {skills.map((skill, index) => (
            <Text key={index} padding={2}>
              {skill}
            </Text>
          ))}
        </SimpleGrid>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={2}>
          {projectLinks.map((projectLink, index) => (
            <Link href={projectLink} key={index} isExternal>
              <Button
                colorScheme="styleColor"
                marginLeft={2}
                _hover={{ backgroundColor: "styleColor.600", color: "white" }}
              >
                {projectLinkDisplayName[index]}
              </Button>
            </Link>
          ))}
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};

interface ProjectCardProps {
  orientation: "left" | "right";
  projectTitle: string;
  projectDescription: string[];
  projectLinks: string[];
  projectLinkDisplayName: string[];
  skills: string[];
}

const ProjectCard = ({
  orientation,
  projectTitle,
  projectLinks,
  projectDescription,
  projectLinkDisplayName,
  skills,
}: ProjectCardProps) => {
  if (projectLinks.length !== projectLinkDisplayName.length) {
    throw new Error(
      "projectLinks and projectLinkDisplayName length must be the same"
    );
  }
  const isMdOrLarger = useBreakpointValue({ base: false, md: true });

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      gap={5}
      alignItems={"center"}
      marginBottom={8}
    >
      {isMdOrLarger ? (
        orientation === "left" ? (
          <>
            <ProjectCardLinks
              projectTitle={projectTitle}
              projectLinks={projectLinks}
              projectLinkDisplayName={projectLinkDisplayName}
              skills={skills}
            />
            <ProjectCardInfo projectDescription={projectDescription} />
          </>
        ) : (
          <>
            <ProjectCardInfo projectDescription={projectDescription} />
            <ProjectCardLinks
              projectTitle={projectTitle}
              projectLinks={projectLinks}
              projectLinkDisplayName={projectLinkDisplayName}
              skills={skills}
            />
          </>
        )
      ) : (
        <>
          <ProjectCardLinks
            projectTitle={projectTitle}
            projectLinks={projectLinks}
            projectLinkDisplayName={projectLinkDisplayName}
            skills={skills}
          />
          <ProjectCardInfo projectDescription={projectDescription} />
        </>
      )}
    </SimpleGrid>
  );
};

const Projects = () => {
  return (
    <>
      <Heading size={"md"}>Projects</Heading>
      <Divider margin={2} />
      <SimpleGrid justifyItems={"center"}>
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
            "https://resume-generator-app.onrender.com/",
            "https://github.com/TheFJcurve/resume-generator-app",
            "https://github.com/TheFJcurve/Resume-Generator",
          ]}
          projectLinkDisplayName={["Website", "GitHub", "Bash Version"]}
          skills={[
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Docker",
            "LaTeX",
            "Bash",
            "Chakra-UI",
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
          projectLinkDisplayName={["GitHub", "DevPost"]}
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
          projectLinkDisplayName={["GitHub", "DevPost"]}
          skills={[
            "Python",
            "Tkinter",
            "Matplotlib",
            "Numpy",
            "Pandas",
            "RESTful APIs",
          ]}
        />
      </SimpleGrid>
    </>
  );
};

export default Projects;
