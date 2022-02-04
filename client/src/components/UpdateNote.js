import React from 'react';
import { useParams } from 'react-router-dom';
export default function UpdateNote() {
    const params = useParams();
  return <div>
      <h1>Updating the note {params.id}</h1>
  </div>;
}
