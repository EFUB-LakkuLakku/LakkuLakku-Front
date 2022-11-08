import React, { useEffect, useState } from "react";
import { format, addMonths, subMonths, getDate, getDay } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import "./style.scss";
import styled from "styled-components";
import theme from "../../styles/theme";
import leftArrow from "./left.png";
import rightArrow from "./right.png";
import axios from "axios";
import API from "../../utils/api";
import { render } from "@testing-library/react";
import getNickname from "../../utils/getNickname";
import DiaryService from "../../api/DiaryService";
import HomeService from "../../api/HomeService";
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
          {format(currentMonth, "yyyy")}년
          <span className="textMonth">{format(currentMonth, "M")}월</span>
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
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
};

const RenderCells = ({ diaries, currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, "d");
      const cloneFormattedDate = format(day, "dd");
      const formattedMonth = format(currentMonth, "MM");
      const formattedYear = format(currentMonth, "yyyy");
      const cloneDay = day;
      const date = `2022-${formattedMonth}-${cloneFormattedDate}`;
      //date를 지닌 다이어리 찾기
      function findDiary(date) {
        for (let d of diaries) {
          if (d.date == date) {
            console.log(date);

            var defaultTitle = "제목";

            var defaultEmoji = "🌙";
            if (d.title == "") {
              d.title = defaultTitle;
            }
            if (d.titleEmoji == null) {
              d.titleEmoji = defaultEmoji;
            }
            return d;
          }
        }

        return null;
      }
      const currentDiary = findDiary(date);
      const nickname = getNickname();
      function createDiary() {
        DiaryService.createDiary(date)
          .then((res) => {
            if (res.status == 200) {
              alert("다이어리 생성 완료");
            } else {
              console.log("다이어리 생성 실패");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      days.push(
        <div
          className={`col empty cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : day.getDay() === 6 ||
                (day.getDay() === 0 && startOfWeek(monthStart))
              ? "weekEnd"
              : null
          }`}
          key={day}
          onClick={() => {
            onDateClick();
            if (currentDiary == null) {
              // 다이어리가 없을때에만
              createDiary();
            }

            window.location.href = `/main/${nickname}/diary/${formattedYear}-${formattedMonth}-${cloneFormattedDate}`;
            console.log("click");
          }}
        >
          <div
            className={isSameDay(day, selectedDate) ? "selectedCircle" : null}
          ></div>
          {/**오늘 날짜랑 같으면 강조효과 */}
          <div
            className={
              isSameDay(day, selectedDate) && currentDiary
                ? "selectedDiaryTitle"
                : "diaryTitle"
            }
          >
            {currentDiary && currentDiary.title}
          </div>
          <div className={"diaryEmoji"}>
            {currentDiary && currentDiary.titleEmoji}
          </div>

          <span
            className={`dateText + ${
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : day.getDay() === 6 || day.getDay() === 0
                ? "weekEnd"
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
      </div>
    );

    days = [];
  }
  return <div className="body">{rows}</div>;
};

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [diaries, setDiaries] = useState([]);
  const nickname = getNickname();
  const fetchDiaries = () => {
    HomeService.getDiary(nickname)
      .then((res) => {
        if (res.status == 200) {
          setDiaries(res.data);
          console.log(res.data);
        } else {
          console.log("캘린더 정보 가져오기 실패");
        }
      })
      .catch((err) => console.log(err));
    /*
      //홈API 조회
      API.get('/api/v1/home', {
        params: { nickname: localStorage.getItem("nickname") },
      })
          .then((res) => {
            const diaryDate = res.data.diary.date
            const title = res.data.diary.title
            console.log(res.data);
            
          });
      */
  };
  useEffect(() => {
    fetchDiaries();
  }, []);
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
        diaries={diaries}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
}
export default Calendar;
