import { Box, Text } from "theme-ui"
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Landing from "../components/landing";
import Projects from "../components/projects";
import Stats from "../components/stats";
import Individual from "../components/individual";
import Events from "../components/events";

const Page = () => {
    return (
      <>
      <Meta
        as={Head}
        title="Winter Hardware Wonderland"
        description="This winter, 300 high schoolers gathered to build 249 projects with $73k worth of hardware"
        image="https://cloud-pmdd4on0w-hack-club-bot.vercel.app/0download__5_.png"
      />
      <Box as="main">
        <Landing />
        <Projects />
        <Stats />
        <Individual />
        <Events />
      </Box>
      </>
    );
}

export default Page