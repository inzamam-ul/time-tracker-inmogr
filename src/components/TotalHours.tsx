import React from "react";
import styled from "styled-components";

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

const TotalHour = styled.p`
  width: 171px;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  padding: 0;
  margin: 0;
  background: #c7f0df;
  border-radius: 10px;
  color: #2da771;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TotalHoursProps = {
  data: number;
};

const TotalHours: React.FC<TotalHoursProps> = ({ data }) => {
  return (
    <Wrapper>
      <Title>Total Number of hours </Title>
      <TotalHour>{data ? data : 0} Hour</TotalHour>
    </Wrapper>
  );
};
export default TotalHours;
