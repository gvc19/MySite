export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Construction" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          🚧 Site Under Construction 🚧
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Gagan is working on that! 
          Please check back soon!
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}
