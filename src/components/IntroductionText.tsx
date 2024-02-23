import { HStack, Heading, Highlight, Link, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

interface Props {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  devpost: string;
  instagram: string;
}

const AboutText = ({
  name,
  email,
  phone,
  linkedin,
  github,
  devpost,
  instagram,
}: Props) => {
  return (
    <>
      <Heading>{name}</Heading>
      <Text margin={1}>
        <Highlight
          query={"Computer Science"}
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.400" }}
        >
          Computer Science
        </Highlight>
      </Text>
      <Text>
        <Link href={`mailto:${email}`} _hover={{ color: "red" }}>
          {email}
        </Link>
      </Text>
      <Text>
        <Link href={`tel:${phone}`} _hover={{ color: "red" }}>
          {phone}
        </Link>
      </Text>
      <Text fontStyle={"italic"} padding={7}>
        I have a story to tell.
        <br /> <br />
        I use technology to make lives easier, so people can focus on what they
        do best.
        <br /> <br />
        Mathematics is a beauty and Nature is fascinating.
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