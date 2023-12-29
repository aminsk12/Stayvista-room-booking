import { DateRange } from 'react-date-range'

const DatePicker = () => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
   //   ranges={[value]}

      direction='vertical'
      showDateDisplay={false}

    />
  )
}

export default DatePicker