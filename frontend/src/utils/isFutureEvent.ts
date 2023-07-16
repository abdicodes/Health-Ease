export const isFutureEvent = (dateTime: string): boolean => {
  const currentDate: Date = new Date()
  const parsedDate: string = `${currentDate.getFullYear()}-
                                ${currentDate.getMonth()}-
                                ${currentDate.getDate()}`

  return dateTime > parsedDate ? true : false
}
