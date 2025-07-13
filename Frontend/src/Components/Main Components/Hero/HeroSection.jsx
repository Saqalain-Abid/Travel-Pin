import SearchForm from "../../Forms/SearchForm/searchform";


export default function HeroSection() {
    return (
        <section className="relative isolate">
            {/* Background photo */}
            <div
                className="h-72 md:h-96 bg-center bg-cover"
                style={{
                    backgroundImage:
                        'url(https://r-xx.bstatic.com/xdata/images/xphoto/1440x434/529069765.jpeg?k=a3ef5807014672a847c2a8c4f92ff1883f29b3458d93e53a3538de9ea82ae03b&o=)',
                }}
            >
                {/* dark tint */}
                <div className="absolute mb-7 inset-0 bg-black/40" />
                {/* Heading + button */}
                <div className="relative z-10 h-full flex flex-col items-start justify-center px-8 md:px-16 text-white mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-xl">
                        Enjoy 10% discounts on select car rentals
                    </h2>
                    <button
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium
                       px-6 py-2 rounded-lg shadow"
                    >
                        Book with Genius
                    </button>
                </div>
            </div>

            {/* Booking box */}
            <SearchForm />
        </section>
    );
}
