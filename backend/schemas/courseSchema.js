const { z } = require('zod');

const courseSchema = z.object({
    title: z.string().min(1), // Ensures title is a non-empty string
    description: z.string().min(10), // Ensures description is a string with at least 10 characters
    videoId: z.string() // Ensures videoId is a string and is required
});

module.exports = courseSchema;
