import React from "react";
import styled from "styled-components";
import { Date } from "../utils/type";

const TrackerFooterContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgba(45, 167, 113, 0.5);
  color: #00502e;
`;

const FooterItem = styled.div`
  /* ... */
`;

const SpanLeft = styled.span`
  margin-right: 30px;
`;

const SpanRight = styled.span`
  margin-right: 0px;
`;

type TrackerFooterProps = {
  dates: Date[];
};

const TrackerFooter: React.FC<TrackerFooterProps> = ({ dates }) => {
  const totalHour = dates.reduce(
    (prev, curr) => prev + (parseInt(curr.endTime) - parseInt(curr.startTime)),
    0
  );

  return (
    <TrackerFooterContainer>
      <FooterItem>
        <SpanLeft>Total Day</SpanLeft>
        <SpanRight>{dates.length} days</SpanRight>
      </FooterItem>
      <FooterItem>
        <SpanLeft style={{ marginRight: 30 }}>Total Hours</SpanLeft>
        <SpanRight>{totalHour} Hours</SpanRight>
      </FooterItem>
    </TrackerFooterContainer>
  );
};
export default TrackerFooter;
