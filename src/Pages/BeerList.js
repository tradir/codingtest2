import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MaterialTable, { MTableToolbar } from "material-table";
const BeerList = ({ history }) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  //pr test;
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        const keys = [];
        const datas = [];
        for (const [key, value] of Object.entries(data[0])) {
          if (key === "name") keys.push({ title: key, field: key });
        }
        for (const [key, value] of Object.entries(data)) {
          let obj = {};
          for (const [k, v] of Object.entries(value)) {
            if (Object.keys(value).includes(k)) obj[k] = v;
          }
          // console.log(obj);
          datas.push(obj);
        }
        setColumns(keys);
        // setData(data[1]);
        setData(datas);
      });
  }, []);
  return (
    <Wrapper className="BeerList">
      <MaterialTable columns={columns} data={data} />
      {/* <MaterialTable
        title="Render Image Preview"
        columns={[
          {
            title: "Avatar",
            field: "imageUrl",
            render: (rowData) => (
              <img
                src={rowData.imageUrl}
                style={{ width: 40, borderRadius: "50%" }}
              />
            ),
          },
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
            imageUrl:
              "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
          },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
            imageUrl:
              "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
          },
        ]}
      /> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`;
export default BeerList;
