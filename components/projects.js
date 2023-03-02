import { Responsive, WidthProvider} from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive)

import { Box, Text } from "theme-ui"

const Page = () => {
    // layout is an array of objects, see the demo for more complete usage

    const layout = [
      { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
      { i: "dark-magician", x: 1, y: 0, w: 1, h: 3 },
      { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
      { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
      { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
    ];

    return (
      <div>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={100}
        width={1200}
      >
        <Box key="blue-eyes-dragon" sx={{background: 'black', color: 'white'}}>a</Box>
        <Box key="dark-magician" sx={{background: 'black', color: 'white'}}>b</Box>
        <Box key="kuriboh" sx={{background: 'black', color: 'white'}}>c</Box>
        <Box key="spell-caster" sx={{background: 'black', color: 'white'}}>d</Box>
        <Box key="summoned-skull" sx={{background: 'black', color: 'white'}}>e</Box>
      </ResponsiveGridLayout>
      </div>
    );
}

export default Page