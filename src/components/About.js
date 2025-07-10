const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our food ordering app! This project is built with React and showcases a modern, dynamic UI for browsing restaurants and placing orders.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-purple-600">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        We aim to make food ordering fast, simple, and enjoyable. Whether you’re craving your favorite dish or exploring something new, our platform is here to help.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-purple-600">Technologies Used</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>React & React Router</li>
        <li>Redux for state management</li>
        <li>Tailwind CSS for styling</li>
        <li>Custom Hooks and Context API</li>
      </ul>
    </div>
  );
};

export default About;
