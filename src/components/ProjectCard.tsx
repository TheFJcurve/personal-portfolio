import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { TbPointFilled } from "react-icons/tb";

interface ProjectCardInfoProps {
  projectDescription: string[];
}

const ProjectCardInfo = ({ projectDescription }: ProjectCardInfoProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={"600px"}
      height={"250px"}
      backgroundColor={"red.600"}
      borderRadius={"20px"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition={"all 0.3s ease-in-out"}
      color={colorMode === "dark" ? "black" : "white"}
    >
      {projectDescription.map((description, index) => (
        <HStack margin={2} key={index}>
          <TbPointFilled />
          <Text size={"sm"}>{description}</Text>
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
      height={"300px"}
      width={"500px"}
      variant={"outline"}
      borderColor={"red.600"}
      margin={"20px"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition={"all 0.3s ease-in-out"}
      borderRadius={"20px"}
    >
      <CardHeader>
        <Heading size={"md"}>{projectTitle}</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={"sm"} marginBottom={2}>
          Skills Used:{" "}
        </Heading>
        <SimpleGrid columns={skills.length > 8 ? 5 : skills.length < 4 ? 2 : 4}>
          {skills.map((skill, index) => (
            <Text key={index} padding={2}>
              {skill}
            </Text>
          ))}
        </SimpleGrid>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        {projectLinks.map((projectLink, index) => (
          <Link href={projectLink} key={index} isExternal>
            <Button colorScheme="red" marginLeft={2}>
              {projectLinkDisplayName[index]}
            </Button>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
};

interface Props {
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
}: Props) => {
  if (projectLinks.length !== projectLinkDisplayName.length) {
    throw new Error(
      "projectLinks and projectLinkDisplayName length must be the same"
    );
  }
  return (
    <HStack>
      {orientation === "left" ? (
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
      )}
    </HStack>
  );
};

export default ProjectCard;
