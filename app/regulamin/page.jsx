import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Headline from "../components/regulamin/Headline";
import Paragraph from "../components/regulamin/Paragraph";

export default function RegulaminPage() {
    return (
        <div className="flex flex-col bg-stone-900 justify-between select-none">
            <Header/>
            <div className="text-white flex flex-col items-center justify-center gap-4 p-14 lg:p-20">
                <div className="max-w-full lg:max-w-1/2">
                    <p className="font-bold text-2xl lg:text-3xl text-center pb-6">REGULAMIN WIZYT</p>
                    <p className="text-lg lg:text-xl text-center pb-16">Dokonanie rezerwacji wizyty oraz skorzystanie z usługi w Salonie In Color oznacza, 
                        że Klient zapoznał się z niniejszym Regulaminem, akceptuje jego treść oraz zobowiązuje się do przestrzegania określonych w nim zasad.</p>

                    <Headline>PIERWSZA WIZYTA - KONSULTACJA</Headline>
                    <Paragraph>
                        W przypadku pierwszej wizyty na usługę koloryzacji, rozjaśniania lub innej usługi wymagającej indywidualnej oceny włosów, 
                        wcześniejsza konsultacja jest obowiązkowa. <br></br>Konsultacja pozwala ocenić: aktualny stan i kondycję włosów, historię wcześniejszych zabiegów, 
                        możliwości techniczne wykonania wybranej usługi, oczekiwania Klienta, przewidywany zakres, czas oraz koszt usługi. 
                        <br></br>Bez wcześniejszej konsultacji Salon nie gwarantuje możliwości wykonania zarezerwowanej usługi.
                    </Paragraph>

                    <Headline>HISTORIA WŁOSÓW</Headline>
                    <Paragraph>
                        Klient jest zobowiązany do przekazania prawdziwych i kompletnych informacji dotyczących historii swoich włosów, w szczególności wcześniejszego farbowania, 
                        rozjaśniania, dekoloryzacji, tonowania, pasemek, balayage, Airtouch, trwałej ondulacji, prostowania chemicznego lub keratynowego, 
                        henny oraz innych zabiegów chemicznych. <br></br>Dotyczy to również zabiegów wykonywanych w innych salonach oraz samodzielnie w domu.
                        <br></br>Odpowiedzialność za prawidłowe poinformowanie fryzjera o historii włosów spoczywa na Kliencie.
                        <br></br>Brak lub zatajenie istotnych informacji może mieć wpływ na możliwość wykonania usługi, jej efekt oraz kondycję włosów.
                    </Paragraph>

                    <Headline>EFEKT KOLORYZACJI</Headline>
                    <Paragraph>
                        Zdjęcia inspiracyjne pokazują oczekiwany kierunek, ale nie stanowią gwarancji uzyskania identycznego efektu.
                        <br></br>Ostateczny rezultat zależy od historii włosów, ich aktualnego stanu, struktury, porowatości oraz ilości wcześniej zgromadzonego pigmentu.
                        <br></br>Priorytetem Salonu jest bezpieczeństwo i kondycja włosów. W związku z tym fryzjer może zaproponować wykonanie usługi etapami, 
                        zmianę jej zakresu lub odmówić wykonania zabiegu, jeżeli jego wykonanie mogłoby nadmiernie obciążyć włosy.
                    </Paragraph>

                    <Headline>ODWOŁANIE LUB ZMIANA TERMINU</Headline>
                    <Paragraph>
                        Szanujemy czas każdej Klientki i prosimy o wzajemny szacunek do naszego czasu pracy.
                        <br></br>Jeżeli nie możesz pojawić się na wizycie, prosimy o możliwie wcześniejszy kontakt z Salonem. 
                        <br></br>Zmiana terminu jest oczywiście możliwa po wcześniejszym uzgodnieniu z Salonem.
                        <br></br>W przypadku odwołania wizyty bez uzgodnienia możliwości przełożenia jej na inny termin lub niepojawienia się na umówionej wizycie, 
                        kolejna rezerwacja może wymagać wcześniejszej wpłaty 100% wartości nieodbytej wizyty.
                        <br></br>W przypadku nagłych i niezależnych od Klienta sytuacji prosimy o indywidualny kontakt - każdą sytuację rozpatrujemy indywidualnie.
                    </Paragraph>

                    <Headline>PUNKTUALNOŚĆ</Headline>
                    <Paragraph>
                        Prosimy o punktualne przybycie na wizytę.<br></br>Spóźnienie może skutkować skróceniem zakresu usługi, zmianą jej przebiegu lub koniecznością przełożenia wizyty, 
                        jeżeli wykonanie pełnej usługi w pozostałym czasie nie będzie możliwe.
                    </Paragraph>

                    <Headline>ZMIANA USŁUGI</Headline>
                    <Paragraph>
                        Jeżeli podczas wizyty Klient chce rozszerzyć lub zmienić zakres usługi, 
                        możliwość wykonania dodatkowych prac zależy od dostępnego czasu oraz możliwości technicznych.
                        <br></br>O dodatkowym koszcie Klient zostanie poinformowany przed wykonaniem dodatkowej usługi.
                    </Paragraph>

                    <Headline>RZECZY OSOBISTE</Headline>
                    <Paragraph>
                        Prosimy o zabezpieczenie swoich rzeczy osobistych podczas wizyty.
                        <br></br>Salon nie ponosi odpowiedzialności za rzeczy pozostawione przez Klienta bez należytego zabezpieczenia, 
                        z zastrzeżeniem odpowiedzialności wynikającej z bezwzględnie obowiązujących przepisów prawa.
                    </Paragraph>

                    <Headline>REKLAMACJE</Headline>
                    <Paragraph>
                        Jeżeli masz jakiekolwiek uwagi dotyczące wykonanej usługi, prosimy o kontakt z Salonem możliwie szybko po wizycie.
                        <br></br>Każda reklamacja jest rozpatrywana indywidualnie, z uwzględnieniem rodzaju usługi, wcześniejszych ustaleń, 
                        historii włosów oraz okoliczności konkretnego przypadku.
                    </Paragraph>

                    <Headline>SZACUNEK I KOMFORT</Headline>
                    <Paragraph>
                        Prosimy o wzajemny szacunek, kulturę osobistą oraz respektowanie komfortu innych Klientów i osób pracujących w Salonie.
                        <br></br>Nie akceptujemy zachowań agresywnych, obraźliwych, wulgarnych ani zachowań zakłócających pracę Salonu.
                    </Paragraph>

                    <Headline>WAŻNE</Headline>
                    <Paragraph>
                        Rezerwując wizytę w Salonie In Color, potwierdzasz, że zapoznałaś/eś się z Regulaminem, akceptujesz jego zasady i zobowiązujesz się do ich przestrzegania.
                        <br></br>Pełna wersja Regulaminu jest dostępna w Salonie.<br></br>Dziękujemy za zaufanie, punktualność i wzajemny szacunek.
                    </Paragraph>
                </div>
            </div>
            <Footer/>
        </div>
    )
}