import { doc, setDoc } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { firestore } from "../firebase/clientApp";
import { Date } from "../utils/type";
import DatePicker from "./DatePicker";
import EndTimeSelector from "./EndTimeSelector";
import StartTimeSelector from "./StartTimeSelector";
import TotalHours from "./TotalHours";

type TrackerProps = {
  item: Date;
  setLoadData: (prev: boolean) => void;
};

const TrackerItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid rgba(45, 167, 113, 0.5);
`;

const Tracker: React.FC<TrackerProps> = ({ item, setLoadData }) => {
  const { date, startTime, endTime, id } = item;

  const updateDateParameter = async (data: any) => {
    try {
      console.log({ ...data });
      const dateDocRef = doc(firestore, "dates", id);
      await setDoc(
        dateDocRef,
        {
          ...data,
        },
        { merge: true }
      );
      setLoadData((prev: boolean) => !prev);
    } catch (error: any) {}
  };

  return (
    <TrackerItemContainer>
      <DatePicker data={date} updateDateParameter={updateDateParameter} />
      <StartTimeSelector
        data={startTime}
        updateDateParameter={updateDateParameter}
      />
      <EndTimeSelector
        data={endTime}
        updateDateParameter={updateDateParameter}
      />
      <TotalHours data={parseInt(endTime) - parseInt(startTime)} />
    </TrackerItemContainer>
  );
};
export default Tracker;
