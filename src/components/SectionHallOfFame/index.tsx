import { fetchArtistNFTs, fetchArtists } from '@components/SectionHallOfFame/services'
import { createSignal, createResource } from 'solid-js'

const SectionHallOfFame = () => {
  const [artistId, setArtistId] = createSignal()
  const [artists] = createResource(fetchArtists)
  const [artist] = createResource(artistId, setArtistId)

  return (
    <section>
      <h2>Hall of fame</h2>
      <span>{artists.loading && 'Loading...'}</span>
      <div>
        <pre>{JSON.stringify(artists(), null)}</pre>
      </div>
    </section>
  )
}

export default SectionHallOfFame
