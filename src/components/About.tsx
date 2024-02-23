import { Divider, HStack, Heading } from "@chakra-ui/react";
import AboutCard from "./AboutCard";
import { FaUniversity } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";

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
