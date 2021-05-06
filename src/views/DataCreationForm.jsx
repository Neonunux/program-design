import { noop } from 'lodash';
import React, { useState } from 'react';

export function DataCreationForm({ onCreation = noop }) {
  const [newDataName, setNewDataName] = useState('');

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
        create data
      </button>
    </form>
  );
}
