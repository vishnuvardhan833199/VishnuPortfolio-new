import { motion } from 'framer-motion';
import { Code, Star, Award, Users, Activity } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "vishnu_vardhan",
      stats: [
        { label: "Contest Rating", value: "1,648" },
        { label: "Global Rank", value: "119,958" },
        { label: "Problems Solved", value: "76" }
      ],
      achievements: [
        "Top 17.51% in Contest Rating",
        "Easy: 46/880 Problems",
        "Medium: 27/1852 Problems",
        "Hard: 3/839 Problems",
        "75.91% Acceptance Rate"
      ],
      link: "https://leetcode.com/vishnu_vardhan",
      color: "from-yellow-500 to-orange-500"
    },
    {
      platform: "GeeksforGeeks",
      username: "vishnu_vardhan",
      stats: [
        { label: "Coding Score", value: "191" },
        { label: "Problems Solved", value: "90+" },
        { label: "Monthly Rank", value: "Active" }
      ],
      achievements: [
        "Regular Problem Solver",
        "Data Structures & Algorithms",
        "Consistent Contributor"
      ],
      link: "https://geeksforgeeks.org/user/vishnu_vardhan",
      color: "from-green-600 to-green-700"
    },
    {
      platform: "HackerRank",
      username: "vishnu_vardhan",
      stats: [
        { label: "Badges", value: "3" },
        { label: "Certifications", value: "1" },
        { label: "Skills", value: "Multiple" }
      ],
      achievements: [
        "Java Badge",
        "Days of JS Badge",
        "SQL Badge",
        "Python (Basic) Certification"
      ],
      link: "https://hackerrank.com/vishnu_vardhan",
      color: "from-green-500 to-emerald-500"
    },
    {
      platform: "Coding Ninjas",
      username: "vishnu_vardhan",
      stats: [
        { label: "Problems Solved", value: "20+" },
        { label: "Active Streak", value: "Regular" },
        { label: "Progress", value: "Growing" }
      ],
      achievements: [
        "Consistent Problem Solver",
        "Data Structures Practice",
        "Algorithm Challenges"
      ],
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-10`} />

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{profile.platform}</h3>
                    <p className="text-gray-400">@{profile.username}</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {profile.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-indigo-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-400" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {profile.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Profile Link */}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-white hover:text-indigo-400 transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  <span>Visit Profile</span>
                </a>
              </div>

              {/* Activity Graph (Decorative) */}
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <div className="h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">186+</div>
              <div className="text-gray-400">Total Problems Solved</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-400">Platform Profiles</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-400">Badges Earned</div>
            </div>
            <div className="text-center">
              <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1648</div>
              <div className="text-gray-400">Max Contest Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles; 