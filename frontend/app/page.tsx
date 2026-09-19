const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getBackendHealth() {
  try {
    const response = await fetch(`${API_URL}/api/v1/health`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Backend health check failed");
    }

    return await response.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const health = await getBackendHealth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">
        Personal AI Action Agent
      </h1>

      <p className="mt-4 text-gray-600">
        Phase 1 - Frontend & Backend Integration
      </p>

      <div className="mt-8 rounded-lg border p-6">
        {health ? (
          <>
            <p className="font-semibold text-green-600">
              Backend Connected
            </p>

            <p className="mt-2">
              API Status: {health.status}
            </p>

            <p>
              Database: {health.database}
            </p>
          </>
        ) : (
          <p className="font-semibold text-red-600">
            Backend Not Connected
          </p>
        )}
      </div>
    </main>
  );
}