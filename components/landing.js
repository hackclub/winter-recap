import { Responsive, WidthProvider} from "react-grid-layout";
import { Box, Text } from "theme-ui"

const ResponsiveGridLayout = WidthProvider(Responsive)

const Landing = () => {

    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 1, h: 3 },
      { i: "c", x: 2, y: 0, w: 1, h: 1 },
      { i: "d", x: 3, y: 0, w: 1, h: 1 },
      { i: "e", x: 4, y: 0, w: 1, h: 1 }
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
        <Box key="a" sx={{background: 'black', color: 'white'}}>a</Box>
        <Box key="b" sx={{background: 'black', color: 'white'}}>b</Box>
        <Box key="c" sx={{background: 'black', color: 'white'}}>c</Box>
        <Box key="d" sx={{background: 'black', color: 'white'}}>d</Box>
        <Box key="e" sx={{background: 'black', color: 'white'}}>e</Box>
      </ResponsiveGridLayout>
      </div>
    );
}

export default Landing