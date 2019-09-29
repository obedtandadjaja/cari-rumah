import {} from 'dotenv/config'
import db from './../../src/pg-adaptor'

const addressesData = [
  {
    formatted_address: 'Jl. Ciledug Raya No.99B, RT.12/RW.5, Cipulir, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230, Indonesia',
    geometry: {
      location: {
        lat: -6.2376245,
        long: 106.7693064
      }
    },
  },
  {
    formatted_address: 'Jl. Prof. DR. Satrio No.Kav.18, RT.14/RW.4, Kuningan, Karet Kuningan, Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940, Indonesia',
    geometry: {
      location: {
        lat: -6.2246865,
        long: 106.8296012
      }
    }
  },
  {
    formatted_address: 'Jl. Kembangan Raya, RT.1/RW.2, Kembangan Sel., Jakarta, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610, Indonesia',
    geometry: {
      location: {
        lat: -6.1853073,
        long: 106.7352779
      }
    },
  },
  {
    formatted_address: 'Jalan Prajurit KKO Usman dan Harun No.22-24 Senen Tugu Tani, RT.1/RW.1, Senen, Menteng Area, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410, Indonesia',
    geometry: {
      location: {
        lat: -6.1802739,
        long: 106.8391117
      }
    },
  },
  {
    formatted_address: 'Gd. Apartement Citylofts, Jl. K.H. Mas Mansyur No.121, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220, Indonesia',
    geometry: {
      location: {
        lat: -6.209023999999999,
        long: 106.8183992
      }
    },
  },
  {
    formatted_address: 'Jl. Casablanca No.Kav. 12, RT.14/RW.5, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870, Indonesia',
    geometry: {
      location: {
        lat: -6.2229445,
        long: 106.845273
      }
    },
  },
  {
    formatted_address: 'RT.9/RW.4, Rawajati, Pancoran, South Jakarta City, Jakarta 12750, Indonesia',
    geometry: {
      location: {
        lat: -6.2576952,
        long: 106.8498678
      }
    },
  },
  {
    formatted_address: 'Bank BRI Tower II, Jl. Hayam Wuruk No.108, RT.4/RW.9, Maphar, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11160, Indonesia',
    geometry: {
      location: {
        lat: -6.1520243,
        long: 106.8188457
      }
    },
  },
  {
    formatted_address: 'Jl. K.H. Mas Mansyur No.Kav.35, RT.12/RW.11, Karet Tengsin, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220, Indonesia',
    geometry: {
      location: {
        lat: -6.2055742,
        long: 106.8180406
      }
    },
  },
  {
    formatted_address: 'Jl. Terogong Raya No.18, RT.10/RW.10, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430, Indonesia',
    geometry: {
      location: {
        lat: -6.283102200000001,
        long: 106.7905339
      }
    },
  },
  {
    formatted_address: 'Jln. A. Yani No.Kav 49, RT.13/RW.9, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570, Indonesia',
    geometry: {
      location: {
        lat: -6.190632,
        long: 106.8724789
      }
    },
  },
  {
    formatted_address: 'The H-Tower, Jl. H. R. Rasuna Said No.Kav.20, RT.1/RW.5, Karet Kuningan, Setia Budi, South Jakarta City, Jakarta 12940, Indonesia',
    geometry: {
      location: {
        lat: -6.2196894,
        long: 106.8319855
      }
    },
  },
  {
    formatted_address: 'apartement kuningan place, Jl. H Kavling No.15, RT.7/RW.1, Menteng Atas, Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12980, Indonesia',
    geometry: {
      location: {
        lat: -6.2129302,
        long: 106.8353688
      }
    },
  },
  {
    formatted_address: 'Kemayoran, Jl. Trembesi Blok D 4, Pademangan Tim., Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14410, Indonesia',
    geometry: {
      location: {
        lat: -6.1467563,
        long: 106.8544275
      }
    },
  },
  {
    formatted_address: 'Jl. Cikini Raya No.79, RT.2/RW.2, Cikini, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330, Indonesia',
    geometry: {
      location: {
        lat: -6.190030999999999,
        long: 106.8408666
      }
    },
  },
  {
    formatted_address: 'Kalibata City, Apartemen, RT.9/RW.4, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110, Indonesia',
    geometry: {
      location: {
        lat: -6.256463399999999,
        long: 106.8525492
      }
    },
  },
  {
    formatted_address: 'Puri Indah CBD Blok U 1, Jl. Puri Indah Raya, RT.3/RW.2, Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610, Indonesia',
    geometry: {
      location: {
        lat: -6.188171,
        long: 106.738869
      }
    },
  },
  {
    formatted_address: 'Jl. Bendungan Hilir No.5, RW.3, Bend. Hilir, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210, Indonesia',
    geometry: {
      location: {
        lat: -6.2113608,
        long: 106.8130049
      }
    },
  },
  {
    formatted_address: 'JL. Thamrin Boulevard, RT.10/RW.9, Kb. Melati, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230, Indonesia',
    geometry: {
      location: {
        lat: -6.195462099999999,
        long: 106.8173949
      }
    },
  },
  {
    formatted_address: 'Jl. RS Mata Aini, RT.5/RW.5, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920, Indonesia',
    geometry: {
      location: {
        lat: -6.2148135,
        long: 106.8293106
      }
    }
  }
]

const userData = {
  name: 'Obed Tandadjaja',
  email: 'obed.tandadjaja@gmail.com',
  phone: '5594737555',
  notification_methods: '{email,phone}',
}

const listingData = {
  num_bedrooms: 1,
  num_bathrooms: 1.5,
  num_parking_spots: 1,
  lot_size_m2: 400,
  num_stories: 1,
  year_built: 2018,
  price_idr: 2000000,
  description: 'This is a test listing',
  display_picture_url: 'https://images.homedepot-static.com/productImages/fc91cb23-b6db-4d32-b02a-f1ed61dd39a8/svn/folkstone-matte-formica-laminate-sheets-009271258408000-64_400_compressed.jpg',
  residential_type: 'room',
  type: 'rent',
}

async function seedData() {
  let user_id = await db.one('insert into users(name, email, phone, notification_methods) values ($1, $2, $3, $4) returning id', [userData.name, userData.email, userData.phone, userData.notification_methods]).then(res => res.id)

  let address_ids = []
  await Promise.all(
    addressesData.map(async(address) => {
      await db.one('insert into addresses(address_1, latitude, longitude, geometry) values ($1, $2, $3, ST_SetSRID(ST_MakePoint($3, $2), 3857)) returning id', [address.formatted_address, address.geometry.location.lat, address.geometry.location.long])
        .then(res => address_ids.push(res.id))
        .catch(err => console.log(err))
    })
  )

  address_ids.map(address_id => {
    db.none('insert into listings(num_bedrooms, num_bathrooms, num_parking_spots, lot_size_m2, num_stories, year_built, price_idr, description, display_picture_url, residential_type, type, user_id, address_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [listingData.num_bedrooms, listingData.num_bathrooms, listingData.num_parking_spots, listingData.lot_size_m2, listingData.num_stories, listingData.year_built, listingData.price_idr, listingData.description, listingData.display_picture_url, listingData.residential_type, listingData.type, user_id, address_id])
  })
}

seedData()

