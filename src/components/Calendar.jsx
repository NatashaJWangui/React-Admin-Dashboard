import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "./Header";
import { tokens } from "../theme";

function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]); //For Events
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event"); //standard browser alert pop up
    const startTime = prompt("Enter start time (HH:MM, 24-hour format):"); // e.g., 13:00
    const endTime = prompt("Enter end time (HH:MM, 24-hour format):"); // e.g., 13:30
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title && startTime && endTime) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: `${selected.dateStr}T${startTime}:00`, // Convert to full datetime
        end: `${selected.dateStr}T${endTime}:00`,
        allDay: false,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar" />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant="h5" fontWeight="Bold">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[600],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {event.title} ({formatDate(event.start, { hour: "numeric", minute: "2-digit", hour12: true })} - 
                      {formatDate(event.end, { hour: "numeric", minute: "2-digit", hour12: true })})
                    </Typography>
                  }
                  secondary={
                    <Typography variant="h6">
                      {formatDate(event.start, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px" sx={{"& .fc-day-today":{
          background: `${colors.blueAccent[400]} !important`,
        },}}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventBackgroundColor={colors.redAccent[400]}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",title: "My Valentine event", start: "2025-02-14T14:00:00", end: "2025-02-14T19:30:00",
              },
              {
                id: "1357", title: "General Meeting", date: "2025-03-15" , start: "2025-03-15T09:00:00", end: "2025-03-15T10:30:00",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;