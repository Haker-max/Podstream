const Podcast = require("./models/Podcasts");
const User = require("./models/User");

// Dummy recommendation function using similar categories
const recommendPodcasts = async (userId) => {
    const user = await User.findById(userId);
    if (!user) return [];

    const userLikedPodcasts = await Podcast.find({ _id: { $in: user.likedPodcasts } });
    const categories = userLikedPodcasts.map(podcast => podcast.category);
    
    // Find similar podcasts
    const recommended = await Podcast.find({ category: { $in: categories } }).limit(5);
    
    return recommended;
};

module.exports = recommendPodcasts;
