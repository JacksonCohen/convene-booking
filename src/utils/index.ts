import { type BookedEvent } from '../components/event';
import { type Time } from '../components/timeslot';
import { mockData } from '../data';

export function generateTimeslots() {
  const timeslots: Time[] = [];
  const currentTime = new Date();
  currentTime.setHours(0, 0, 0, 0);

  for (let i = 0; i < 48; i++) {
    const time = currentTime.toTimeString().substring(0, 5) as Time; // Format as HH:MM
    timeslots.push(time);
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  return timeslots;
}

export function getEventStyle(event: BookedEvent | null) {
  if (event === null) {
    return 'bg-gray-200';
  }

  switch (event.status) {
    case 'paid':
      return 'event-paid';
    case 'unpaid':
      return 'event-unpaid';
    case 'vip':
      return 'event-vip';
    case 'conflicted':
      return 'event-conflicted';
    default:
      return 'bg-gray-200';
  }
}

export function getMockData(): Promise<Record<string, BookedEvent | null>> {
  function getRandomMockData(): Record<string, BookedEvent | null> {
    const timeslots = generateTimeslots();
    const dataSets = Object.values(mockData);
    const randomSet = dataSets[Math.floor(Math.random() * dataSets.length)];

    const mockEvents: Record<string, BookedEvent | null> = {};

    randomSet.forEach((event) => {
      const startSlotIndex = timeslots.indexOf(event.startTime);
      if (startSlotIndex !== -1) {
        const durationSlots = Math.ceil(event.durationMinutes / 30);
        for (let index = 0; index < durationSlots; index++) {
          const slot = timeslots[startSlotIndex + index];

          if (slot) {
            mockEvents[slot] = {
              ...event,
              title: index === 0 ? event.title : '', // Only display title in the first slot
            };
          }
        }
      }
    });

    timeslots.forEach((slot) => {
      if (!mockEvents[slot]) {
        mockEvents[slot] = null;
      }
    });

    return mockEvents;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getRandomMockData());
    }, 1000); // 1 second delay to mimic data fetch
  });
}

export function convertTo12Hour(time: string): string {
  const [hour, minute] = time.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format, handle midnight as 12

  return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
}
