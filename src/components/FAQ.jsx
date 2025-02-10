import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from './Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../theme';

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Questions"/>
      {/* Box 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            How i install a React App?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Just go to your terminal and run npx create-next-app@latest then follow the next steps.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Box 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Which is better Nextjs or React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Next. js is worth considering over plain React when you need server-side rendering, static site generation, simplified routing, improved performance, or built-in features for your web application. However, if your application requires high customization, sticking with React alone might be more appropriate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Box 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Which is the best Backend Framework?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Top 7 Backend Frameworks For Development :
              1. Django
              2. Laravel
              3. Express 
              4. Spring Boot
              5. Ruby on Rails
              6. Flask
              7. ASP.NET 
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Box 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Is Material UI free?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, Material UI (now officially called MUI) is completely free to use, as it is an open-source React component library with a MIT license, meaning you can use it for any project without paying any fees; however, if you need advanced features or technical support, you can opt for a commercial plan with additional functionalities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Box 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Which is the best framework for dashboards?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For building dashboards, "Streamlit" is often considered one of the best frameworks, particularly for users seeking a quick and straightforward setup with minimal customization needs, thanks to its predefined layout, theme support, and integration with various graph libraries; making it ideal for rapid prototyping and deployment.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ
