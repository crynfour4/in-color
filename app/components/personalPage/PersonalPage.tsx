import { PersonalData } from "@/app/types";
import { ImageCarousel } from "./ImageCarousel";
import { DeckCarousel } from "./DeckCaroysel";

interface PersonalPageProps {
    data: PersonalData
}

const PersonalPage: React.FC<PersonalPageProps> = ({ data }) => {
    return (
        <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center py-12 px-14 lg:py-16 lg:px-40 gap-10 lg:gap-14 w-full overflow-x-clip">
            <div id="description" className="flex flex-col lg:flex-row justify-center gap-10 items-center">
                <div className="relative min-w-50 min-h-50 lg:max-w-70 lg:max-h-70 rounded-full overflow-hidden border-3">
                    <img src={data.photo} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none" />
                </div>
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-none lg:items-center">
                        <p className="text-3xl lg:text-5xl font-bold text-shadow-lg/50">{data.name} {data.surname}</p>
                        <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex flex-row items-center gap-2">
                                {data.socialMedia.map((item) => (
                                    <a href={item.url}>
                                        <img src={item.icon} className="h-10 w-10 object-contain"/>
                                    </a>
                                ))}
                            </div>
                            {data.phoneNumber && <p className="text-gray-200 font-bold text-shadow-lg/50">{data.phoneNumber}</p>}
                        </div>
                    </div>
                    <div className="space-y-3 text-lg lg:text-xl text-gray-200 text-shadow-lg/50">
                        {data.about.split('\n').filter(Boolean).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
            <hr id="divider" className="bg-white h-px w-full"/>

            {data.priceList ? (
                <div id="services" className="flex flex-col">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold mb-4 text-shadow-lg/50">Usługi</h2>
                    {data.priceList.map((item1) => (
                        <div className="flex flex-col">
                            <h2 className="text-center text-2xl lg:text-4xl font-bold mt-8 mb-4 text-shadow-lg/50">{item1.category}</h2>
                            {item1.items.map((item2) => (
                                <div className="flex flex-row justify-between gap-20 lg:gap-30">
                                    <p className="text-lg lg:text-xl text-gray-200 text-shadow-lg/50">{item2.Usługa}</p>
                                    <p className="text-lg lg:text-xl font-bold text-gray-200 text-shadow-lg/50">{item2.Cena}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : <div className="hidden"></div>}

            {data.priceList ? (
                <hr id="divider" className="bg-white h-px w-full"/>
            ) : (
                <div className="hidden"></div>
            )}

            <div id="portfolio" className="w-full">
                <h2 className="text-center text-3xl lg:text-5xl font-bold mb-10 text-shadow-lg/50">Moje prace</h2>
                <ImageCarousel
                    images={data.portfolio.map((item) => ({
                        src: item.url,
                        alt: `Praca portfolio ${item.id}`,
                    }))}
                />
            </div>
            <hr id="divider" className="bg-white h-px w-full"/>

            <div id="reviews" className="mb-8">
                <h2 className="text-center text-3xl lg:text-5xl font-bold mb-14 text-shadow-lg/50">Opinia</h2>
                <DeckCarousel items={data.reviews.map((review) => ({
                    title: review.author ?? '',
                    text: review.content
                }))}/>
            </div>
        </div>
    )
}

export default PersonalPage;