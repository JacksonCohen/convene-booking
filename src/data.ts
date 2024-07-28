import { type BookedEvent } from './components/event';

export const mockData: Record<string, BookedEvent[]> = {
  set1: [
    {
      eventId: 1,
      startTime: '08:00',
      durationMinutes: 30,
      status: 'paid',
      title: 'Project Update',
    },
    {
      eventId: 2,
      startTime: '09:30',
      durationMinutes: 60,
      status: 'unpaid',
      title: 'Training',
    },
    { eventId: 3, startTime: '12:00', durationMinutes: 90, status: 'vip', title: 'Client Call' },
    {
      eventId: 4,
      startTime: '13:30',
      durationMinutes: 120,
      status: 'conflicted',
      title: 'Design Review',
    },
  ],
  set2: [
    { eventId: 5, startTime: '08:30', durationMinutes: 60, status: 'paid', title: 'Team Sync' },
    {
      eventId: 6,
      startTime: '11:00',
      durationMinutes: 90,
      status: 'unpaid',
      title: 'Sales Call',
    },
    { eventId: 7, startTime: '12:30', durationMinutes: 30, status: 'vip', title: 'Planning' },
    {
      eventId: 8,
      startTime: '13:00',
      durationMinutes: 120,
      status: 'conflicted',
      title: 'Catered Lunch',
    },
  ],
  set3: [
    { eventId: 9, startTime: '09:00', durationMinutes: 90, status: 'paid', title: 'Standup' },
    {
      eventId: 10,
      startTime: '12:30',
      durationMinutes: 30,
      status: 'unpaid',
      title: 'Team Sync',
    },
    {
      eventId: 11,
      startTime: '14:00',
      durationMinutes: 60,
      status: 'vip',
      title: 'Bonding Exercise',
    },
    {
      eventId: 12,
      startTime: '16:00',
      durationMinutes: 60,
      status: 'conflicted',
      title: 'Workshop',
    },
  ],
};
