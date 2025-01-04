import { Card, Title, Text } from "@tremor/react";
import { Clock, TrendingUp, Hash } from "lucide-react";
import formattedData from "../data/format_analytics.js";

export function BestTimeSection() {
    const bestTimes = formattedData
        .sort((a, b) => b.reach - a.reach) // Sort by highest reach
        .slice(0, 3) // Take the top 3 entries
        .map((entry) => ({ day: entry.date.split("(")[1]?.replace(")", ""), time: entry.time }));

    return (
        <Card className="p-6 border border-gray-300 text-black rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5" />
                <Title>Best Time for Uploading</Title>
            </div>
            <div className="space-y-4">
                {bestTimes.map((time, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <Text>{time.day}</Text>
                        <Text className="font-medium">{time.time}</Text>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export function TrendingSection() {
    const trendingPosts = formattedData
        .sort((a, b) => (b.likes + b.shares + b.comments) - (a.likes + a.shares + a.comments)) // Sort by engagement
        .slice(0, 3); // Take the top 3 entries

    return (
        <Card className="p-6 border border-gray-300 text-black rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5" />
                <Title>Trending Content</Title>
            </div>
            <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                        <Text className="font-semibold">{post.content}</Text>
                        <Text className="text-sm text-gray-500">Engagement: {post.likes + post.shares + post.comments}</Text>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export function HashtagSection() {
    const hashtags = formattedData
        .slice(0, 10) // Take the first 10 entries for simplicity
        .flatMap((post) => post.content.split(" ")) // Split content into words
        .filter((word) => word.length > 3) // Filter out short words
        .map((word) => `#${word.toLowerCase()}`) // Convert to hashtags
        .slice(0, 10); // Take top 10 hashtags

    return (
        <Card className="p-6 border border-gray-300 text-black rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <Hash className="h-5 w-5" />
                <Title>Trending Hashtags</Title>
            </div>
            <div className="flex flex-wrap gap-2">
                {hashtags.map((hashtag, index) => (
                    <Text key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                        {hashtag}
                    </Text>
                ))}
            </div>
        </Card>
    );
}
