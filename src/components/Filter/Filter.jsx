import React from 'react'
import PropTypes from 'prop-types'
import css from './Filter.module.css'

export default function Filter({value, handleChange}) {
  return (
      <div className={css.filter}>
          <label className={css.fiterLabel}>Find contacts by name</label>
          <input className={css.fiterInput} type="text" value={value} name="filter" id="" onChange={handleChange} />
    </div>
  )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}.isRequired;


