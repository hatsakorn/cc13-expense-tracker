export const formatThaiCurrency = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'THB', currencyDisplay:'narrowSymbol'}).format(value);


