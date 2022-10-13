import React from "react";

const DataList = ({ submittedData }) => {
  return (
    <div className="DataList">
      {submittedData && (
        <ul>
          <li>Nome: {submittedData.name}</li>
          <li>Idade: {submittedData.age}</li>
          <li>Gênero: {submittedData.gender}</li>
        </ul>
      )}
    </div>
  );
};

export default DataList;
