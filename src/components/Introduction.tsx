import { Grid, GridItem, Image } from "@chakra-ui/react";
import IntroductionText from "./IntroductionText";
import sargun from "../assets/sargun.png";

const About = () => {
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
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
          width={"400px"}
          style={{ alignSelf: "center" }}
        />
      </GridItem>
    </Grid>
  );
};

export default About;
