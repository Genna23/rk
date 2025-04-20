import { useState } from 'react';

const categories = [
  { name: 'Консоли', value: 'console' },
  { name: 'Столы', value: 'table' },
  { name: 'Стулья', value: 'chair' },
  { name: 'Комоды и буфеты', value: 'commode' },
  { name: 'Шкафы и гардеробы', value: 'wardrobe' },
  { name: 'Кровати и изголовья', value: 'bed' },
  { name: 'Мягкая мебель', value: 'soft-furniture' },
  { name: 'Панели и облицовка', value: 'decor-panel' },
  { name: 'Индивидуальные проекты', value: 'custom-project' },
  { name: 'Двери', value: 'doors' },
];

export default function ProjectGallery({ stories }) {
  const [selected, setSelected] = useState(null);

  const filtered = selected
    ? stories.filter(s => s.content.category?.includes(selected))
    : stories;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelected(null)}
          className={`px-4 py-2 rounded ${
            selected === null ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Все
        </button>
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelected(cat.value)}
            className={`px-4 py-2 rounded ${
              selected === cat.value ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((story, index) => {
          const imageUrl = story.content.images?.[0]?.filename || '';
          const title = story.content.title;
          const slug = story.full_slug;
          const isWide = index % 6 === 4 || index % 6 === 5;

          return (
            <a
              key={story.uuid}
              href={`/${slug}`}
              className={`block ${isWide ? 'col-span-2' : ''}`}
            >
              <div className="space-y-2 cursor-pointer portfolio-item relative w-full overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={imageUrl}
                    alt="Портфолио"
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-2">
                    <span className="text-white text-[2.5rem] font-medium">{title}</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
