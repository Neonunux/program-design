import React, { useState } from 'react';
import { without as withoutFp } from 'lodash/fp';

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
            <button
              type="button"
              onClick={() => setInformations(withoutFp([information]))}
            >
              remove
            </button>
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
