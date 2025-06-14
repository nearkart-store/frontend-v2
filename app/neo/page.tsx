import AuroraBody from '@/components/AuroraBody';
import Navbar from "@/components/neoComponets/Navbar";

export default function Home() {
    return (
        <div>
            <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
              <Navbar />
                <AuroraBody />
                </div>
        </div>
    );
}
