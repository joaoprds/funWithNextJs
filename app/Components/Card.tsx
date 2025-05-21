type CardProps = {
    country: string;
    capital: string;
    region: string;
    population: number;
}

const Card = ({ country, capital, region, population}: CardProps) => {
    return (
        <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <img src="https://placehold.co/600x400" alt="Flag" className="w-full h-full objcet-cover" />
            </div>
            <div className="p-6 text-sm text-grey-600">
                <h2 className="text-xl font-semibold mb-4">{country}</h2>
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