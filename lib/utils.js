import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export const formatDate = (date, format = 'LL') => {
    return dayjs(date).format(format)
}

export const pick = (obj, keys) => {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key]
        return acc
    }, {})
}
