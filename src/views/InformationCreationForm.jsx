import { noop } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function InformationCreationForm({ onCreation = noop }) {
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const createInformation = () => {
    const newInformation = {
      name,
    };
    onCreation(newInformation);
    setName('');
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
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
