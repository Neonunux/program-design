import React, { useState } from 'react';

import { DataCreationForm } from './DataCreationForm';

export function ProgramDesign() {
  const [datas, setDatas] = useState([]);

  return (
    <>
      <ul>
        {datas.map((data) => (
          <li>
            {data.name}
          </li>
        ))}
      </ul>
      <DataCreationForm
        onCreation={(newData) => setDatas([...datas, newData])}
      />
    </>
  );
}
