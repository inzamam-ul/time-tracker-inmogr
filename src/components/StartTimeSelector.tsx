import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 134px;
  height: 40px;
  color: #2da771;
  border: 1px solid #32a071;
  border-radius: 10px;
  padding: 10px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;

const Title = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

type StartTimeSelectorProps = {
  data: string;
  updateDateParameter: (data: any) => void;
};

const StartTimeSelector: React.FC<StartTimeSelectorProps> = ({
  data,
  updateDateParameter,
}) => {
  const [startTime, setStartTime] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartTime(e.target.value);
    updateDateParameter({ startTime: e.target.value });
  };

  return (
    <Wrapper>
      <Title>Start Time </Title>
      <Select defaultValue={startTime} onChange={handleChange}>
        <option value="" hidden>
          Select Time
        </option>
        {[...Array(24)].map((item, i) => (
          <option key={i} value={i + 1}>{`${(i % 12) + 1}: 00 ${
            i + 1 <= 12 ? "AM" : "PM"
          }`}</option>
        ))}

        {/* <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option> */}
      </Select>
    </Wrapper>
  );
};
export default StartTimeSelector;
