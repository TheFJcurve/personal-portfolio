import { Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <>
      <Heading size={"md"}>Skills</Heading>
      <Divider margin={2} />
      <SimpleGrid columns={2}>
        <SkillsCard
          skillHeading={"Full Stack Development"}
          skills={[
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "ReactJS",
            "TypeScript",
            "Docker",
          ]}
        />
        <SkillsCard
          skillHeading={"Data Management"}
          skills={["Python", "Tableau", "MySQL", "Pandas", "Numpy", "Keras"]}
        />
        <SkillsCard
          skillHeading={"Software Development"}
          skills={["C/C++", "Bash Scripting", "Linux File System"]}
        />
        <SkillsCard
          skillHeading={"Mobile Development"}
          skills={[
            "Kotlin",
            "Android Studio",
            "Swift",
            "XCode",
            "Google Firebase",
          ]}
        />
      </SimpleGrid>
    </>
  );
};

export default Skills;
