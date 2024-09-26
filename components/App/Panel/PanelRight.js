import Image from 'next/image';
import IconButton from '../../Common/Button/IconButton';

const PanelRight = () => {
  const panelRightItems = [
    {
      label: 'Calendar',
      src: '/calLogo.png'
    },
    {
      label: 'Keeps',
      src: '/google-keep.png'
    },
    {
      label: 'Tasks',
      src: '/tasksLogo.png'
    },
    {
      label: 'Contact',
      src: '/contlogo.png'
    }
  ]

  return (
    <div className="flex flex-col items-center py-2 space-y-4 border-l min-w-56 bg-gray-400 mr-4 ">
      {
        panelRightItems.map(({label, src}, i) => {
          return (
            <div key={i}>
              <IconButton
                ink="white"
                size="medium"
                label={label}
                tooltipLocation="left"
                imgComponent={
                  <Image src={src} width="20px" height="20px" 
                  style={{objectFit: 'contain',border: '1px solid black'}}
                  alt="panel-icon" className="z-10" />
                }
                onClickHandler={() => {}}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default PanelRight;