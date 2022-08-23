const renderTime = (date: string) => {
    var dateee = new Date(date).toJSON()
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/-/g, '/')
}
export const dateFormat = (date: string, type?: string): string => {
    date = renderTime(date)
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const mon = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    return type == 'year' ? `${year}` : `${mon}-${day}`
}