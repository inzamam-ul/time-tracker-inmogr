import moment from "moment";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  && p {
    font-size: 13px;
    color: #32a071;
  }
`;

const DayContainer = styled.div`
  font-size: 20px;
  color: #32a071;
  font-weight: 400;
`;

const Arrow = styled.span`
  font-size: 25px;
  font-weight: 200;
  cursor: pointer;
  line-height: 1;
`;

const DateInput = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  z-index: -1;
`;

const Title = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
`;

const DateParagraph = styled.p`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

type DatePickerProps = {
  data: string;
  updateDateParameter: (data: any) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  data,
  updateDateParameter,
}) => {
  const [date, setDate] = useState(data);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setDate(e.target.value);
    const newDate = new Date(e.target.value);
    setDate(newDate.toDateString());
    updateDateParameter({ date: newDate.toDateString() });
  };

  const getFormatedDate = (date: any) => {
    return {
      date: moment(date).format("DD MMMM YYYY"),
      day: moment(date).format("dddd"),
    };
  };

  const handleNextDay = () => {
    const newDate = new Date(moment(date).add(1, "days")?._d);
    setDate(newDate.toDateString());
    updateDateParameter({ date: newDate.toDateString() });
  };
  const handlePrevDay = () => {
    const newDate = new Date(moment(date).subtract(1, "days")?._d);
    setDate(newDate.toDateString());
    updateDateParameter({ date: newDate.toDateString() });
  };

  return (
    <Wrapper style={{ position: "relative", width: "173px" }}>
      <Title>Day</Title>
      <DateContainer>
        <Arrow onClick={handlePrevDay}>{"<"}</Arrow>
        <DateParagraph onClick={() => dateInputRef.current?.showPicker()}>
          {getFormatedDate(date).date}
        </DateParagraph>
        <Arrow onClick={handleNextDay}>{">"}</Arrow>
      </DateContainer>
      <DayContainer>{getFormatedDate(date).day}</DayContainer>
      <DateInput type="date" onChange={handleChange} ref={dateInputRef} />
    </Wrapper>
  );
};
export default DatePicker;
