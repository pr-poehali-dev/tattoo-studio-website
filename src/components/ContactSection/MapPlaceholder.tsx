interface MapPlaceholderProps {
  className?: string;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ className }) => {
  return (
    <div
      className={`mt-6 p-2 rounded-lg overflow-hidden bg-card/30 ${className}`}
    >
      <div className="rounded-lg overflow-hidden h-[300px]">
        {/* Встраиваем реальную карту с местоположением */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.5037262302193!2d36.583477615731646!3d50.592935579497774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266af155752c6d%3A0x8bf08afb6c4ca4ee!2z0YPQuy4g0JrQvdGP0LfRjyDQotGA0YPQsdC10YbQutC-0LPQviwgMjUsINCR0LXQu9Cz0L7RgNC-0LQsINCR0LXQu9Cz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCAzMDgwMDI!5e0!3m2!1sru!2sru!4v1647270300421!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Карта местоположения тату студии ChernilnyyStyle"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPlaceholder;
