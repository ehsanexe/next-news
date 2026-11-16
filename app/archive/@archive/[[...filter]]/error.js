"use client"

import React from 'react'


export default function FilterError({ error }) {
  return (
    <div id="filter-error">
        <p>{error.message}</p>
    </div>
  )
}
