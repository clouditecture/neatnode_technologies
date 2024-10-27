import PageTitle from "../widgets/PageTitle";
import TeamCard from "../cards/TeamCard";
import teamData from "@/data/team-data";
import {
    IconButton,
} from "@material-tailwind/react";

const Team = () => {
    return (
        <div className="container mx-auto">
            <PageTitle section="Our Team">
            </PageTitle>
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                {teamData.map(({ img, name, position, socials }) => (
                    <TeamCard
                        key={name}
                        img={img}
                        name={name}
                        position={position}
                        socials={
                            <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                    <IconButton key={name} color={color} variant="text">
                                        <i className={`fa-brands text-xl fa-${name}`} />
                                    </IconButton>
                                ))}
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default Team