const API_URL = 'https://tombheads-auction-stats.vercel.app/api'

export const fetchArtists = async () => (await fetch(`${API_URL}/fetchArtists`)).json()

export const fetchArtistNFTs = async (id: string) => (await fetch(`${API_URL}/fetchNfts?_id=${id}`)).json()
