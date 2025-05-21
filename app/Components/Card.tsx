import Image from "next/image";

type CardProps = {
    flag: string;
    index: number;
    name: string;
    capital: string;
    region: string;
    population: number;
}

const Card = ({ index, flag, name, capital, region, population}: CardProps) => {
    return (
        <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <Image src={flag || "https://placeholder.co/600x400"} alt={`Flag of ${name}`} className="w-full h-full objcet-cover" width={500} height={300} priority={index < 12} />
            </div>
            <div className="p-6 text-sm text-grey-600">
                <h2 className="text-xl font-semibold mb-4">{name}</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <p className="font-semibold">Capital:</p>
                        <p>{capital}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="font-semibold">Region:</p>
                        <p>{region}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="font-semibold">Population:</p>
                        <p>{population}</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Card;