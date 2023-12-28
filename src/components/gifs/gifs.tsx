import Image from 'next/image'
import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import { gifs } from '@/utils/const'

type Props = {
  value: number
}

const imageSize = isMobile
  ? { minW: 25, maxW: 40, minH: 50, maxH: 60 }
  : { minW: 50, maxW: 80, minH: 100, maxH: 120 }
const offsetX = 90
const offsetY = 70

export const Gifs: FC<Props> = ({ value }) => {
  const winsArr = [...Array(value)].map(
    () => gifs[getRandomNumber(gifs.length - 1)],
  )

  return (
    <div className="relative h-full">
      {winsArr.map((src, i) => {
        const { x, y } = getRandomPosition()
        const { maxW, minW, maxH, minH } = imageSize
        return (
          <div
            className="col-span-1 sm:col-span-1 md:col-span-1"
            style={{
              position: 'absolute',
              top: `${y}%`,
              left: `${x}%`,
              height: getRandomNumber(maxH, minH),
              width: getRandomNumber(maxW, minW),
            }}
            key={i}
          >
            <Image src={src} alt="my gif" priority />
          </div>
        )
      })}
    </div>
  )
}

const getRandomPosition = () => {
  const randomX = getRandomNumber(offsetX)
  const randomY = getRandomNumber(offsetY)
  return { x: randomX, y: randomY }
}
const getRandomNumber = (max: number, min = 0) =>
  Math.floor(Math.random() * (max + min) + min)
