import { HStack, Heading, Link, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

interface Props {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  devpost: string;
  instagram: string;
}

const AboutText = ({
  name,
  email,
  linkedin,
  github,
  devpost,
  instagram,
}: Props) => {
  return (
    <>
      <Heading>{name}</Heading>
      <Text>Computer Science @ The University of Waterloo</Text>
      <Text>
        <Link href={`mailto:${email}`} _hover={{ color: "red" }}>
          {email}
        </Link>
      </Text>
      <Text fontStyle={"italic"} padding={7}>
        I have a story to tell.
        <br /> <br />
        I use technology to make lives easier, 
        so people can focus on what they do best.
        <br /> <br />
        Mathematics is a beauty and history is fascinating.
      </Text>
      <HStack gap={4} margin={2}>
        <Link href={github} _hover={{ color: "red" }} isExternal>
          <FaGithub />
        </Link>
        <Link href={linkedin} _hover={{ color: "red" }} isExternal>
          <FaLinkedin />
        </Link>
        <Link href={devpost} _hover={{ color: "red" }} isExternal>
          <SiDevpost />
        </Link>
        <Link href={instagram} _hover={{ color: "red" }} isExternal>
          <AiFillInstagram />
        </Link>
      </HStack>
    </>
  );
};

export default AboutText;
