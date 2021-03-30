import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const CalendarDate = ({
  bookedAm,
  bookedPm,
  date,
  selected,
  tense,
  error,
  onClick: handleClick,
}) => {
  const dateStyles = classnames('md:w-20 md:h-20 grid grid-rows border', {
    'bg-green-200': selected && tense === 'future',
    'bg-green-400': selected && tense === 'past',
    'bg-gray-200': tense === 'past',
  })
  return (
    <div className={dateStyles} onClick={handleClick}>
      <span
        id="error"
        className={classnames({
          'bg-red-400': error && (bookedPm || bookedAm),
        })}
      />
      <div id="date" className="flex items-center justify-center text-lg">
        {date}
      </div>
      <div id="time-slots" className="grid grid-cols-2">
        <span id="am" className={`h-full ${bookedAm ? 'bg-yellow-500' : ''}`} />
        <span id="pm" className={`h-full ${bookedPm ? 'bg-purple-500' : ''}`} />
      </div>
    </div>
  )
}

CalendarDate.propTypes = {
  date: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  tense: PropTypes.oneOf(['past', 'future']),
  bookedAm: PropTypes.bool,
  bookedPm: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func,
}

CalendarDate.defaultProps = {
  selected: false,
  tense: 'future',
  bookedAm: false,
  bookedPm: false,
  error: false,
  onClick: undefined,
}

export default CalendarDate
