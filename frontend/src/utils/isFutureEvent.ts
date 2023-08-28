export const isFutureEvent = (dateTime: string): boolean => {
  const currentDate: string = `${new Date().toJSON()}`
  return dateTime > currentDate ? true : false
}
