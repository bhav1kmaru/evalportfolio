import { Box } from "@chakra-ui/react";
import React from "react";
import Projects from "../src/components/Projects";

const ProjectPage = ({ data }) => {
  return (
    <Box>
      <Projects data={data} col={[1,2,3,4]} />
    </Box>
  );
};

export default ProjectPage;

export async function getStaticProps(context) {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:bhav1kmaru+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  return {
    props: {
      data,
    },
  };
}
