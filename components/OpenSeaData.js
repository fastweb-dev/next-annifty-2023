import useSWR from 'swr'
import Loader from "react-loader-spinner";
import { SRLWrapper } from "simple-react-lightbox";

const url = 'https://api.opensea.io/'

const fetcher = url => fetch(url, {
  method: "GET",
  headers: {
    "X-API-KEY": "db1e265f5fbe430596fe942eedc1c9d2"
  }}).then(res => res.json())

const options = {
  settings: {
    disableKeyboardControls: true,
    disablePanzoom: true,
    disableWheelControls: true,
  },
  caption: {
    captionAlignment: 'center',
    captionColor: '#D1FAE5',
    captionTextTransform: 'capitalize',
    showCaption: true
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false
  },
  thumbnails: {
    showThumbnails: false
  },
};

const OpenSeaData = ({ ownerAddress, collection }) => {
  const path = `api/v1/assets?owner=${ownerAddress}&order_direction=desc&offset=0&limit=50&collection=${collection}`
  const { data, error } = useSWR(url + path, fetcher)

  if (error) return (
    <div className='my-24'>
      <h2 className='text-center italic text-gray-500'>Something went wrong!</h2>
    </div>
  )
  if (!data) return (
    <div className='h-screen flex items-center justify-center -mt-24 mx-auto'>
      <Loader
        type="Puff"
        color="#10B981"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  )

  const assets = data.assets

  // console.log(data)

  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap'>
      {assets.map(asset => {

        return (
          <>
            {asset.image_url
              ?
              <SRLWrapper options={options} key={asset.id}>
                <div className='art-container relative m-8'>
                  <a href={asset.image_url ? `${asset.image_url}=s1000` : "/img-not-found.png"}>
                    <img
                      src={asset.image_url}
                      alt={asset.name ? asset.name : 'Media not found'}
                      className='image shadow-lg'
                      onError={e => { e.currentTarget.src = "/img-not-found.png"; }}
                    />
                  </a>

                  <div className='mt-2'>
                    <h2 className='art-name text-green-900 dark:text-green-300 font-semibold capitalize'>{asset.name ? asset.name : 'Title not found'}</h2>
                    <a href={`${asset.permalink}?ref=0x33a2e518374715dceac8c8477e7c579d244e7eb7`} target='_blank' rel='noopener noreferrer'>
                      <p className='text-xs text-green-600 dark:text-green-100 capitalize underline'>View details</p>
                    </a>
                  </div>
                </div>
              </SRLWrapper>
              :
              null
            }
          </>
        )
      })}

      <style jsx>{`
        img {
          width: auto;
          height: 250px;
          opacity: 1;
          transition: .5s ease;
          backface-visibility: hidden;
        }
        .middle {
          transition: .5s ease;
          opacity: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: translate(-0%, -0%);
          -ms-transform: translate(-0%, -0%);
        }
        .art-container:hover .image {
          opacity: 0.5;
        }
        .art-container:hover .middle {
          opacity: 1;
        }
        .art-container .art-name {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        @media (max-width:640px) {
          img {
            height: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default OpenSeaData