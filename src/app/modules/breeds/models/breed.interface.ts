export interface Breed {
  weight: BreedWeight;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  reference_image_id?: string;
  image?: BreedImage;
  cfa_url?: string;
  vcahospitals_url?: string;
  lap?: number;
  cat_friendly?: number;
  bidability?: number;
  vetstreet_url?: string;
}


export interface BreedDetail {
  weight: BreedWeight;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image?: BreedImage;
}

export interface BreedDetailResponse {
  weight:             BreedWeight;
  id:                 string;
  name:               string;
  temperament:        string;
  origin:             string;
  country_codes:      string;
  country_code:       string;
  description:        string;
  life_span:          string;
  indoor:             number;
  alt_names:          string;
  adaptability:       number;
  affection_level:    number;
  child_friendly:     number;
  dog_friendly:       number;
  energy_level:       number;
  grooming:           number;
  health_issues:      number;
  intelligence:       number;
  shedding_level:     number;
  social_needs:       number;
  stranger_friendly:  number;
  vocalisation:       number;
  experimental:       number;
  hairless:           number;
  natural:            number;
  rare:               number;
  rex:                number;
  suppressed_tail:    number;
  short_legs:         number;
  wikipedia_url:      string;
  hypoallergenic:     number;
  reference_image_id: string;
}

export interface BreedImgResponse {
  id:     string;
  url:    string;
  breeds: Breed[];
  width:  number;
  height: number;
}

export interface BreedImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface BreedWeight {
  imperial: string;
  metric: string;
}
