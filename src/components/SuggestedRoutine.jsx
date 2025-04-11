import { FaSun, FaMoon } from 'react-icons/fa';

export default function SuggestedRoutine({ categoryKey }) {
  const routines = {
    skincare: {
      morning: ['Cleanser', 'Serum', 'Moisturizer', 'Sunscreen'],
      night: ['Cleanser', 'Toner', 'Night Serum', 'Night Cream'],
    },
    haircare: {
      morning: ['Shampoo', 'Conditioner', 'Hair Serum'],
      night: ['Scalp Massage', 'Hair Mask'],
    },
    bodycare: {
      morning: ['Body Wash', 'Exfoliate', 'Moisturizer'],
      night: ['Soothing Bath', 'Body Oil'],
    },
    wellness: {
      morning: ['Lukewarm Water', 'Herbal Tea', 'Multivitamins'],
      night: ['Warm Milk', 'Meditation', 'Vitamin Gummies'],
    },
  };

  const routine = routines[categoryKey?.toLowerCase()?.trim()];
  if (!routine) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-16">
      <h3 className="text-2xl font-prata text-[#006A71] mb-6 text-center">
        🧴 Suggested Routine for {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Morning */}
        <div className="bg-[#F2EFE7] p-4 rounded-lg border-l-4 border-[#48A6A7]">
          <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#006A71]">
            <FaSun /> Morning Routine
          </h4>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            {routine.morning.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Night */}
        <div className="bg-[#F2EFE7] p-4 rounded-lg border-l-4 border-[#006A71]">
          <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#48A6A7]">
            <FaMoon /> Night Routine
          </h4>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            {routine.night.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
