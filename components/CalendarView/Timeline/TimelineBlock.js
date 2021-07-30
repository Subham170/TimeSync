import { differenceInMinutes, format, isSameHour, set } from 'date-fns';
import { colorLookup, getClosestIndexForDayViewEvents } from '../../../utils/helpers';

const TimelineBlock = ({
  index,
  baseZIndex = 1,
  event,
  isMultiday = false
}) => {
  const getBlockHeight = (event) => {
    if (!isMultiday) {
      const basePixel = 11
      const [startHour, startMinuteSeg] = getClosestIndexForDayViewEvents(new Date(event.startDate))
      const [endHour, endMinuteSeg] = getClosestIndexForDayViewEvents(new Date(event.endDate))

      if (
        (startHour === endHour) &&
        (startMinuteSeg === endMinuteSeg)
      ) {
        return 22
      }

      const start = set(new Date(event.startDate), { hours: startHour, minutes: startMinuteSeg })
      const end = set(new Date(event.endDate), { hours: endHour, minutes: endMinuteSeg })

      return (Math.ceil(differenceInMinutes(end, start) / 15) * basePixel)
    } else {
      return 22
    }
  }

  const blockSubtitle = (blockHeight, isMultiday) => {
    if (!isMultiday) {
      if (blockHeight > 22) {
        const isStartAndEndSameHour = isSameHour(
          new Date(event.startDate),
          new Date(event.endDate)
        )

        const startTime = isStartAndEndSameHour
          ? format(new Date(event.startDate), 'K')
          : format(new Date(event.startDate), 'K:mm aaa')

        const endTime = format(new Date(event.endDate), 'K:mm aaa')

        return (
          <div className="pt-0.5">
            {`${startTime} - ${endTime}`}
          </div>
        )
      } else {
        return `, ${format(new Date(event.startDate), 'K aaa')}`
      }
    }
  }

  return (
    <div
      style={{ height: `${getBlockHeight(event)}px`}}
      className={`
        relative
        -top-px
        rounded-md
        text-xs
        text-white
        overflow-x-hidden
        flex-1
        px-2.5
        pt-0.5
        cursor-pointer
        ${colorLookup[event.themeColor]}
        ${(!isMultiday && index > 0) && 'border-l border-white -ml-2'}
        ${`z-${baseZIndex + index}`}
      `}
    >
      <div className="absolute min-w-0 font-normal truncate">
        {`${event.title}`}
        {blockSubtitle(getBlockHeight(event), isMultiday)}
      </div>
    </div>
  )
}

export default TimelineBlock