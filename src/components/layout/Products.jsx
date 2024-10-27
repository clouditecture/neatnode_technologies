import { useState } from "react";
import PageTitle from "../widgets/PageTitle";

const Products = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to handle the email registration
        console.log(`Email registered: ${email}`);
        setMessage('Thank you for registering!');
        setEmail(''); // Clear the input field after submission
    };
    return (
        <>
            <PageTitle section="Our Products" />
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-2xl font-semibold">Clouditecture</h3>
                <p className="text-gray-600 mb-4">Coming Soon!</p>
                <p className="mb-4">Join the waitlist:</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                        Register
                    </button>
                </form>
                {message && <p className="mt-4 text-green-600">{message}</p>}

                {/* Using <style> tag for additional custom styles */}
                <style>{`
        .bg-gray-100 {
          background-color: #f7fafc; /* Custom gray color */
        }
        .rounded-lg {
          border-radius: 0.5rem; /* Custom border radius */
        }
      `}</style>
            </div>
        </>
    )
}

export default Products