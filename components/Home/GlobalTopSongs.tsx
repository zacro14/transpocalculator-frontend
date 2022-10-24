import React from 'react'
import SonglistItem from '../SonglistItem'
import TextHeader from '../TextHeader'
import Link from 'next/link'
import globaltopchart from '@assets/data/getWorldChart.json'

const GlobalTopSongs = () => {
    function createGroups(arr: [] | any, numGroups: number) {
        const perGroup = Math.ceil(arr.length / numGroups)

        return new Array(numGroups).fill('').map((_, i) => {
            return arr.slice(i * perGroup, (i + 1) * perGroup)
        })
    }

    const groupby = createGroups(globaltopchart.slice(0, 20), 7)
    console.log(groupby)
    return (
        <section className="min-h-[80] text-white border-t border-t-1 border-slate-300 border-opacity-10 my-5">
            <div className="px-5">
                <TextHeader>Top Global Chart</TextHeader>
                <Link href={{ pathname: '/charts' }} passHref>
                    <span className="flex justify-end mx-auto container">
                        <a className="text-right hover:underline underline-offset-8 cursor-pointer">
                            See All
                        </a>
                    </span>
                </Link>
                <div className="snap-x flex container mx-auto overflow-x-auto">
                    {groupby.map((songs, index) => (
                        <div
                            key={index}
                            className="snap-center px-3 w-96  shrink-0 pb-5"
                        >
                            {songs.map((song: any, i: any) => (
                                <SonglistItem
                                    key={i}
                                    id={song.key}
                                    // order={index + 1 + i}
                                    title={song.title}
                                    subtitle={song.subtitle}
                                    image={song.images}
                                    artist={song?.artists}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GlobalTopSongs