export default async function fetchData<T>(endpoint: string): Promise<T> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`);

  if (data.ok) return await data.json();
  return null;
}
