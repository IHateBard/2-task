const RedLight = () => {
  return (
    <div className='red-light-container'>
      <svg
        width='601'
        height='954'
        viewBox='0 0 601 954'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g opacity='0.5' filter='url(#filter0_f_0_10)'>
          <circle cx='53.5' cy='406.5' r='155.5' fill='#961A1A' />
        </g>
        <defs>
          <filter
            id='filter0_f_0_10'
            x='-494'
            y='-141'
            width='1095'
            height='1095'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='196'
              result='effect1_foregroundBlur_0_10'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default RedLight;
