import { useEffect, useState } from 'react';
import { getMockData } from './utils';
import { type BookedEvent } from './components/event';
import DayColumn from './components/day-column';
import SkeletonLoader from './components/events-skeleton';

function App() {
  const [events, setEvents] = useState<Record<string, BookedEvent | null> | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMockData();
      setEvents(data);
    }

    fetchData();
  }, []);

  return <div>{events ? <DayColumn date='2024-07-27' events={events} /> : <SkeletonLoader />}</div>;
}

export default App;
