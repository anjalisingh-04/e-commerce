import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='panel-1'
                >
                    <Typography component="span">Record and capture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Get instant alerts for anyone who approaches, even if they don,t press the doorbell.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className='panel-1'
                >
                    <Typography component="span">Rich notifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    One of the key benefits of rich notifications is that they can help increase user engagement with your app or service.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='panel-1'
                >
                    <Typography component="span">Smoke alarm detection</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    A smoke alarm works by detecting smoke particles in the air and triggering an alarm to sound.
                </AccordionDetails>

            </Accordion>
        </div>
    );
}
