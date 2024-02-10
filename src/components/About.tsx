import { Grid, GridItem, Image } from "@chakra-ui/react";
import AboutText from "./AboutText";
import sargun from "../assets/sargun.png";

const About = () => {
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      marginTop={10}
    >
      <GridItem textAlign={"left"} marginLeft={10}>
        <AboutText
          name="Sargun Singh Bhatti"
          email="ss2bhatt@uwaterloo.ca"
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
          width={"600px"}
        />
      </GridItem>
    </Grid>
  );
};

export default About;
