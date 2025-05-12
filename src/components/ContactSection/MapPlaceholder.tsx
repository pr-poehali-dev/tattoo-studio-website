
interface MapPlaceholderProps {
  className?: string;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ className }) => {
  return (
    <div className={`mt-6 p-2 rounded-lg overflow-hidden bg-card/30 ${className}`}>
      <div className="rounded-lg overflow-hidden h-[300px]">
        {/* В реальном проекте здесь можно было бы встроить карту с API Яндекс или Google */}
        <div className="w-full h-full bg-card flex items-center justify-center text-neutral-gray">
          <p className="text-sm">
            Здесь будет карта с расположением студии<br />
            <span className="text-xs">(API карт будет интегрирован в продакшене)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
