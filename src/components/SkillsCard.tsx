import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";

interface Props {
  skillHeading: string;
  skills: string[];
}

const SkillsCard = ({ skillHeading, skills }: Props) => {
  return (
    <Card
      width={"550px"}
      height={"300px"}
      margin={"20px"}
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
        <Heading size={"sm"}>{skillHeading}</Heading>
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
