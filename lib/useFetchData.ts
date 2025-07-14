// lib/fetchPageData.ts

export interface PageData {
  id: string;
  name: string;
  content: string;
  // Add other fields as needed
}

export interface FetchPageDataResult {
  data: PageData | null;
  error: string | null;
}

export async function fetchPageData(pageName: string): Promise<FetchPageDataResult> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PAGES_API}/${encodeURIComponent(pageName)}/`
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data: PageData = await res.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message || 'Unknown error' };
  }
}
