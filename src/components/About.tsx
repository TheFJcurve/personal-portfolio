import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaUniversity } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  heading: string;
  body: string[];
}

const AboutCard = ({ icon, heading, body }: AboutCardProps) => {
  return (
    <Card
      margin={4}
      width={"350px"}
      height={"250px"}
      variant={"outline"}
      borderColor={"red.600"}
      style={{
        transition: "all 0.3s ease-in-out",
      }}
      _hover={{
        transform: "scale(1.05)",
        backgroundColor: "red.600",
      }}
    >
      <CardHeader>
        <Box justifyContent={"center"} display={"flex"}>
          {icon}
        </Box>
        <Heading>{heading}</Heading>
      </CardHeader>
      <CardBody>
        {body.map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

const About = () => {
  return (
    <>
      <Heading size={"md"}>About</Heading>
      <Divider margin={2} />
      <HStack>
        <AboutCard
          icon={<IoBookSharp size={25} />}
          heading="Books"
          body={["3 Short Stories Completed", "Updates on Publishing Soon!"]}
        />
        <AboutCard
          icon={<FaUniversity size={25} />}
          heading="Education"
          body={[
            "Computer Science",
            "Statistics and Combinatorics  Minor",
            "The University of Waterloo",
          ]}
        />
        <AboutCard
          icon={<PiProjectorScreenChart size={25} />}
          heading="Projects"
          body={[
            "10+ Projects Completed",
            "7+ Frameworks Used",
            "2+ Cups of Coffee Consumed Daily",
            "Countless People Impacted",
          ]}
        />
      </HStack>
    </>
  );
};

export default About;
