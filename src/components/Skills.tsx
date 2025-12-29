"use client";

import { Card, GridItem, HStack, Heading } from "@chakra-ui/react";
import { Divider, Text, SimpleGrid } from "@chakra-ui/layout";
import { TiTick } from "react-icons/ti";

interface SkillsCardProps {
  skillHeading: string;
  skills: string[];
}

const SkillsCard = ({ skillHeading, skills }: SkillsCardProps) => {
  return (
    <Card.Root
      width={"100%"}
      margin={3}
      variant={"outline"}
      borderColor={"styleColor.600"}
      style={{
        transition: "all 0.3s ease-in-out",
      }}
      _hover={{
        transform: "scale(1.05)",
        backgroundColor: "styleColor.600",
        color: "white",
      }}
    >
      <Card.Header>
        <Heading size={"sm"}>{skillHeading}</Heading>
      </Card.Header>
      <Card.Body>
        <SimpleGrid columns={2} spacing={10}>
          {skills.map((skill, index) => (
            <GridItem key={index}>
              <HStack>
                <TiTick />
                <Text size={"sm"}>{skill}</Text>
              </HStack>
              <Divider margin={2} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
};

const Skills = () => {
  return (
    <>
      <Heading size={"md"}>Skills</Heading>
      <Divider margin={2} />
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={6} justifyItems={"center"}>
        <SkillsCard
          skillHeading={"Full Stack Development"}
          skills={[
            "NextJS",
            "ExpressJS",
            "NodeJS",
            "ReactJS",
            "TypeScript",
            "JavaScript",
          ]}
        />
        <SkillsCard
          skillHeading={"Data Management"}
          skills={[
            "PostgreSQL",
            "MongoDB",
            "Tableau",
            "MySQL",
            "Pandas",
            "Numpy",
          ]}
        />
        <SkillsCard
          skillHeading={"Software Development"}
          skills={[
            "C/C++",
            "Bash Scripting",
            "Python",
            "Linux File System",
            "Docker",
            "Git",
          ]}
        />
        <SkillsCard
          skillHeading={"Mobile Development"}
          skills={[
            "Kotlin",
            "Android Studio",
            "Swift",
            "XCode",
            "Google Firebase",
            "React Native",
          ]}
        />
        <SkillsCard
          skillHeading={"Data Science"}
          skills={[
            "Keras",
            "TensorFlow",
            "SciKit-Learn",
            "PyTorch",
            "CNNs",
            "LLMs",
          ]}
        />
      </SimpleGrid>
    </>
  );
};

export default Skills;
