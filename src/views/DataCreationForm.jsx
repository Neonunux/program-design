import { noop } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function DataCreationForm({ onCreation = noop }) {
  const [newDataName, setNewDataName] = useState('');
  const { t } = useTranslation();

  const createData = () => {
    const newData = {
      name: newDataName,
    };
    onCreation(newData);
    setNewDataName('');
  };

  return (
    <form>
      <input
        type="text"
        value={newDataName}
        onChange={(event) => setNewDataName(event.target.value)}
      />
      <button
        type="button"
        onClick={createData}
      >
        {t('create-data-action')}
      </button>
    </form>
  );
}
