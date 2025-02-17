import './style.css';
import { getDisplayDateTime, getPalette } from './utils';

const Popup = () => {
  const { date, time, period } = getDisplayDateTime();
  const palette = getPalette(period);

  return (
    <div
      className="h-[100px] w-[240px] flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(images/${period}.png)` }}
    >
      <h2 style={{ color: palette }} className="mx-[0px] text-xl">
        {date}
      </h2>
      <h3 style={{ color: palette }} className="mt-[5px] mb-[0px] text-lg">
        {time}
      </h3>
    </div>
  );
};

export default Popup;
