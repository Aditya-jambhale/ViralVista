const formattedData = [
  {
    "id": 1,
    "postType": "Reels",
    "content": "The importance of a morning routine.",
    "likes": 724,
    "comments": 300,
    "shares": 93,
    "reach": 2648,
    "date": "3/23/2021 (Tuesday)",
    "time": "13:38:50"
  },
  {
    "id": 2,
    "postType": "Carousel",
    "content": "How to stay motivated throughout the day.",
    "likes": 592,
    "comments": 147,
    "shares": 93,
    "reach": 2708,
    "date": "1/14/2022 (Friday)",
    "time": "1:27:35"
  },
  {
    "id": 3,
    "postType": "Reels",
    "content": "The best books to read this year.",
    "likes": 956,
    "comments": 409,
    "shares": 172,
    "reach": 2503,
    "date": "8/26/2021 (Thursday)",
    "time": "4:47:28"
  },
  {
    "id": 4,
    "postType": "Static Post",
    "content": "Tips for effective time management.",
    "likes": 848,
    "comments": 419,
    "shares": 158,
    "reach": 3997,
    "date": "9/29/2023 (Friday)",
    "time": "5:42:34"
  },
  {
    "id": 5,
    "postType": "Reels",
    "content": "The impact of social media on mental health.",
    "likes": 274,
    "comments": 202,
    "shares": 135,
    "reach": 3443,
    "date": "10/27/2021 (Wednesday)",
    "time": "18:31:41"
  },
  {
    "id": 6,
    "postType": "Carousel",
    "content": "How to maintain a healthy work-life balance.",
    "likes": 82,
    "comments": 296,
    "shares": 151,
    "reach": 4641,
    "date": "12/3/2021 (Friday)",
    "time": "22:21:45"
  },
  {
    "id": 7,
    "postType": "Carousel",
    "content": "The benefits of daily exercise.",
    "likes": 671,
    "comments": 137,
    "shares": 19,
    "reach": 3643,
    "date": "5/17/2023 (Wednesday)",
    "time": "16:31:14"
  },
  {
    "id": 8,
    "postType": "Carousel",
    "content": "How to create a successful business plan.",
    "likes": 947,
    "comments": 134,
    "shares": 73,
    "reach": 4221,
    "date": "2/10/2024 (Saturday)",
    "time": "19:55:21"
  },
  {
    "id": 9,
    "postType": "Carousel",
    "content": "The future of artificial intelligence.",
    "likes": 830,
    "comments": 393,
    "shares": 78,
    "reach": 2080,
    "date": "10/8/2022 (Saturday)",
    "time": "0:45:11"
  },
  {
    "id": 10,
    "postType": "Reels",
    "content": "Simple ways to reduce stress in daily life.",
    "likes": 759,
    "comments": 355,
    "shares": 24,
    "reach": 3030,
    "date": "3/11/2023 (Saturday)",
    "time": "20:32:36"
  },
  {
    "id": 11,
    "postType": "Carousel",
    "content": "The benefits of journaling for personal growth.",
    "likes": 640,
    "comments": 136,
    "shares": 144,
    "reach": 2583,
    "date": "10/7/2022 (Friday)",
    "time": "14:05:27"
  },
  {
    "id": 12,
    "postType": "Carousel",
    "content": "The best productivity apps for remote workers.",
    "likes": 528,
    "comments": 300,
    "shares": 127,
    "reach": 3346,
    "date": "9/11/2021 (Saturday)",
    "time": "15:59:03"
  },
  {
    "id": 13,
    "postType": "Carousel",
    "content": "Why self-care is essential for your well-being.",
    "likes": 133,
    "comments": 178,
    "shares": 135,
    "reach": 1621,
    "date": "9/30/2023 (Saturday)",
    "time": "17:21:49"
  },
  {
    "id": 14,
    "postType": "Reels",
    "content": "How to set realistic goals for the year.",
    "likes": 346,
    "comments": 466,
    "shares": 60,
    "reach": 1643,
    "date": "3/13/2023 (Monday)",
    "time": "6:26:10"
  },
  {
    "id": 15,
    "postType": "Static Post",
    "content": "The power of positive thinking.",
    "likes": 660,
    "comments": 212,
    "shares": 176,
    "reach": 3311,
    "date": "6/14/2023 (Wednesday)",
    "time": "16:39:45"
  },
  {
    "id": 16,
    "postType": "Reels",
    "content": "The best podcasts for entrepreneurs.",
    "likes": 25,
    "comments": 278,
    "shares": 116,
    "reach": 4948,
    "date": "9/30/2022 (Friday)",
    "time": "19:45:11"
  },
  {
    "id": 17,
    "postType": "Reels",
    "content": "The importance of networking for career growth.",
    "likes": 262,
    "comments": 377,
    "shares": 135,
    "reach": 3195,
    "date": "11/25/2021 (Thursday)",
    "time": "22:22:13"
  },
  {
    "id": 18,
    "postType": "Static Post",
    "content": "How to develop a growth mindset.",
    "likes": 45,
    "comments": 107,
    "shares": 20,
    "reach": 2359,
    "date": "4/4/2023 (Tuesday)",
    "time": "4:25:57"
  },
  {
    "id": 19,
    "postType": "Reels",
    "content": "Tips for improving communication skills.",
    "likes": 855,
    "comments": 203,
    "shares": 110,
    "reach": 4832,
    "date": "7/19/2023 (Wednesday)",
    "time": "16:44:53"
  },
  {
    "id": 20,
    "postType": "Static Post",
    "content": "How to build a personal brand.",
    "likes": 482,
    "comments": 465,
    "shares": 155,
    "reach": 4552,
    "date": "5/7/2023 (Sunday)",
    "time": "14:41:02"
  },
  {
    "id": 21,
    "postType": "Static Post",
    "content": "The role of technology in modern education.",
    "likes": 739,
    "comments": 70,
    "shares": 11,
    "reach": 2399,
    "date": "6/29/2021 (Tuesday)",
    "time": "16:14:01"
  },
  {
    "id": 22,
    "postType": "Static Post",
    "content": "The benefits of volunteering and giving back.",
    "likes": 849,
    "comments": 25,
    "shares": 119,
    "reach": 1086,
    "date": "5/27/2022 (Friday)",
    "time": "15:52:47"
  },
  {
    "id": 23,
    "postType": "Static Post",
    "content": "How to stay focused during long work sessions.",
    "likes": 790,
    "comments": 161,
    "shares": 169,
    "reach": 2564,
    "date": "6/30/2023 (Friday)",
    "time": "15:04:04"
  },
  {
    "id": 24,
    "postType": "Reels",
    "content": "The impact of nutrition on mental clarity.",
    "likes": 585,
    "comments": 459,
    "shares": 54,
    "reach": 3585,
    "date": "12/5/2021 (Sunday)",
    "time": "0:54:58"
  },
  {
    "id": 25,
    "postType": "Static Post",
    "content": "The best ways to stay productive while traveling.",
    "likes": 56,
    "comments": 67,
    "shares": 197,
    "reach": 1822,
    "date": "4/29/2023 (Saturday)",
    "time": "20:37:20"
  },
  {
    "id": 26,
    "postType": "Reels",
    "content": "How to prioritize your tasks effectively.",
    "likes": 12,
    "comments": 105,
    "shares": 189,
    "reach": 2575,
    "date": "7/1/2022 (Friday)",
    "time": "23:59:54"
  },
  {
    "id": 27,
    "postType": "Static Post",
    "content": "How to embrace change and adapt to new challenges.",
    "likes": 43,
    "comments": 308,
    "shares": 130,
    "reach": 2956,
    "date": "8/5/2022 (Friday)",
    "time": "13:11:05"
  },
  {
    "id": 28,
    "postType": "Reels",
    "content": "The importance of having a mentor.",
    "likes": 840,
    "comments": 263,
    "shares": 143,
    "reach": 1758,
    "date": "12/25/2023 (Monday)",
    "time": "12:16:43"
  },
  {
    "id": 29,
    "postType": "Reels",
    "content": "The power of reading for personal development.",
    "likes": 932,
    "comments": 421,
    "shares": 130,
    "reach": 3957,
    "date": "10/30/2022 (Sunday)",
    "time": "5:28:57"
  },
  {
    "id": 30,
    "postType": "Static Post",
    "content": "How to balance social media use and real life.",
    "likes": 241,
    "comments": 188,
    "shares": 34,
    "reach": 4226,
    "date": "1/23/2022 (Sunday)",
    "time": "4:56:50"
  },
  {
    "id": 31,
    "postType": "Carousel",
    "content": "How to manage your finances on a budget.",
    "likes": 398,
    "comments": 495,
    "shares": 89,
    "reach": 4194,
    "date": "1/20/2023 (Friday)",
    "time": "16:21:33"
  },
  {
    "id": 32,
    "postType": "Reels",
    "content": "The best ways to boost your creativity.",
    "likes": 562,
    "comments": 249,
    "shares": 181,
    "reach": 1984,
    "date": "1/25/2023 (Wednesday)",
    "time": "11:53:16"
  },
  {
    "id": 33,
    "postType": "Reels",
    "content": "The importance of setting boundaries in relationships.",
    "likes": 64,
    "comments": 18,
    "shares": 88,
    "reach": 2009,
    "date": "2/21/2022 (Monday)",
    "time": "14:45:46"
  },
  {
    "id": 34,
    "postType": "Static Post",
    "content": "How to deal with imposter syndrome.",
    "likes": 195,
    "comments": 231,
    "shares": 76,
    "reach": 3341,
    "date": "7/16/2023 (Sunday)",
    "time": "2:27:59"
  },
  {
    "id": 35,
    "postType": "Reels",
    "content": "The benefits of mindfulness and meditation.",
    "likes": 358,
    "comments": 387,
    "shares": 101,
    "reach": 1125,
    "date": "12/5/2021 (Sunday)",
    "time": "20:44:31"
  },
  {
    "id": 36,
    "postType": "Reels",
    "content": "The impact of gratitude on mental health.",
    "likes": 489,
    "comments": 86,
    "shares": 80,
    "reach": 1669,
    "date": "12/17/2021 (Friday)",
    "time": "14:12:43"
  },
  {
    "id": 37,
    "postType": "Carousel",
    "content": "How to build resilience during tough times.",
    "likes": 419,
    "comments": 91,
    "shares": 93,
    "reach": 4706,
    "date": "6/19/2023 (Monday)",
    "time": "19:14:28"
  },
  {
    "id": 38,
    "postType": "Carousel",
    "content": "The importance of lifelong learning.",
    "likes": 164,
    "comments": 139,
    "shares": 36,
    "reach": 4226,
    "date": "5/27/2022 (Friday)",
    "time": "9:18:42"
  },
  {
    "id": 39,
    "postType": "Static Post",
    "content": "The best strategies for overcoming procrastination.",
    "likes": 358,
    "comments": 293,
    "shares": 59,
    "reach": 2892,
    "date": "3/12/2023 (Sunday)",
    "time": "20:14:20"
  },
  {
    "id": 40,
    "postType": "Reels",
    "content": "How to maintain a positive mindset in the workplace.",
    "likes": 798,
    "comments": 263,
    "shares": 94,
    "reach": 3725,
    "date": "8/23/2023 (Wednesday)",
    "time": "16:54:05"
  },
  {
    "id": 41,
    "postType": "Reels",
    "content": "The role of artificial intelligence in healthcare.",
    "likes": 258,
    "comments": 31,
    "shares": 99,
    "reach": 1375,
    "date": "9/23/2021 (Thursday)",
    "time": "5:05:21"
  },
  {
    "id": 42,
    "postType": "Static Post",
    "content": "How to cultivate self-discipline.",
    "likes": 961,
    "comments": 407,
    "shares": 82,
    "reach": 3020,
    "date": "7/30/2022 (Saturday)",
    "time": "7:01:50"
  },
  {
    "id": 43,
    "postType": "Reels",
    "content": "The impact of travel on personal growth.",
    "likes": 301,
    "comments": 115,
    "shares": 151,
    "reach": 1263,
    "date": "6/10/2023 (Saturday)",
    "time": "7:35:34"
  },
  {
    "id": 44,
    "postType": "Static Post",
    "content": "The importance of sleep for overall health.",
    "likes": 273,
    "comments": 38,
    "shares": 12,
    "reach": 2100,
    "date": "4/18/2023 (Tuesday)",
    "time": "15:19:00"
  },
  {
    "id": 45,
    "postType": "Reels",
    "content": "How to improve your public speaking skills.",
    "likes": 359,
    "comments": 493,
    "shares": 47,
    "reach": 3981,
    "date": "11/26/2022 (Saturday)",
    "time": "19:08:34"
  },
  {
    "id": 46,
    "postType": "Static Post",
    "content": "How to stay motivated while working from home.",
    "likes": 955,
    "comments": 459,
    "shares": 163,
    "reach": 2126,
    "date": "12/28/2022 (Wednesday)",
    "time": "2:38:17"
  },
  {
    "id": 47,
    "postType": "Static Post",
    "content": "The best strategies for achieving work goals.",
    "likes": 57,
    "comments": 333,
    "shares": 184,
    "reach": 2836,
    "date": "5/3/2021 (Monday)",
    "time": "14:29:19"
  },
  {
    "id": 48,
    "postType": "Carousel",
    "content": "How to deal with burnout in the workplace.",
    "likes": 355,
    "comments": 192,
    "shares": 178,
    "reach": 2289,
    "date": "8/9/2022 (Tuesday)",
    "time": "11:58:19"
  },
  {
    "id": 49,
    "postType": "Reels",
    "content": "The benefits of a minimalist lifestyle.",
    "likes": 265,
    "comments": 304,
    "shares": 93,
    "reach": 4385,
    "date": "4/3/2022 (Sunday)",
    "time": "14:08:42"
  },
  {
    "id": 50,
    "postType": "Reels",
    "content": "How to organize your workspace for maximum productivity.",
    "likes": 450,
    "comments": 95,
    "shares": 49,
    "reach": 4879,
    "date": "3/2/2022 (Wednesday)",
    "time": "18:42:37"
  },
  {
    "id": 51,
    "postType": "Carousel",
    "content": "The power of habit stacking for success.",
    "likes": 364,
    "comments": 278,
    "shares": 64,
    "reach": 3299,
    "date": "5/1/2021 (Saturday)",
    "time": "12:09:14"
  },
  {
    "id": 52,
    "postType": "Reels",
    "content": "How to develop a growth-oriented mindset.",
    "likes": 195,
    "comments": 362,
    "shares": 18,
    "reach": 4385,
    "date": "10/15/2023 (Sunday)",
    "time": "11:54:33"
  },
  {
    "id": 53,
    "postType": "Static Post",
    "content": "The importance of regular exercise for mental health.",
    "likes": 620,
    "comments": 51,
    "shares": 113,
    "reach": 2322,
    "date": "3/14/2022 (Monday)",
    "time": "1:18:28"
  },
  {
    "id": 54,
    "postType": "Static Post",
    "content": "How to overcome fears and take bold actions.",
    "likes": 906,
    "comments": 158,
    "shares": 43,
    "reach": 3402,
    "date": "2/17/2022 (Thursday)",
    "time": "4:46:04"
  },
  {
    "id": 55,
    "postType": "Carousel",
    "content": "The best ways to improve your writing skills.",
    "likes": 441,
    "comments": 320,
    "shares": 129,
    "reach": 3686,
    "date": "4/19/2023 (Wednesday)",
    "time": "20:30:02"
  },
  {
    "id": 56,
    "postType": "Reels",
    "content": "How to create an inspiring vision board.",
    "likes": 911,
    "comments": 325,
    "shares": 8,
    "reach": 3014,
    "date": "1/18/2023 (Wednesday)",
    "time": "16:38:56"
  },
  {
    "id": 57,
    "postType": "Static Post",
    "content": "The importance of having a daily routine.",
    "likes": 366,
    "comments": 82,
    "shares": 122,
    "reach": 2659,
    "date": "2/13/2024 (Tuesday)",
    "time": "12:40:02"
  },
  {
    "id": 58,
    "postType": "Reels",
    "content": "How to be more present in the moment.",
    "likes": 796,
    "comments": 138,
    "shares": 199,
    "reach": 4538,
    "date": "4/20/2023 (Thursday)",
    "time": "10:18:58"
  },
  {
    "id": 59,
    "postType": "Reels",
    "content": "The role of mentorship in career growth.",
    "likes": 597,
    "comments": 354,
    "shares": 70,
    "reach": 1782,
    "date": "8/9/2022 (Tuesday)",
    "time": "1:59:18"
  },
  {
    "id": 60,
    "postType": "Static Post",
    "content": "How to improve your focus and concentration.",
    "likes": 20,
    "comments": 70,
    "shares": 4,
    "reach": 1157,
    "date": "10/1/2021 (Friday)",
    "time": "7:16:31"
  },
  {
    "id": 61,
    "postType": "Carousel",
    "content": "The benefits of creative expression.",
    "likes": 627,
    "comments": 422,
    "shares": 95,
    "reach": 3243,
    "date": "6/23/2021 (Wednesday)",
    "time": "11:23:16"
  },
  {
    "id": 62,
    "postType": "Carousel",
    "content": "How to use journaling for emotional clarity.",
    "likes": 102,
    "comments": 136,
    "shares": 72,
    "reach": 3751,
    "date": "12/8/2023 (Friday)",
    "time": "7:02:41"
  },
  {
    "id": 63,
    "postType": "Carousel",
    "content": "The best time management techniques for busy professionals.",
    "likes": 572,
    "comments": 253,
    "shares": 180,
    "reach": 1663,
    "date": "6/25/2022 (Saturday)",
    "time": "3:36:07"
  },
  {
    "id": 64,
    "postType": "Carousel",
    "content": "How to build a successful morning ritual.",
    "likes": 826,
    "comments": 213,
    "shares": 121,
    "reach": 3464,
    "date": "7/20/2021 (Tuesday)",
    "time": "20:42:11"
  },
  {
    "id": 65,
    "postType": "Carousel",
    "content": "The impact of music on productivity.",
    "likes": 777,
    "comments": 321,
    "shares": 95,
    "reach": 4140,
    "date": "5/17/2021 (Monday)",
    "time": "10:48:01"
  },
  {
    "id": 66,
    "postType": "Carousel",
    "content": "The importance of setting personal boundaries.",
    "likes": 791,
    "comments": 68,
    "shares": 5,
    "reach": 3949,
    "date": "3/14/2023 (Tuesday)",
    "time": "14:28:01"
  },
  {
    "id": 67,
    "postType": "Carousel",
    "content": "How to deal with negative feedback constructively.",
    "likes": 560,
    "comments": 356,
    "shares": 91,
    "reach": 3076,
    "date": "9/16/2021 (Thursday)",
    "time": "16:41:27"
  },
  {
    "id": 68,
    "postType": "Carousel",
    "content": "The benefits of learning a new language.",
    "likes": 728,
    "comments": 482,
    "shares": 183,
    "reach": 2323,
    "date": "9/5/2021 (Sunday)",
    "time": "13:54:34"
  },
  {
    "id": 69,
    "postType": "Reels",
    "content": "How to embrace your uniqueness and stand out.",
    "likes": 626,
    "comments": 35,
    "shares": 137,
    "reach": 4261,
    "date": "6/11/2021 (Friday)",
    "time": "15:56:19"
  },
  {
    "id": 70,
    "postType": "Reels",
    "content": "The role of artificial intelligence in business.",
    "likes": 1,
    "comments": 190,
    "shares": 37,
    "reach": 1321,
    "date": "1/12/2023 (Thursday)",
    "time": "23:30:07"
  },
  {
    "id": 71,
    "postType": "Reels",
    "content": "How to deal with toxic relationships.",
    "likes": 957,
    "comments": 75,
    "shares": 1,
    "reach": 1330,
    "date": "7/29/2023 (Saturday)",
    "time": "0:02:30"
  },
  {
    "id": 72,
    "postType": "Static Post",
    "content": "The power of gratitude journaling.",
    "likes": 921,
    "comments": 222,
    "shares": 86,
    "reach": 1977,
    "date": "11/16/2023 (Thursday)",
    "time": "3:31:21"
  },
  {
    "id": 73,
    "postType": "Reels",
    "content": "How to maintain work-life harmony in a remote environment.",
    "likes": 583,
    "comments": 66,
    "shares": 5,
    "reach": 1108,
    "date": "12/30/2022 (Friday)",
    "time": "5:10:23"
  },
  {
    "id": 74,
    "postType": "Static Post",
    "content": "The benefits of regular physical activity for mental clarity.",
    "likes": 896,
    "comments": 446,
    "shares": 159,
    "reach": 2980,
    "date": "3/7/2024 (Thursday)",
    "time": "2:55:40"
  },
  {
    "id": 75,
    "postType": "Reels",
    "content": "How to strengthen your emotional intelligence.",
    "likes": 464,
    "comments": 252,
    "shares": 182,
    "reach": 2260,
    "date": "10/17/2021 (Sunday)",
    "time": "22:36:00"
  },
  {
    "id": 76,
    "postType": "Reels",
    "content": "The best ways to relax and recharge after a stressful day.",
    "likes": 206,
    "comments": 442,
    "shares": 181,
    "reach": 3305,
    "date": "7/11/2022 (Monday)",
    "time": "13:56:43"
  },
  {
    "id": 77,
    "postType": "Reels",
    "content": "How to create a supportive network of like-minded people.",
    "likes": 66,
    "comments": 293,
    "shares": 156,
    "reach": 4830,
    "date": "11/20/2022 (Sunday)",
    "time": "9:10:32"
  },
  {
    "id": 78,
    "postType": "Static Post",
    "content": "The importance of financial literacy for young adults.",
    "likes": 267,
    "comments": 177,
    "shares": 33,
    "reach": 2402,
    "date": "8/3/2021 (Tuesday)",
    "time": "11:55:05"
  },
  {
    "id": 79,
    "postType": "Carousel",
    "content": "How to develop a sustainable work routine.",
    "likes": 924,
    "comments": 411,
    "shares": 28,
    "reach": 2727,
    "date": "7/12/2022 (Tuesday)",
    "time": "14:19:39"
  },
  {
    "id": 80,
    "postType": "Static Post",
    "content": "The benefits of practicing empathy in relationships.",
    "likes": 870,
    "comments": 92,
    "shares": 15,
    "reach": 1377,
    "date": "5/12/2022 (Thursday)",
    "time": "15:41:22"
  },
  {
    "id": 81,
    "postType": "Static Post",
    "content": "How to stay disciplined while working from home.",
    "likes": 688,
    "comments": 362,
    "shares": 108,
    "reach": 3473,
    "date": "5/22/2021 (Saturday)",
    "time": "12:24:46"
  },
  {
    "id": 82,
    "postType": "Reels",
    "content": "The best ways to practice self-compassion.",
    "likes": 365,
    "comments": 10,
    "shares": 11,
    "reach": 2060,
    "date": "7/14/2023 (Friday)",
    "time": "12:13:57"
  },
  {
    "id": 83,
    "postType": "Reels",
    "content": "How to get out of a creative rut.",
    "likes": 894,
    "comments": 171,
    "shares": 154,
    "reach": 3440,
    "date": "11/17/2023 (Friday)",
    "time": "19:24:23"
  },
  {
    "id": 84,
    "postType": "Carousel",
    "content": "The importance of setting achievable milestones.",
    "likes": 292,
    "comments": 341,
    "shares": 80,
    "reach": 3116,
    "date": "11/18/2021 (Thursday)",
    "time": "10:53:11"
  },
  {
    "id": 85,
    "postType": "Reels",
    "content": "How to stay motivated during long-term projects.",
    "likes": 855,
    "comments": 248,
    "shares": 77,
    "reach": 3091,
    "date": "3/30/2022 (Wednesday)",
    "time": "7:41:57"
  },
  {
    "id": 86,
    "postType": "Carousel",
    "content": "The benefits of taking breaks throughout the workday.",
    "likes": 78,
    "comments": 78,
    "shares": 108,
    "reach": 1673,
    "date": "6/25/2023 (Sunday)",
    "time": "12:18:45"
  },
  {
    "id": 87,
    "postType": "Static Post",
    "content": "How to handle uncertainty with confidence.",
    "likes": 151,
    "comments": 110,
    "shares": 6,
    "reach": 2419,
    "date": "6/18/2021 (Friday)",
    "time": "9:44:09"
  },
  {
    "id": 88,
    "postType": "Carousel",
    "content": "The role of technology in modern healthcare.",
    "likes": 361,
    "comments": 262,
    "shares": 76,
    "reach": 2025,
    "date": "4/27/2023 (Thursday)",
    "time": "18:23:16"
  },
  {
    "id": 89,
    "postType": "Reels",
    "content": "How to embrace the power of vulnerability.",
    "likes": 657,
    "comments": 244,
    "shares": 21,
    "reach": 2219,
    "date": "6/3/2022 (Friday)",
    "time": "10:24:52"
  },
  {
    "id": 90,
    "postType": "Reels",
    "content": "The best strategies for improving mental health.",
    "likes": 409,
    "comments": 267,
    "shares": 105,
    "reach": 3115,
    "date": "11/25/2023 (Saturday)",
    "time": "2:57:23"
  },
  {
    "id": 91,
    "postType": "Static Post",
    "content": "How to stay motivated during challenging times.",
    "likes": 892,
    "comments": 252,
    "shares": 190,
    "reach": 4227,
    "date": "2/13/2022 (Sunday)",
    "time": "7:52:45"
  },
  {
    "id": 92,
    "postType": "Carousel",
    "content": "The importance of building healthy habits for success.",
    "likes": 992,
    "comments": 87,
    "shares": 85,
    "reach": 2799,
    "date": "9/11/2021 (Saturday)",
    "time": "2:37:22"
  },
  {
    "id": 93,
    "postType": "Reels",
    "content": "How to create a successful career path in any industry.",
    "likes": 654,
    "comments": 313,
    "shares": 89,
    "reach": 1908,
    "date": "9/15/2021 (Wednesday)",
    "time": "5:27:32"
  },
  {
    "id": 94,
    "postType": "Carousel",
    "content": "The benefits of embracing failure as part of success.",
    "likes": 558,
    "comments": 312,
    "shares": 62,
    "reach": 4434,
    "date": "2/27/2024 (Tuesday)",
    "time": "3:09:24"
  },
  {
    "id": 95,
    "postType": "Static Post",
    "content": "How to enhance your problem-solving skills.",
    "likes": 877,
    "comments": 320,
    "shares": 135,
    "reach": 3930,
    "date": "8/13/2021 (Friday)",
    "time": "8:57:00"
  },
  {
    "id": 96,
    "postType": "Reels",
    "content": "The importance of creating a vision for your future.",
    "likes": 225,
    "comments": 17,
    "shares": 168,
    "reach": 1871,
    "date": "5/17/2021 (Monday)",
    "time": "12:58:09"
  },
  {
    "id": 97,
    "postType": "Static Post",
    "content": "How to balance ambition with patience.",
    "likes": 572,
    "comments": 438,
    "shares": 62,
    "reach": 4296,
    "date": "6/3/2021 (Thursday)",
    "time": "20:27:56"
  },
  {
    "id": 98,
    "postType": "Static Post",
    "content": "The benefits of surrounding yourself with positive influences.",
    "likes": 58,
    "comments": 385,
    "shares": 114,
    "reach": 2820,
    "date": "3/31/2022 (Thursday)",
    "time": "12:39:33"
  },
  {
    "id": 99,
    "postType": "Carousel",
    "content": "How to create a healthy relationship with food.",
    "likes": 225,
    "comments": 209,
    "shares": 80,
    "reach": 1835,
    "date": "1/18/2022 (Tuesday)",
    "time": "15:11:45"
  },
  {
    "id": 100,
    "postType": "Carousel",
    "content": "The importance of practicing self-reflection.",
    "likes": 430,
    "comments": 165,
    "shares": 21,
    "reach": 4479,
    "date": "11/26/2022 (Saturday)",
    "time": "14:19:21"
  }
]

export default formattedData;