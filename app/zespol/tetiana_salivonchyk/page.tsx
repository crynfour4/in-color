import PersonalPage from "@/app/components/personalPage/PersonalPage";
import data from "@/public/team/tetiana_salivonchyk/data.json";

const Page: React.FC = () => {
    return (
        <div>
            <PersonalPage data={data}/>
        </div>
    )
}

export default Page;