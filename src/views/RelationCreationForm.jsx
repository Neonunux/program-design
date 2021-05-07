import { noop } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const relationTypes = [
  'equality',
];

export function RelationCreationForm({
  onCreation = noop,
  informations = [],
}) {
  // TODO: Put default values?
  // FIX: onChange is not called when the input is created.
  // therefore the state is not mutated.

  const [memberA, setMemberA] = useState(informations[0]?.name ?? '');
  const [memberB, setMemberB] = useState(informations[1]?.name ?? '');
  const [type, setType] = useState(relationTypes[0] ?? '');
  const { t } = useTranslation();

  const createRelation = () => {
    if (!(memberA && memberB && type)) {
      return;
    }
    const newRelation = {
      memberA,
      memberB,
      type,
    };
    onCreation(newRelation);
    setMemberA('');
    setMemberB('');
    setType('');
  };

  return (
    <form>
      <select
        value={memberA}
        onChange={(event) => setMemberA(event.target.value)}
      >
        {informations.map((information) => (
          <option
            key={information.name}
            value={information.name}
          >
            {information.name}
          </option>
        ))}
      </select>
      <select
        value={memberB}
        onChange={(event) => setMemberB(event.target.value)}
      >
        {informations.map((information) => (
          <option
            key={information.name}
            value={information.name}
          >
            {information.name}
          </option>
        ))}
      </select>
      <select
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        {relationTypes.map((relationType) => (
          <option
            key={relationType}
            value={relationType}
          >
            {relationType}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={createRelation}
      >
        {t('create-relation-action')}
      </button>
    </form>
  );
}
