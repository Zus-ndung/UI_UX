import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import {Modal, InputGroup, Form } from '@themesberg/react-bootstrap';
// import "./styles.css";

// must manually import the stylesheets for each plugin
// import "@fullcalendar/";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./Styles/selectComponent.css";

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();
  
  state = {
    calendarWeekends: true,
    showDefault: false,
    title:"",
    arg:null,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  };
openModal = (arg)=>{
  this.setState({showDefault: true, arg: arg});
}
  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.openModal}
            style={{width: "1000px"}}
          />
        </div>
        <Modal centered show={this.state.showDefault} onHide={()=>{this.setState({showDefault: false})}}>
          <InputGroup>
            <InputGroup.Text>
            </InputGroup.Text>
            <Form.Control onChange={(e)=>{this.setState({title: e.target.value})}} onKeyDown={(e)=>{
               if(e.keyCode === 13){this.setState({showDefault:false}); this.handleDateClick();}}} type="text" placeholder="Nhap noi dung" />
          </InputGroup>
        </Modal>
      </div>
      
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = () => {
    const arg = this.state.arg;
    
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: this.state.title,
          start: arg.date,
          allDay: arg.allDay
        })
      });
  };
}
