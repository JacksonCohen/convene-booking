import { TriangleAlert } from 'lucide-react';
import { type Time } from './timeslot';

export type ReservationStatus = 'paid' | 'unpaid' | 'vip' | 'conflicted';

export interface BookedEvent {
  eventId: number;
  title: string;
  status: ReservationStatus;
  startTime: Time;
  durationMinutes: number;
}

interface EventProps {
  eventData: BookedEvent | null;
  showTitle: boolean;
}

export default function Event({ eventData, showTitle }: EventProps) {
  function renderWarningIcon() {
    if (eventData === null) return null;

    if (eventData.title.length > 0) {
      if (eventData.status === 'conflicted') {
        return <TriangleAlert color='black' fill='yellow' />;
      }
    }
  }

  return (
    <span className='font-medium flex gap-2'>
      {eventData && showTitle && <span className='ml-2'>{eventData.title}</span>}

      {renderWarningIcon()}
    </span>
  );
}
