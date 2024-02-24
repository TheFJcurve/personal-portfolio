import {
  GridItem,
  HStack,
  Heading,
  Highlight,
  Image,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import sargun from "../assets/sargun.png";

interface IntroductionTextProps {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  devpost: string;
  instagram: string;
}

const IntroductionText = ({
  name,
  email,
  phone,
  linkedin,
  github,
  devpost,
  instagram,
}: IntroductionTextProps) => {
  return (
    <>
      <Heading>{name}</Heading>
      <Text margin={1}>
        <Highlight
          query={"Computer Science"}
          styles={{ px: "2", py: "1", rounded: "full", bg: "styleColor.400" }}
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

const Introduction = () => {
  return (
    <SimpleGrid
      justifyItems={"center"}
      columns={{ sm: 1, md: 2 }}
      marginTop={10}
      gap={5}
    >
      <GridItem textAlign={"left"} marginLeft={10}>
        <IntroductionText
          name="Sargun Singh Bhatti"
          email="ss2bhatt@uwaterloo.ca"
          phone="+1 (437) 984-9244"
          linkedin="https://www.linkedin.com/in/sargun-singh-bhatti/"
          github="https://github.com/TheFJcurve"
          devpost="https://devpost.com/sargunbhatti27?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          instagram="https://www.instagram.com/sargun.s.bhatti/"
        />
      </GridItem>
      <GridItem>
        <Image
          src={sargun}
          alt="Picture of Sargun Singh Bhatti"
          style={{ alignSelf: "center" }}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default Introduction;
