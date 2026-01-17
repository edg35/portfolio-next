'use client';

import { useEffect, useState } from "react";
import { AboutSection } from "./_components/sections/AboutSection";
import { ContactSection } from "./_components/sections/ContactSection";
import { ExperienceSection } from "./_components/sections/ExperienceSection";
import { Footer } from "./_components/sections/Footer";
import { LiveDataSection } from "./_components/sections/LiveDataSection";
import { DesktopNav, HamburgerNav } from "./_components/sections/Navigation";
import { ProfileSection } from "./_components/sections/ProfileSection";
import { ProjectsSection } from "./_components/sections/ProjectsSection";
import { ReadingSection } from "./_components/sections/ReadingSection";
import { useAnalytics } from "./hooks/useAnalytics";
import { useGoodReads } from "./hooks/useGoodReads";
import Book from "./interfaces/Book";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({
    total_views: '-',
    current_month_views: '-',
    total_downloads: '-',
  });
  const [bookData, setBookData] = useState<Book[] | null>(null);

  const { fetchAnalytics, addResumeDownload: trackResumeDownload } = useAnalytics();
  const { fetchGoodReadsData } = useGoodReads();

  useEffect(() => {
    // Load analytics data on mount
    const loadAnalytics = async () => {
      const data = await fetchAnalytics();
      if (data) {
        setAnalyticsData({
          total_views: data.total_views.toString(),
          current_month_views: data.current_month_views.toString(),
          total_downloads: data.total_downloads.toString(),
        });
      }
    };

    // Load Goodreads data on mount
    const loadGoodReads = async () => {
      const books = await fetchGoodReadsData();
      setBookData(books);
    };

    loadGoodReads();
    loadAnalytics();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeDownload = async () => {
    await trackResumeDownload();
    window.open('/assets/resume.pdf', '_blank');
    // Refresh analytics data
    const data = await fetchAnalytics();
    if (data) {
      setAnalyticsData({
        total_views: data.total_views.toString(),
        current_month_views: data.current_month_views.toString(),
        total_downloads: data.total_downloads.toString(),
      });
    }
  };

  const loadAWSDiagram = () => {
    window.open('/assets/diagram.pdf');
  };

  return (
    <>
      <DesktopNav />
      <HamburgerNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ProfileSection onResumeDownload={handleResumeDownload} />
      <LiveDataSection analyticsData={analyticsData} onLoadDiagram={loadAWSDiagram} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ReadingSection books={bookData || []} />
      <ContactSection />
      <Footer />
    </>
  );
} 
