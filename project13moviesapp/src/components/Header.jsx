function Header({ count }) {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-tight">
          🎬 Movie List
        </h1>

      </div>
    </header>
  );
}

export default Header;