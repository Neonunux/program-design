import React, { useState } from 'react';

import { InformationCreationForm } from './InformationCreationForm';
import { RelationCreationForm } from './RelationCreationForm';

export function ProgramDesign() {
  const [informations, setInformations] = useState([]);
  const [relations, setRelations] = useState([]);

  return (
    <>
      <ul>
        {informations.map((information) => (
          <li key={information.name}>
            {information.name}
          </li>
        ))}
      </ul>
      <InformationCreationForm
        onCreation={(newInformation) => setInformations([...informations, newInformation])}
      />
      <ul>
        {relations.map((relation) => (
          <li>
            {relation.memberA}
            -
            {relation.memberB}
            -
            {relation.type}
          </li>
        ))}
      </ul>
      <RelationCreationForm
        informations={informations}
        onCreation={(newRelation) => setRelations([...relations, newRelation])}
      />
    </>
  );
}
