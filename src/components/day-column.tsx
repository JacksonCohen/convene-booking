import { generateTimeslots } from '../utils';
import { type BookedEvent } from './event';
import TimeSlot from './timeslot';

interface DayColumnProps {
  date: string;
  events: Record<string, BookedEvent | null>;
}

export default function DayColumn({ date, events }: DayColumnProps) {
  const timeslots = generateTimeslots();

  return (
    <div className='w-full p-4'>
      <div className='text-xl font-bold mb-2'>{date}</div>
      <div className='grid grid-cols-1 gap-y-1'>
        {timeslots.map((time) => {
          const event = events[time];
          // Determine if the event title should be displayed (only in the first slot)
          const displayTitle = event && event.title;

          return (
            <TimeSlot key={time} time={time} event={event} showTitle={Boolean(displayTitle)} />
          );
        })}
      </div>
    </div>
  );
}
