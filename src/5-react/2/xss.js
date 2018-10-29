import React from 'react';

const title = '<script>alert(`Sie sind alle verhaftet!`)</script>'

// This is injection-safe:
export const xssEl = <h1>{ title }</h1>;