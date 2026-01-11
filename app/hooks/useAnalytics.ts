'use client';

import { useEffect } from 'react';

interface AnalyticsData {
  total_views: number;
  current_month_views: number;
  total_downloads: number;
}

export function useAnalytics() {
  const fetchAnalytics = async (): Promise<AnalyticsData | null> => {
    try {
      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error('Failed to fetch analytics');
      return await response.json();
    } catch (error) {
      console.error('Error fetching analytics:', error);
      return null;
    }
  };

  const addPageView = async (): Promise<void> => {
    try {
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'view' }),
      });

      if (!response.ok) throw new Error('Failed to add page view');
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error adding page view:', error);
    }
  };

  const addResumeDownload = async (): Promise<void> => {
    try {
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'download' }),
      });

      if (!response.ok) throw new Error('Failed to add resume download');
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error adding resume download:', error);
    }
  };

  useEffect(() => {
    // Track page view only once per session
    if (typeof window !== 'undefined' && !sessionStorage.getItem('pageViewed')) {
      addPageView();
      sessionStorage.setItem('pageViewed', 'true');
    }
  }, []);

  return {
    fetchAnalytics,
    addPageView,
    addResumeDownload,
  };
}
