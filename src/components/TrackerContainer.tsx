import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import styled from "styled-components";

import { firestore } from "../firebase/clientApp";
import Tracker from "./Tracker";
import TrackerFooter from "./TrackerFooter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-height: 746px;
  padding: 40px 38px;
  margin-bottom: 100px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  background: #c7f0df;
  border-radius: 5px;
  padding: 10px;
  border: none;
  color: #00502e;
  transition: all 0.3s;
  :hover {
    background: #8dfcce;
  }
`;

const Trackers = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
`;

const StyledSpinner = styled(Spinner)`
  position: absolute;
  /* height: 100vh; */
  padding: 100px;
  background: #c7f0dfa7;
`;

const TrackerContainer: React.FC = () => {
  const [dates, setDates] = useState<any>([]);
  const [adding, setAdding] = useState(false);
  const [loadData, setLoadData] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const handleAddNewDate = async () => {
    setAdding(true);

    try {
      const newDate = {
        date: new Date().toDateString(),
        startTime: "",
        endTime: "",
      };
      await addDoc(collection(firestore, "dates"), newDate);
      setLoadData((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }

    setAdding(false);
  };

  // console.log(`${doc.id} => ${doc.data()}`);

  const getDates = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(firestore, "dates"));
      const dates = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDates(dates);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDates();
  }, [loadData]);

  return (
    <Container>
      <Button onClick={handleAddNewDate}>
        {adding ? <Spinner name="circle" /> : "Add New Date"}
      </Button>
      <Trackers>
        {loading && <StyledSpinner name="line-scale" color="green" />}
        {dates.map((item: any) => (
          <Tracker key={item.id} setLoadData={setLoadData} item={item} />
        ))}
      </Trackers>
      <TrackerFooter dates={dates} />
    </Container>
  );
};
export default TrackerContainer;
