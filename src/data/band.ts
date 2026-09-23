export const BAND = {
  name: 'AMORPHIC',
  tagline: 'Post-metal / Atmospheric Rock',
  formed: 2016,
  origin: 'Portland, Oregon',
  bio: 'Born from the damp basements of the Pacific Northwest, AMORPHIC blends crushing riffs with ethereal soundscapes. Four musicians united by a love of volume, texture, and the space between notes. Their sound sits at the intersection of doom, post-rock, and shoegaze — heavy enough to move bodies, atmospheric enough to lose yourself in.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Music', href: '/music' },
  { label: 'Tour', href: '/tour' },
  { label: 'Band', href: '/band' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/736355/pexels-photo-736355.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const ABOUT_IMAGE =
  'https://images.pexels.com/photos/15864969/pexels-photo-15864969.jpeg?auto=compress&cs=tinysrgb&w=1280';

export const ABOUT_IMAGE_2 =
  'https://images.pexels.com/photos/894557/pexels-photo-894557.jpeg?auto=compress&cs=tinysrgb&w=800';

export interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const MEMBERS: Member[] = [
  {
    name: 'Elena Cross',
    role: 'Vocals / Guitar',
    image:
      'https://images.pexels.com/photos/15129779/pexels-photo-15129779.jpeg?auto=compress&cs=tinysrgb&w=900',
    bio: 'Founding member. Writes the lyrics, drives the melodies, and can scream loud enough to rattle the monitors.',
  },
  {
    name: 'Marcus Vale',
    role: 'Lead Guitar',
    image:
      'https://images.pexels.com/photos/6311811/pexels-photo-6311811.jpeg?auto=compress&cs=tinysrgb&w=900',
    bio: 'Self-taught guitarist with a background in classical composition. Layers the atmospheric textures that define the AMORPHIC sound.',
  },
  {
    name: 'Dario Rennick',
    role: 'Bass',
    image:
      'https://images.pexels.com/photos/29482191/pexels-photo-29482191.jpeg?auto=compress&cs=tinysrgb&w=900',
    bio: 'The low-end anchor. Spent a decade in jazz clubs before going dark. Plays a custom five-string through a wall of cabs.',
  },
  {
    name: 'Sasha Volkov',
    role: 'Drums',
    image:
      'https://images.pexels.com/photos/9010054/pexels-photo-9010054.jpeg?auto=compress&cs=tinysrgb&w=900',
    bio: 'Classically trained, ferociously loud. The rhythmic engine of the band, known for marathon-length fills and shattered sticks.',
  },
];

export interface Release {
  title: string;
  year: number;
  type: string;
  tracks: number;
  image: string;
  description: string;
  spotifyUrl: string;
  appleUrl: string;
}

export const RELEASES: Release[] = [
  {
    title: 'Veil of Static',
    year: 2025,
    type: 'Full-Length Album',
    tracks: 10,
    image:
      'https://images.pexels.com/photos/1918162/pexels-photo-1918162.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The newest record. A 52-minute journey through layered atmospheres and crushing crescendos.',
    spotifyUrl: '#',
    appleUrl: '#',
  },
  {
    title: 'Monochrome EP',
    year: 2023,
    type: 'EP',
    tracks: 5,
    image:
      'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A stripped-back exploration of the band\'s quieter side. Recorded live in two days.',
    spotifyUrl: '#',
    appleUrl: '#',
  },
  {
    title: 'The Fracture',
    year: 2021,
    type: 'Full-Length Album',
    tracks: 9,
    image:
      'https://images.pexels.com/photos/1613240/pexels-photo-1613240.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The breakthrough. A concept record about collapse and rebuilding, praised by critics across the underground.',
    spotifyUrl: '#',
    appleUrl: '#',
  },
  {
    title: 'Demo MMXVI',
    year: 2016,
    type: 'Demo',
    tracks: 4,
    image:
      'https://images.pexels.com/photos/613813/pexels-photo-613813.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The original four-track demo that started it all. Raw, unpolished, and still a fan favorite.',
    spotifyUrl: '#',
    appleUrl: '#',
  },
];

export interface TourDate {
  date: string;
  day: string;
  month: string;
  city: string;
  venue: string;
  status: 'available' | 'few-left' | 'sold-out';
  ticketUrl: string;
}

export const TOUR_DATES: TourDate[] = [
  {
    date: 'Oct 10, 2026',
    day: '10',
    month: 'OCT',
    city: 'Portland, OR',
    venue: 'Doug Fir Lounge',
    status: 'few-left',
    ticketUrl: '#',
  },
  {
    date: 'Oct 12, 2026',
    day: '12',
    month: 'OCT',
    city: 'Seattle, WA',
    venue: 'The Crocodile',
    status: 'sold-out',
    ticketUrl: '#',
  },
  {
    date: 'Oct 15, 2026',
    day: '15',
    month: 'OCT',
    city: 'San Francisco, CA',
    venue: 'The Independent',
    status: 'available',
    ticketUrl: '#',
  },
  {
    date: 'Oct 18, 2026',
    day: '18',
    month: 'OCT',
    city: 'Los Angeles, CA',
    venue: 'The Roxy',
    status: 'available',
    ticketUrl: '#',
  },
  {
    date: 'Oct 22, 2026',
    day: '22',
    month: 'OCT',
    city: 'Denver, CO',
    venue: 'Bluebird Theater',
    status: 'available',
    ticketUrl: '#',
  },
  {
    date: 'Oct 25, 2026',
    day: '25',
    month: 'OCT',
    city: 'Chicago, IL',
    venue: 'Thalia Hall',
    status: 'few-left',
    ticketUrl: '#',
  },
  {
    date: 'Oct 28, 2026',
    day: '28',
    month: 'OCT',
    city: 'Brooklyn, NY',
    venue: 'Music Hall of Williamsburg',
    status: 'sold-out',
    ticketUrl: '#',
  },
  {
    date: 'Oct 30, 2026',
    day: '30',
    month: 'OCT',
    city: 'Boston, MA',
    venue: 'Brighton Music Hall',
    status: 'available',
    ticketUrl: '#',
  },
];

export const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/248963/pexels-photo-248963.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1416969/pexels-photo-1416969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/167631/pexels-photo-167631.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5191480/pexels-photo-5191480.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/894557/pexels-photo-894557.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/10024790/pexels-photo-10024790.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1309599/pexels-photo-1309599.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/18100820/pexels-photo-18100820.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/15864969/pexels-photo-15864969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6270142/pexels-photo-6270142.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/10168230/pexels-photo-10168230.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/20064299/pexels-photo-20064299.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Spotify', href: '#', icon: 'spotify' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'Bandcamp', href: '#', icon: 'bandcamp' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
];

export const PRESS_QUOTES = [
  {
    quote: 'A wall of sound that collapses into beauty, then rebuilds itself louder than before.',
    source: 'Pitchfork',
  },
  {
    quote: 'AMORPHIC are the rare heavy band that understands the power of silence.',
    source: 'Metal Injection',
  },
  {
    quote: 'One of the most compelling live acts in the underground today.',
    source: 'KEXP',
  },
];
