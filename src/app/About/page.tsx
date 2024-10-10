import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white text-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">About Our Elegant Blog</h1>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Our Refined Mission</h2>
        <p className="text-lg text-black leading-relaxed">
          At our blog, we're passionate about exploring ideas and sharing knowledge with sophistication. Our mission is to inspire, inform, and entertain readers with thought-provoking content that spans a range of topics. From technology to science, and arts to culture, we strive to present a refined picture that broadens horizons and sparks curiosity in our audience.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Meet Our Distinguished Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Jane Doe", role: "Founder & Editor-in-Chief", color: "text-black" },
            { name: "John Smith", role: "Senior Writer", color: "text-black" },
          ].map((member) => (
            <div key={member.name} className="flex items-center space-x-4">
              <div>
                <h3 className={`text-xl font-semibold ${member.color}`}>{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Our Compelling Story</h2>
        <p className="text-lg text-black leading-relaxed">
          Founded in 2023, our blog started as a collection of ideas and has since evolved into a sophisticated platform for curious minds. We believe in the power of words to shape new perspectives and inspire action. Through our articles, we aim to create a space where meaningful conversations can flourish with elegance and depth.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Join Our Discourse</h2>
        <p className="text-lg text-black leading-relaxed mb-4">
          We welcome new voices to our platform! Whether you have a question, suggestion, or just want to contribute to our discourse, don't hesitate to reach out.
        </p>
        <Link href="/Contact" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
          Contact Us
        </Link>
      </section>

    </div>
    <Footer/>
    </>
  );
}
