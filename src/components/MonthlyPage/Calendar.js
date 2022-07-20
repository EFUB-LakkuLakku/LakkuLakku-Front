import React, { useState } from 'react';
import { format, addMonths, subMonths, getDate} from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import './style.scss';
import styled from "styled-components";
import theme from "../../styles/theme";
import leftArrow from "./left.png";
import rightArrow from "./right.png";
import emoji from "./emoji.png";

const Container = styled.div`
  width: 1050rem;
  height: 75rem;
  display: flex;
  background-color: ${theme.main};
  border-top-right-radius: 30px;
  font-weight: 700;
  font-size: 20px;
`;

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header row">
            <div className="col col-start">
                <span className="text">
                    {format(currentMonth, 'yyyy')}년
                    <span className="textMonth">
                        {format(currentMonth, 'M')}월
                    </span>
                </span>
            </div>
            <div className="col col-end">
                <img src={leftArrow} onClick={prevMonth} />
                <img src={rightArrow} onClick={nextMonth} />
            </div>
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }

    return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    console.log(getDate(startDate));
     

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const formattedDate = format(day, 'd');
            const cloneDay = day;
           
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : (day.getDay() === 6 || day.getDay() === 0 && startOfWeek(monthStart))
                            ? 'weekEnd'
                            : null
                    }`}
                    key={day}
                    onClick={() => onDateClick(parse(cloneDay))}
                >
                    <div className= {
                         isSameDay(day, selectedDate)
                         ? 'selectedCircle'
                         :null
                        
                    }>    
                    </div>

                    <div className= {
                         isSameDay(day, selectedDate)
                         ? 'diaryTitle'
                         :null
                    }> 
                    </div>

                    <div className= {
                         isSameDay(day, selectedDate)
                         ? 'diaryEmoji'
                         :null
                    }>  
                    </div>

                    <span
                        className={`dateText + ${
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                : (day.getDay() === 6 || day.getDay() === 0)
                                ? 'weekEnd'
                                : null
                        }`}
                        
                    >
                        {formattedDate}
                    </span>

                    

                    
                    </div>
                    
                
            );
            day = addDays(day, 1);
            
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
    
};

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    return (
        <div className="calendar">
            <Container>
                <RenderHeader
                    currentMonth={currentMonth}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
            </Container>
            <RenderDays />
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
            />
        </div>
    );
}
export default Calendar;
