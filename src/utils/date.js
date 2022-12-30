export const formatShortMonthShortYear = value => 
new Intl.DateTimeFormat('en-US',{month:'short', year: '2-digit' }).format(value);