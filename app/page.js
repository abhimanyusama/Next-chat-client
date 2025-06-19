export default function LandingPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to ChatConnect</h1>
      <p className="text-lg text-gray-600 mt-4">
        Real-time secure messaging made easy.
      </p>
      <div className="mt-6">
        <a
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded mr-4"
        >
          Login
        </a>
        <a href="/signup" className="bg-green-600 text-white px-6 py-2 rounded">
          Signup
        </a>
      </div>
    </div>
  );
}
