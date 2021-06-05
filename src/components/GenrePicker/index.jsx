import React, { Fragment, useState } from 'react';
import GenreOption from '../GenreOption';

const GenrePicker = ({ genreGroups, onSelect, genrePicked }) => {
  return (
    <Fragment>
      {genreGroups.map((group) => (
        <GenreOption
          key={group.id}
          genre={group}
          onSelect={onSelect}
          isSelected={genrePicked === group.id}
        />
      ))}
    </Fragment>
  );
};

export default GenrePicker;
