export default function SkeletonLoader() {
  return (
    <div className='w-full p-4'>
      <div className='text-xl font-bold mb-2 bg-gray-300 h-6 animate-pulse'></div>
      <div className='grid grid-cols-1 gap-y-1'>
        {Array.from({ length: 48 }).map((_, index) => (
          <div
            key={index}
            className='relative p-2 border bg-gray-200 animate-pulse'
            style={{ height: '50px' }}
          >
            <div className='w-24 h-4 bg-gray-300 animate-pulse'></div>
            <div className='mt-1 h-4 bg-gray-300 animate-pulse'></div>
          </div>
        ))}
      </div>
    </div>
  );
}
