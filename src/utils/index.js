export const converDate = (entry) => {
  const date = new Date(entry)
  return new Intl.DateTimeFormat('en-GB').format(date)
}
