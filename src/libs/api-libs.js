export const getAnimeResponse = async (resource, query = "") => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum diset");
  }

  const url = `${baseUrl}/${resource}${query ? `?${query}` : ""}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Jikan API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch:", url);
    console.error(error);

    throw error;
  }
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  return {
    data: data.slice(first, last),
  };
};
