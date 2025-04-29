import image1 from '../assets/front-left-640-en_US.avif';
import image2 from '../assets/download.jpg';
import image3 from '../assets/bmw.jpg';
import image4 from '../assets/ford.jpg';
import image5 from '../assets/cooper.jpg';
import image6 from '../assets/Mazda MX-5 Miata.jpg';
import image7 from '../assets/Toyota RAV4.jpg';
import image8 from '../assets/imageRed.jpg';

const CarList = [
  {
    id: 1,
    name: 'Lamborghini Huracán EVO',
    price: '$250,000',
    year: 2023,
    mileage: '3,000 km',
    fuel: 'Petrol',
    image: image8, // you can replace with real Lamborghini image later
    highlight: 'Unmatched Italian performance and style with a roaring V10 engine.',
    tags: ['Supercar', 'Luxury', 'V10', '2023'],
    specs: {
      Engine: '5.2L V10 Naturally Aspirated',
      Transmission: '7-Speed Dual-Clutch (LDF)',
      Drivetrain: 'All-Wheel Drive (AWD)',
      Horsepower: '631 hp',
      to60: '2.9 seconds',
      TopSpeed: '202 mph',
      Seating: '2',
    }
  },

  {
    id: 2,
    name: 'BMW 3 Series',
    price: '$50,000',
    year: 2021,
    mileage: '25,000 km',
    fuel: 'Diesel',
    image: image3,
    highlight: 'Precision handling and power wrapped in Bavarian engineering.',
    tags: ['Diesel', 'Sporty', '2021', 'RWD'],
    specs: {
      Engine: '2.0L TwinPower Turbo Diesel',
      Transmission: '8-Speed Steptronic Auto',
      Drivetrain: 'Rear-Wheel Drive (RWD)',
      Horsepower: '188 hp',
      Interior: 'Leatherette Upholstery',
      Infotainment: '8.8" iDrive Display',
      MPG: '42 highway',
    }
  },

  {
    id: 3,
    name: 'Tesla Model 3',
    price: '$55,000',
    year: 2023,
    mileage: '12,000 km',
    fuel: 'Electric',
    image: image2,
    highlight: 'Innovative tech meets electric performance in this futuristic ride.',
    tags: ['Electric', 'Autopilot', 'Minimalist', '2023'],
    specs: {
      Battery: '82 kWh Long Range',
      Range: '358 miles (EPA)',
      Acceleration: '0–60 mph in 3.1s',
      Drive: 'Dual Motor AWD',
      Charging: 'Supercharging Support',
      Infotainment: '15" Touchscreen Display',
      Seating: '5',
    }
  },
  {
    id: 4,
    name: 'Ford F-150',
    price: '$42,000',
    year: 2023,
    mileage: '15,000 km',
    fuel: 'Petrol',
    image: image4,
    highlight: 'America’s top-selling truck—now tougher and smarter than ever.',
    tags: ['Truck', '4x4', 'Utility', '2023'],
    specs: {
      Engine: '3.5L EcoBoost V6',
      Transmission: '10-Speed Automatic',
      Drive: '4WD',
      Towing: '13,200 lbs',
      BedLength: '5.5 ft',
      Seating: '5 or 6 (Crew Cab)',
      Infotainment: '12" SYNC 4 Touchscreen',
    }
  },
  {
    id: 5,
    name: 'Mini Cooper',
    price: '$30,000',
    year: 2022,
    mileage: '10,500 km',
    fuel: 'Petrol',
    image: image5,
    highlight: 'Iconic design meets agile handling in this compact performer.',
    tags: ['Hatchback', 'Iconic', 'Fun Drive', '2022'],
    specs: {
      Engine: '1.5L TwinPower Turbo I3',
      Transmission: '6-Speed Manual',
      Doors: '3-Door Hatch',
      Horsepower: '134 hp',
      Interior: 'Ambient Lighting + Touchscreen',
      FuelEfficiency: '29 city / 38 hwy',
    }
  },
  {
    id: 6,
    name: 'Mazda MX-5 Miata',
    price: '$33,000',
    year: 2023,
    mileage: '5,200 km',
    fuel: 'Petrol',
    image: image6,
    highlight: 'Top-down thrills with timeless roadster styling.',
    tags: ['Convertible', 'Manual', 'Lightweight', '2023'],
    specs: {
      Engine: '2.0L SKYACTIV-G Inline-4',
      Transmission: '6-Speed Manual',
      Weight: '2,341 lbs',
      Drivetrain: 'RWD',
      Horsepower: '181 hp',
      Roof: 'Manual Soft Top',
      Seating: '2',
    }
  },
  {
    id: 7,
    name: 'Toyota RAV4',
    price: '$38,000',
    year: 2023,
    mileage: '8,700 km',
    fuel: 'Hybrid',
    image: image7,
    highlight: 'Efficient, versatile, and ready for adventure in every environment.',
    tags: ['Hybrid', 'SUV', 'AWD', 'Eco-Friendly', '2023'],
    specs: {
      Engine: '2.5L Hybrid I4',
      Transmission: 'CVT Automatic',
      Drivetrain: 'Electronic AWD',
      MPG: '41 city / 38 highway',
      Seating: '5',
      CargoSpace: '69.8 cu. ft.',
      Infotainment: '8" Display with Apple CarPlay',
    }
  },

  {
    id: 8,
    name: 'Audi A4',
    price: '$45,000',
    year: 2022,
    mileage: '20,000 km',
    fuel: 'Petrol',
    image: image1,
    highlight: 'German luxury and performance packed into a sporty sedan.',
    tags: ['Sedan', 'Luxury', 'AWD', '2022'],
    specs: {
      Engine: '2.0L TFSI Turbocharged I4',
      Transmission: '7-Speed S Tronic Dual-Clutch',
      Drivetrain: 'Quattro AWD',
      Horsepower: '201 hp',
      Infotainment: '10.1" MMI Touch Display',
      Safety: 'Audi Pre Sense City & Basic',
      Seating: '5',
    }
  }
];

export default CarList;
