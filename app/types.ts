interface SocialMedia {
    platform: string;
    url: string;
    icon: string;
}

interface PortfolioItem {
    id: number,
    url: string
}

interface Review {
    id: number;
    content: string;
    author?: string
}

interface ServiceItem {
    Usługa: string;
    Cena: string;
}

interface PriceCategory {
    category: string;
    items: ServiceItem[];
}

export interface PersonalData {
    name: string;
    surname: string;
    socialMedia: SocialMedia[];
    about: string;
    photo: string;
    portfolio: PortfolioItem[];
    reviews: Review[];
    priceList?: PriceCategory[];
}