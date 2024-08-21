import React from "react";
import Hero from '../components/Hero'; // Ensure this is the correct path

// TeamMembers Component
const TeamMembers = () => {
    const teamMembers = [
        {
            name: "Jane Doe",
            role: "CEO & Founder",
            image: "https://via.placeholder.com/150",
            bio: "Jane is the visionary behind Mentor Connect with over 15 years of experience in mentorship and leadership.",
        },
        {
            name: "John Smith",
            role: "CTO",
            image: "https://via.placeholder.com/150",
            bio: "John leads the technology team, ensuring our platform is innovative and user-friendly.",
        },
        {
            name: "Emily Johnson",
            role: "Head of Community",
            image: "https://via.placeholder.com/150",
            bio: "Emily is passionate about building and nurturing our mentor-mentee community.",
        },
        // Add more team members as needed
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center">
                            <img
                                className="mx-auto h-32 w-32 rounded-full object-cover"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                {member.name}
                            </h3>
                            <p className="text-gray-600">{member.role}</p>
                            <p className="mt-2 text-gray-500">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamPage = () => {
    return (
        <div>
            <Hero />
            <TeamMembers />
        </div>
    );
};

export default TeamPage;
