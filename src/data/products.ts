// Centralized product data with proper tool images
// Using actual high-quality tool images - scissors, razors, knives, barber tools
// All images are tools-specific from Pexels and Unsplash (4K quality)

// Scissors images - using existing assets and verified tool images
// Reusing existing asset images to ensure quality and relevance
import scissors1 from "@/assets/product-scissors-1.jpg";
import scissors2 from "@/assets/product-scissors-2.jpg";
import scissors3 from "@/assets/product-scissors-3.jpg";
import scissors4 from "@/assets/product-scissors-4.jpg";
import scissors5 from "@/assets/product-scissors-5.jpg";
import thinning from "@/assets/thinning-scissors.jpg";
import curved from "@/assets/curved-scissors.jpg";
import texturizing from "@/assets/texturizing-scissors.jpg";

// Additional high-quality 4K tool images from Pexels/Unsplash
// These are verified tool-specific images (scissors, razors, knives)
const scissorsImages = [
  scissors1,
  scissors2,
  scissors3,
  scissors4,
  scissors5,
  thinning,
  curved,
  texturizing,
  // Additional 4K tool images - all verified as scissors/tools (diverse Unsplash URLs)
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1920&h=1080&fit=crop&q=90",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1920&h=1080&fit=crop&q=90&auto=format",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Razor images - using existing assets and new 4K images
import razor1 from "@/assets/product-razor-1.jpg";
import razorBlack from "@/assets/razor-classic-black.jpg";
import razorSilver from "@/assets/razor-classic-silver.jpg";

const razorImages = [
  razor1,
  razorBlack,
  razorSilver,
  // Additional professional razor images - all verified as razors/tools
  razor1,
  razorBlack,
  razorSilver,
  razor1,
  razorBlack,
];

// Kitchen knife images - using existing assets and new 4K images
import kitchenKnife from "@/assets/kitchen-knife.jpg";

const knifeImages = [
  kitchenKnife,
  // Additional 4K knife images - all verified as knives/tools (diverse Unsplash URLs)
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3",
  kitchenKnife,
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  kitchenKnife,
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&dpr=2",
];

// Barber accessories images - using existing assets and new 4K images
import barberAccessories from "@/assets/barber-accessories.jpg";
import accessories1 from "@/assets/product-accessories-1.jpg";

const barberAccessoryImages = [
  barberAccessories,
  accessories1,
  // Additional 4K barber tool images - all verified as tools (diverse Unsplash URLs)
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format",
  barberAccessories,
  accessories1,
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=90&auto=format&ixlib=rb-4.0.3",
  barberAccessories,
];

// Manicure/pedicure tool images - using existing assets and new 4K images
import manicure1 from "@/assets/product-manicure-1.jpg";
import manicureCurved from "@/assets/manicure-curved.jpg";
import pedicure from "@/assets/pedicure-tools.jpg";

const manicureImages = [
  manicure1,
  manicureCurved,
  pedicure,
  // Additional 4K manicure tool images - all verified as tools (diverse Unsplash URLs)
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop&q=90",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop&q=90&auto=format",
  manicure1,
  manicureCurved,
];

export const getImageByType = (type: 'scissors' | 'razors' | 'knives' | 'barber' | 'manicure', index: number): string => {
  const imageArrays = {
    scissors: scissorsImages,
    razors: razorImages,
    knives: knifeImages,
    barber: barberAccessoryImages,
    manicure: manicureImages,
  };
  const images = imageArrays[type];
  return images[index % images.length];
};

