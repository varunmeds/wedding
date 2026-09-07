// ─────────────────────────────────────────────────────────────
//  Edit everything about your wedding here. No other file needed.
//
//  Anything marked TODO still needs your real details before the
//  site goes out to guests.
// ─────────────────────────────────────────────────────────────

export const couple = {
  partnerOne: 'Tanvi Madaiah',
  partnerTwo: 'Varun Medappa',
  // Shown in the hero. Keep it short.
  tagline: 'are getting married',
  date: 'Saturday & Sunday, the 19th & 20th of December, 2026',
  // Machine-readable start of the wedding, used by the countdown timer.
  // Format: 'YYYY-MM-DDTHH:MM:SS' in local time.
  dateISO: '2026-12-19T09:00:00',
  location: 'Palm Valley, Coorg',
}

// A Kodava (Codava) wedding is conducted by the elders of the family
// (there is no priest) and unfolds across three principal ceremonies.
// Adjust the days, times and wording to match your own celebration.
export const ceremonies = {
  heading: 'The Ceremonies',
  intro:
    'Ours is a Kodava wedding: a celebration led by the elders of our families, steeped in the traditions of Coorg. We would be honoured to have you with us for each of the three ceremonies.',
  // Each card shows `intro` (one string or a list of paragraphs, customs
  // named in plain English) and the `attire` box. The card title links to a
  // fuller Kodagu heritage write-up for the curious.
  events: [
    {
      kodavaName: 'Oorkuduva',
      link: 'https://kodavaclan.com/kodaguheritage/mangala-padathi/#Ooor_Kuduvo',
      day: 'Saturday, 19th December',
      when: 'Evening',
      time: '', // e.g. '6:00 pm'; hidden while empty
      image: '/illustrations/oorkuduva.png',
      intro: [
        'Oorkuduva means the coming together of the village. In Kodava tradition a wedding is not made by a priest but by the community: relatives, neighbours and well-wishers gather the evening before to prepare for it, and their presence is itself the first blessing. The evening opens with the lighting of the sacred oil lamp and a prayer to the goddess Kaveri and Lord Iguthappa, the deities of Coorg. Each of us is then led to the lamp to receive our parents’ blessings, bowing three times at their feet.',
        'The lamp stands for our ancestors, whose blessings matter to us above all else, and everything that follows over the two days happens in its light. It is the quietest and most personal of the ceremonies, and the one that binds the two families together before the wedding itself. The evening closes with a traditional Kodava feast and folk dances, which we hope you will join.',
      ],
      attire: {
        dressCode: 'Formal',
        men: 'Suits, Blazers',
        women: 'Gowns, Dresses, Indo-Western',
      },
    },
    {
      kodavaName: 'Muhurtha',
      link: 'https://kodavaclan.com/kodaguheritage/mangala-padathi/#Dampathi_Muhurtha',
      day: 'Sunday, 20th December',
      when: 'Morning',
      time: '', // e.g. '6:00 pm'; hidden while empty
      image: '/illustrations/muhurtha.png',
      intro: [
        'The Muhurtha is the wedding, held at the auspicious hour chosen for us. It begins at the entrance with the cutting of banana stems: an elder from each family circles them three times and fells each with a single stroke of the sword, an old show of the strength and protection a family promises to the couple. The groom is then escorted to the stage by his best man, and the bride by her maid of honour, each with lamp bearers going before them.',
        'At the stage we offer prayers at the sacred lamp, and the elders of both families hold the formal dialogue in which the bride is given and received. In a Kodava wedding it is their word, spoken before the ancestors, that makes us husband and wife. Then come the blessings, parents first, then relatives, then every guest in turn: rice sprinkled over our heads for abundance, a sip of milk for purity, and a small red bag of coins for prosperity. The marriage is sealed not by ritual but by the blessings of everyone present, which is why your being there means so much to us.',
      ],
      attire: {
        dressCode: 'Traditional',
        men: 'Kurtas, Sherwanis',
        women: 'Lehengas, Saris',
      },
    },
    {
      kodavaName: 'Ganga Pooja',
      link: 'https://kodavaclan.com/kodaguheritage/mangala-padathi/#Neer_Edpo_Ganga_Pooje',
      day: 'Sunday, 20th December',
      when: 'Evening',
      time: '', // e.g. '6:00 pm'; hidden while empty
      image: '/illustrations/ganga-pooje.png',
      intro: [
        'Ganga Pooja, the last of the three ceremonies, closes the wedding. In the evening the groom’s mother leads the bride to the well, where she offers a prayer to Kaveri and draws water. She then carries it back to the hall while the groom’s family surrounds her, dancing in front of her and playfully slowing her way.',
        'In Coorg water is life itself, for this is the land where the river Kaveri is born, and the bride carrying it into her new family is the oldest image of a Kodava marriage. The dancing that blocks her path is a test of patience and good humour, met with grace, and it symbolises her welcome into the groom’s family and the beginning of her place within it. When she reaches the hall and receives the elders’ blessings, the wedding is complete, and the celebrations carry on late into the night.',
      ],
      attire: {
        dressCode: 'Festive',
        men: 'Suits, Smart Casual, Kurtas',
        women: 'Dresses, Indo-Western, Salwar Suits',
      },
    },
  ],
}

export const venue = {
  heading: 'Venue & Travel',
  name: 'Palm Valley',
  address: 'Palm Valley, near Gonikoppal, Kodagu (Coorg), Karnataka',
  // Opens in Google Maps when the button / map is clicked.
  mapsLink: 'https://maps.google.com/?q=Palm+Valley+Gonikoppal+Coorg',
  // Embedded interactive map (no API key needed).
  mapEmbed:
    'https://maps.google.com/maps?q=Palm+Valley+Gonikoppal+Coorg&z=12&output=embed',
  travel: [
    {
      title: 'By Air',
      detail:
        'Kannur (CNN) is the nearest airport, roughly 2½ hrs by road. Mangaluru (IXE) is about 4 hrs, and Bengaluru (BLR) about 6 hrs. Kannur and Mangaluru are the easier arrivals if you can find a flight.',
    },
    {
      title: 'By Road',
      detail:
        'Palm Valley is in South Kodagu, near Gonikoppal. From Bengaluru it is roughly 6 hrs via Mysuru, Hunsur and Kushalnagar. Mysuru itself is about 3 hrs away. The last stretch is hilly and best driven in daylight.',
    },
    {
      title: 'Getting Around',
      detail:
        'Cabs are scarce once you are in Kodagu, so please arrange your airport transfer or local taxi in advance rather than on the day. If you are driving, fuel up at Gonikoppal, and note that mobile signal can be patchy in the estates.',
    },
  ],
}

// Where guests can stay. Kodagu fills up fast in December, so the
// earlier these are shared, the better.
//
// These are real, well-reviewed places near the venue, ordered by drive
// time. Ratings were checked in September 2026; they drift, so re-check
// before you send the link around. Drive times are approximate: the venue
// is at Athur, about 2 km from Gonikoppa on the Polibetta road.
export const stay = {
  heading: 'Where to Stay',
  intro:
    'Our celebration runs across two days, so we would love for you to stay the night. December is peak season in Kodagu, so please book early. A few places we can recommend, nearest first.',
  options: [
    {
      name: 'NaadMane Homestay',
      area: 'Gonikoppal',
      drive: '~10 min',
      rating: '4.0',
      ratingNote: 'Tripadvisor · #1 of 7 in Gonikoppal',
      detail:
        'A proper Kodava homestay just down the road from us, known for its home-cooked Kodava food and the family who run it. The closest thing to staying with relatives.',
      link: 'https://www.google.com/maps/search/?api=1&query=NaadMane+Homestay+Gonikoppal+Coorg',
    },
    {
      name: 'The Porcupine Castle Resort',
      area: 'Hanchikad, Pollibetta',
      drive: '~15 min',
      rating: '4.5',
      ratingNote: '960+ reviews · #1 of 6 in Pollibetta',
      detail:
        'Valley-view rooms with balconies looking out over the hills, about 5 km from the venue. Consistently the best-reviewed mid-range option this close by.',
      link: 'https://www.google.com/maps/search/?api=1&query=The+Porcupine+Castle+Resort+Pollibetta+Coorg',
    },
    {
      name: 'Amã Plantation Trails',
      area: 'Pollibetta',
      drive: '~15 min',
      rating: '4.3',
      ratingNote: '400+ reviews · IHCL / Taj',
      detail:
        'Restored heritage planters’ bungalows set inside the old Tata Coffee estates, each with its own cook and butler. Characterful rather than resort-like, and very close.',
      link: 'https://www.google.com/maps/search/?api=1&query=Ama+Plantation+Trails+Coorg+Pollibetta',
    },
    {
      name: 'The Yellow Bamboo Resort & Spa',
      area: 'Koodai, Ponnampet',
      drive: '~15 min',
      rating: '4.2',
      ratingNote: 'Google · 2,000+ reviews',
      detail:
        'A full-service resort just off the Gonikoppal–Ponnampet road, with a pool, spa and plantation walks. Roomy and well run, and a good pick if you want resort comforts without a long drive.',
      link: 'https://www.google.com/maps/search/?api=1&query=The+Yellow+Bamboo+Resort+and+Spa+Ponnampet+Coorg',
    },
    {
      name: "The Road's End",
      area: 'Rudrabeedu, Virajpet',
      drive: '~20 min',
      rating: '4.5',
      ratingNote: 'Google · 460+ reviews · pet-friendly',
      detail:
        'Riverside cottages tucked into a coffee estate between Gonikoppal and Virajpet. Quiet, green and homely, with meals cooked on site. A favourite with families and anyone travelling with a dog.',
      link: "https://www.google.com/maps/search/?api=1&query=The+Road's+End+Rudrabeedu+Virajpet+Coorg",
    },
    {
      name: "Nomad's Nook",
      area: 'Rudrabeedu, Virajpet',
      drive: '~20 min',
      rating: '4.7',
      ratingNote: 'Google · 160+ reviews',
      detail:
        'Six cottages around a pond and a stretch of river, right next door to The Road\'s End. Rustic in the best way: bonfires, birdsong, and the highest-rated stay on this list.',
      link: "https://www.google.com/maps/search/?api=1&query=Nomad's+Nook+Rudrabeedu+Virajpet+Coorg",
    },
    {
      name: 'Coorg Cliffs Resort & Spa',
      area: 'Ammathi',
      drive: '~25 min',
      rating: '4.5',
      ratingNote: 'Google · 4,500+ reviews',
      detail:
        'The big crowd-pleaser of the area: infinity pool, wide valley views, generous buffets. A good choice if you are travelling with family or making a holiday of it.',
      link: 'https://www.google.com/maps/search/?api=1&query=Coorg+Cliffs+Resort+Ammathi+Coorg',
    },
    {
      name: 'Amritara Ambatty Greens',
      area: 'Virajpet',
      drive: '~30 min',
      rating: '4.3',
      ratingNote: '2,800+ reviews · beside Coorg Golf Links',
      detail:
        'A long-established resort overlooking the golf course, with a pool and plenty of space to wander. Comfortable, unfussy, and reliably good service.',
      link: 'https://www.google.com/maps/search/?api=1&query=Amritara+Ambatty+Greens+Resort+Virajpet+Coorg',
    },
    {
      name: 'Evolve Back, Coorg',
      area: 'Karadigodu, Virajpet',
      drive: '~1 hr',
      rating: '4.8',
      ratingNote: 'Top-rated in Virajpet · pool villas',
      detail:
        'The splurge. Kodava-style heritage villas with private pools on a working coffee and spice plantation. Further out, so best if you are coming a few days early.',
      link: 'https://www.google.com/maps/search/?api=1&query=Evolve+Back+Coorg+Karadigodu+Virajpet',
    },
  ],
  note: 'Ratings and drive times are indicative, so do check current prices and availability. If you need a hand finding a room, please get in touch.',
}

// RSVP. There is no backend, so point `formUrl` at a Google Form
// (Send → link), Formspree, or anything else that collects responses.
// Until it is set, the section shows a friendly note instead of a button.
export const rsvp = {
  heading: 'RSVP',
  intro:
    'It would mean a great deal to us to know you are coming. Please let us know for how many, and which days you can join us for.',
  // TODO: paste your form link here, e.g. 'https://forms.gle/xxxxxxxx'.
  formUrl: '',
  buttonLabel: 'Let us know you’re coming',
  // TODO: pick a date that gives you time to confirm catering and rooms.
  deadline: 'Kindly respond by the 15th of November, 2026',
  // Shown when `formUrl` is empty.
  fallback:
    'Our RSVP form is on its way to you shortly. In the meantime, do reach out to any of us directly.',
}

// Points of contact for guests: travel questions, directions, lost cars.
// Add entries as { name, role, phone }. `phone` should be dialable,
// e.g. '+919876543210'. Leave the array empty to hide the section.

// Photo gallery. Drop images into `public/` and list them here as
// { src, alt }. While this array is empty the section does not render.
export const gallery = {
  heading: 'Us',
  images: [
    // { src: '/photos/one.jpg', alt: 'Tanvi and Varun in Coorg' },
  ],
}

// Section links shown in the top navigation. Each `id` must match the
// `id` prop of the matching section component.
export const nav = [
  { id: 'ceremonies', label: 'Ceremonies' },
  { id: 'venue', label: 'Travel' },
  { id: 'stay', label: 'Stay' },
  { id: 'rsvp', label: 'RSVP' },
]
