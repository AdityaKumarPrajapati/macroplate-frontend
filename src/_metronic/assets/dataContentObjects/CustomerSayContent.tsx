interface CustomerSay {
    review: string;
    author: string;
    stars: number;
}

const CustomerSayContent: CustomerSay[] = [
    {
        review: `"Not only is the food awesome, fresh and tasty, but their customer service is also a class act, top-notch! They've responded quickly to every question I've ever had and resolved every issue - none that were their fault for the record - immediately. I can't give Macro Plate any higher praise. They're just awesome."`,
        author: 'Nik R.',
        stars: 5
    },
    {
        review: `"The best meal delivery service! I've used meal services in the past and Macro Plate is fresher and the food tastes amazing. I recently had a conflict with receiving my meals due to my schedule and Macro Plate's customer service was amazing in helping me out with an alternative for that week. Would 100% recommend it!"`,
        author: 'Erin B.',
        stars: 5
    },
    {
        review: `"Wow! I came back to Macro Plate after taking a break to be unhealthy and wow the food is even better than I remember. Super tasty, healthy, and high quality. And unlike many other meal prep companies, it is delivered fresh each day. There is a great variety. I've already turned on several family and friends and they love it too."`,
        author: 'JACKSON T.',
        stars: 5
    },
    {
        review: ` "I have been on Macro Plate for a little over a month and it is by far the best meal plan I have ever tried. It is so convenient, tastes delicious, and I also love that it is delivered daily to ensure freshness. Their customer service is amazing and I have yet to have any issues with deliveries (they are like delivery ninjas of the night). Thank you guys - you have been a lifesaver."`,
        author: 'Jess L.',
        stars: 5
    }
]


export { CustomerSayContent };