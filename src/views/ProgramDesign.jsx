import React, { useState } from 'react';

import { InformationCreationForm } from './InformationCreationForm';

export function ProgramDesign() {
  const [informations, setInformations] = useState([]);

  return (
    <>
      <ul>
        {informations.map((information) => (
          <li>
            {information.name}
          </li>
        ))}
      </ul>
      <InformationCreationForm
        onCreation={(newInformation) => setInformations([...informations, newInformation])}
      />
    </>
  );
}
