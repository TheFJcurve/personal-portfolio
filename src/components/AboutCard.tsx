import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  heading: string;
  body: string[];
}

const AboutCard = ({ icon, heading, body }: Props) => {
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

export default AboutCard;
