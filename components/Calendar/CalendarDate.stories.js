import React from 'react'

import CalendarDate from './CalendarDate'

export default {
  title: 'Calendar Date',
  component: CalendarDate,
}
const Template = args => <CalendarDate {...args} />

export const Basic = Template.bind({})

Basic.args = {
  date: '1',
}
