import Image from "next/image";

interface LiveDataSectionProps {
    analyticsData: {
        total_views: string;
        current_month_views: string;
        total_downloads: string;
    };
    onLoadDiagram: () => void;
}

export function LiveDataSection({ analyticsData, onLoadDiagram }: LiveDataSectionProps) {
    return (
        <section id="live">
            <p className="section__text__p1">Take a Look</p>
            <h1 className="title">Live Data</h1>
            <div className="live-container">
                <div className="live-data-container">
                    <div className="details-container max-height">
                        <Image src="/assets/education.png" alt="Education icon" className="icon" width={32} height={32} />
                        <p>Resume Downloads</p>
                        <h3 className="live-number" id="resume_downloads">{analyticsData.total_downloads}</h3>
                    </div>
                    <div className="details-container max-height">
                        <Image src="/assets/education.png" alt="Education icon" className="icon" width={32} height={32} />
                        <p>Total Views</p>
                        <h3 className="live-number" id="total_views">{analyticsData.total_views}</h3>
                    </div>
                    <div className="details-container max-height">
                        <Image src="/assets/education.png" alt="Education icon" className="icon" width={32} height={32} />
                        <p>Views This Month</p>
                        <h3 className="live-number" id="monthly_views">{analyticsData.current_month_views}</h3>
                    </div>
                </div>
                <p className="live-about-paragraph">
                    The infrastructure for this live data feature is powered by AWS. JavaScript manages user sessions to prevent duplicate
                    view registrations on each page load. Data retrieval and updates are handled through API calls to a Lambda function,
                    which authenticates requests and executes the required actions. This project demonstrates my expertise in designing and
                    deploying efficient, cloud-based solutions.
                </p>
                <div className="live-button-container">
                    <button className="btn btn-color-2" onClick={() => window.location.href = 'https://github.com/edg35/portfolio'}>
                        Github
                    </button>
                    <button className="btn btn-color-1" onClick={onLoadDiagram}>
                        Diagram
                    </button>
                </div>
            </div>
            <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow arrow-down" width={30} height={30} onClick={() => window.location.href = '#about'} />
        </section>
    );
}
