import { noop } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function InformationCreationForm({ onCreation = noop }) {
  const [newInformationName, setNewInformationName] = useState('');
  const { t } = useTranslation();

  const createInformation = () => {
    const newInformation = {
      name: newInformationName,
    };
    onCreation(newInformation);
    setNewInformationName('');
  };

  return (
    <form>
      <input
        type="text"
        value={newInformationName}
        onChange={(event) => setNewInformationName(event.target.value)}
      />
      <button
        type="button"
        onClick={createInformation}
      >
        {t('create-information-action')}
      </button>
    </form>
  );
}
