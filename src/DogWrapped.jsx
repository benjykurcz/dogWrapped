import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { useState, useEffect } from "react"
import { PawPrint, Bone, Watch, AlertCircle, Heart } from "lucide-react"
import playtime from './assets/playtime.JPG'
import treats from './assets/treats.JPG'
import walks from './assets/walks.JPG'
import destruction from './assets/destruction.JPG'

const DogWrapped = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const stats = [
        {
            title: "Hours of Playtime",
            value: "1,460",
            icon: <PawPrint className="w-8 h-8 text-green-500" />,
            description: "That's 4 hours every single day!",
            imagePath: playtime
        },
        {
            title: "Treats Consumed",
            value: "2,920",
            icon: <Bone className="w-8 h-8 text-amber-500" />,
            description: "An average of 8 treats per day",
            imagePath: treats
        },
        {
            title: "Total Walks",
            value: "8",
            icon: <Watch className="w-8 h-8 text-blue-500" />,
            description: "Your pup loves adventure",
            imagePath: walks
        },
        {
            title: "Destruction Report 2024",
            value: "$3,700",
            items: [
                "6 pairs of glasses 👓",
                "10 remotes 📺",
                "1 table 🪑",
                "$3,700 in total damages 💸"
            ],
            icon: <AlertCircle className="w-8 h-8 text-red-500" />,
            description: "Caught in the act! Exhibit A:",
            imagePath: destruction,
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % stats.length);
                setIsVisible(true);
            }, 500);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600">
                <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                        <Heart className="w-6 h-6" /> Willow Wrapped 2024
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                                {stats[currentIndex].icon}
                                <h2 className="text-xl font-bold text-white">{stats[currentIndex].title}</h2>
                            </div>

                            {stats[currentIndex].items ? (
                                <ul className="space-y-2 text-white mb-4">
                                    {stats[currentIndex].items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xl">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-4xl font-bold text-white mb-2">
                                    {stats[currentIndex].value}
                                </div>
                            )}

                            <div className="mt-4 rounded-lg overflow-hidden bg-black/20">
                                <img 
                                    src={stats[currentIndex].imagePath}
                                    alt={`Dog ${stats[currentIndex].title.toLowerCase()}`}
                                    className="w-full h-[300px] object-contain rounded-lg shadow-lg"
                                />
                                <p className="text-white/80 text-sm mt-2 italic">
                                    {stats[currentIndex].imageCaption}
                                </p>
                            </div>

                            <p className="text-white/80 mt-4">
                                {stats[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DogWrapped;