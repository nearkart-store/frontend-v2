"use server"

// Complete NearKart product data with enhanced information
const mockData = {
  Categories: [
    {
      Id: 1,
      Name: "Mobile",
      Products: [
        {
          Id: 1,
          Name: "iPhone 15",
          Description:
            "The iPhone 15 features a 6.1-inch Super Retina XDR OLED display, while the iPhone 15 Plus offers a 6.7-inch version, both supporting HDR with peak brightness up to 2000 nits. Powered by the A16 Bionic chip, they come in 128 GB, 256 GB, and 512 GB storage options.",
          specifications: {
            Display: {
              Size: "6.1-inch (15) / 6.7-inch (15 Plus)",
              Type: "Super Retina XDR OLED",
              Brightness: "Up to 2000 nits",
              HDR: true,
            },
            Processor: "Apple A16 Bionic",
            "Storage Options": ["128GB", "256GB", "512GB"],
          },
          Images: ["https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 1,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY",
              Price: "61500.00",
              Rating: "4.5",
            },
            {
              ProductID: 1,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4",
              Price: "64999.00",
              Rating: "4.6",
            },
          ],
          reviews: [
            {
              id: "r1",
              userName: "TechEnthusiast",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Amazing phone with great camera",
              content: "The iPhone 15 is a fantastic upgrade with excellent camera quality and smooth performance.",
              date: "2023-12-15",
              helpfulCount: 42,
            },
          ],
        },
        {
          Id: 2,
          Name: "Samsung Galaxy S25 Ultra",
          Description:
            "The Samsung Galaxy S25 series, unveiled in January 2025, comprises the S25, S25+, and S25 Ultra models. Features advanced AI capabilities and stunning camera system.",
          specifications: {
            Display: "6.2-inch Dynamic LTPO AMOLED 2X",
            Processor: "Snapdragon 8 Elite",
            RAM: "12GB",
            Storage: ["128GB", "256GB"],
          },
          Images: ["https://m.media-amazon.com/images/I/61w7JQ+BFOL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 2,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Samsung-Galaxy-Smartphone-Silver-Storage/dp/B0DSKNLFBG",
              Price: "80999.00",
              Rating: "4.6",
            },
            {
              ProductID: 2,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/samsung-galaxy-s25-ultra/p/itm123456789",
              Price: "82999.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r2",
              userName: "AndroidUser",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great Android flagship",
              content: "Excellent performance and camera quality. The S Pen is very useful.",
              date: "2023-11-20",
              helpfulCount: 28,
            },
          ],
        },
        {
          Id: 3,
          Name: "OnePlus 12",
          Description:
            "OnePlus 12 with Snapdragon 8 Gen 3, 120Hz LTPO AMOLED display, and 100W fast charging. Premium flagship experience at competitive pricing.",
          specifications: {
            Display: "6.82-inch LTPO AMOLED",
            Processor: "Snapdragon 8 Gen 3",
            RAM: "12GB/16GB",
            Storage: ["256GB", "512GB"],
          },
          Images: ["https://m.media-amazon.com/images/I/71ZOtVaFc7L._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 3,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/OnePlus-12-Silky-Black-256GB/dp/B0CQHX8KLM",
              Price: "64999.00",
              Rating: "4.4",
            },
            {
              ProductID: 3,
              WebsiteName: "OnePlus Store",
              WebsiteURL: "https://www.oneplus.in/12",
              Price: "64999.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r3",
              userName: "OnePlusUser",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Excellent value flagship",
              content: "Great performance, camera, and build quality. Fast charging is amazing.",
              date: "2024-01-10",
              helpfulCount: 35,
            },
          ],
        },
        {
          Id: 4,
          Name: "Google Pixel 8 Pro",
          Description:
            "Google Pixel 8 Pro with advanced AI photography, Magic Eraser, and pure Android experience. Best-in-class computational photography.",
          specifications: {
            Display: "6.7-inch LTPO OLED",
            Processor: "Google Tensor G3",
            RAM: "12GB",
            Storage: ["128GB", "256GB", "512GB"],
          },
          Images: ["https://m.media-amazon.com/images/I/71FuI8YvCNL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 4,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Google-Pixel-Pro-Obsidian-128GB/dp/B0CGTNPFZD",
              Price: "84999.00",
              Rating: "4.3",
            },
            {
              ProductID: 4,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/google-pixel-8-pro/p/itm456789123",
              Price: "86999.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r4",
              userName: "PhotoLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Best camera phone",
              content: "The camera quality is unmatched. AI features are incredibly useful.",
              date: "2023-10-25",
              helpfulCount: 48,
            },
          ],
        },
        {
          Id: 5,
          Name: "Xiaomi 14 Ultra",
          Description:
            "Xiaomi 14 Ultra with Leica cameras, Snapdragon 8 Gen 3, and premium build quality. Professional photography capabilities.",
          specifications: {
            Display: "6.73-inch LTPO AMOLED",
            Processor: "Snapdragon 8 Gen 3",
            RAM: "12GB/16GB",
            Storage: ["256GB", "512GB", "1TB"],
          },
          Images: ["https://m.media-amazon.com/images/I/71nP8YgVzBL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 5,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Xiaomi-14-Ultra-Black-256GB/dp/B0D1234567",
              Price: "89999.00",
              Rating: "4.5",
            },
            {
              ProductID: 5,
              WebsiteName: "Mi Store",
              WebsiteURL: "https://www.mi.com/in/xiaomi-14-ultra",
              Price: "89999.00",
              Rating: "4.6",
            },
          ],
          reviews: [
            {
              id: "r5",
              userName: "CameraExpert",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Professional camera system",
              content: "Leica partnership delivers exceptional photo quality. Build quality is premium.",
              date: "2024-02-15",
              helpfulCount: 32,
            },
          ],
        },
      ],
    },
    {
      Id: 2,
      Name: "Laptops",
      Products: [
        {
          Id: 6,
          Name: "MacBook Pro M4",
          Description:
            "Powerful laptop with M4 chip. The latest MacBook Pro models feature significant performance enhancements with up to 128GB of unified memory.",
          specifications: {
            Processor: "Apple M4 Pro / M4 Max",
            RAM: "Up to 128GB unified memory",
            "Battery Life": "Up to 24 hours",
            Display: "14-inch/16-inch Liquid Retina XDR",
          },
          Images: ["https://m.media-amazon.com/images/I/61eA9PkZ07L._AC_UY327_FMwebp_QL65_.jpg"],
          ProductLinks: [
            {
              ProductID: 6,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Apple-MacBook-Laptop-12%E2%80%91core-16%E2%80%91core/dp/B0DLHQC28P",
              Price: "191990.00",
              Rating: "5.0",
            },
            {
              ProductID: 6,
              WebsiteName: "Apple Store",
              WebsiteURL: "https://www.apple.com/in/macbook-pro/",
              Price: "199900.00",
              Rating: "4.9",
            },
          ],
          reviews: [
            {
              id: "r6",
              userName: "Developer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Perfect for development",
              content: "Amazing performance for coding and development work. Battery life is incredible.",
              date: "2023-10-15",
              helpfulCount: 35,
            },
          ],
        },
        {
          Id: 7,
          Name: "Dell XPS 13 Plus",
          Description:
            "Premium ultrabook with 12th Gen Intel processors, stunning InfinityEdge display, and premium build quality.",
          specifications: {
            Processor: "Intel Core i7-1360P",
            RAM: "16GB/32GB LPDDR5",
            Storage: "512GB/1TB SSD",
            Display: "13.4-inch OLED/LCD",
          },
          Images: ["https://m.media-amazon.com/images/I/61Zs7MZxb9L._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 7,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Dell-XPS-13-Plus-9320/dp/B0B123456",
              Price: "149990.00",
              Rating: "4.4",
            },
            {
              ProductID: 7,
              WebsiteName: "Dell Store",
              WebsiteURL: "https://www.dell.com/en-in/shop/laptops/xps-13-plus/spd/xps-13-9320-laptop",
              Price: "154990.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r7",
              userName: "BusinessUser",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great for productivity",
              content: "Excellent build quality and performance. Display is stunning.",
              date: "2023-09-20",
              helpfulCount: 28,
            },
          ],
        },
        {
          Id: 8,
          Name: "HP Spectre x360",
          Description:
            "Convertible laptop with 360-degree hinge, Intel Evo platform, and premium design. Perfect for creative professionals.",
          specifications: {
            Processor: "Intel Core i7-1355U",
            RAM: "16GB LPDDR5",
            Storage: "1TB SSD",
            Display: "13.5-inch OLED touchscreen",
          },
          Images: ["https://m.media-amazon.com/images/I/71QvGvJZzgL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 8,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/HP-Spectre-x360-13-5-inch/dp/B0C123456",
              Price: "139990.00",
              Rating: "4.5",
            },
            {
              ProductID: 8,
              WebsiteName: "HP Store",
              WebsiteURL: "https://www.hp.com/in-en/laptops/2-in-1s/spectre-x360-13-5-inch.html",
              Price: "144990.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r8",
              userName: "Designer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Perfect for creative work",
              content: "The convertible design is very useful. OLED display is gorgeous.",
              date: "2023-11-05",
              helpfulCount: 22,
            },
          ],
        },
        {
          Id: 9,
          Name: "Lenovo ThinkPad X1 Carbon",
          Description:
            "Business laptop with legendary ThinkPad reliability, 12th Gen Intel processors, and enterprise-grade security.",
          specifications: {
            Processor: "Intel Core i7-1260P",
            RAM: "16GB LPDDR5",
            Storage: "512GB SSD",
            Display: "14-inch WUXGA IPS",
          },
          Images: ["https://m.media-amazon.com/images/I/61vFO2yOHsL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 9,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Lenovo-ThinkPad-X1-Carbon-Gen10/dp/B0D123456",
              Price: "159990.00",
              Rating: "4.6",
            },
            {
              ProductID: 9,
              WebsiteName: "Lenovo Store",
              WebsiteURL: "https://www.lenovo.com/in/en/laptops/thinkpad/x1-series/x1-carbon-gen-10/",
              Price: "164990.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r9",
              userName: "ITManager",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Reliable business laptop",
              content: "Excellent keyboard and build quality. Perfect for business use.",
              date: "2023-08-30",
              helpfulCount: 31,
            },
          ],
        },
        {
          Id: 10,
          Name: "ASUS ROG Zephyrus G14",
          Description:
            "Gaming laptop with AMD Ryzen 9 processor, RTX 4070 graphics, and compact 14-inch form factor. Perfect for gaming on the go.",
          specifications: {
            Processor: "AMD Ryzen 9 7940HS",
            GPU: "NVIDIA RTX 4070",
            RAM: "32GB DDR5",
            Storage: "1TB SSD",
          },
          Images: ["https://m.media-amazon.com/images/I/81vFqKZzVeL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 10,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/ASUS-ROG-Zephyrus-G14-GA403UV/dp/B0E123456",
              Price: "189990.00",
              Rating: "4.7",
            },
            {
              ProductID: 10,
              WebsiteName: "ASUS Store",
              WebsiteURL: "https://www.asus.com/in/laptops/for-gaming/rog-zephyrus/rog-zephyrus-g14-2023/",
              Price: "194990.00",
              Rating: "4.6",
            },
          ],
          reviews: [
            {
              id: "r10",
              userName: "Gamer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Excellent gaming laptop",
              content: "Great performance in a compact form factor. Runs all games smoothly.",
              date: "2023-12-01",
              helpfulCount: 45,
            },
          ],
        },
      ],
    },
    {
      Id: 3,
      Name: "Headphones",
      Products: [
        {
          Id: 11,
          Name: "Sony WH-1000XM5",
          Description:
            "Best noise-canceling headphones. Premium over-ear wireless headphones featuring industry-leading noise cancellation.",
          specifications: {
            Type: "Over-ear wireless headphones",
            "Battery Life": "Up to 30 hours",
            Features: ["Adaptive Sound Control", "Multipoint connectivity"],
            "Noise Cancellation": "Industry-leading",
          },
          Images: ["https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg"],
          ProductLinks: [
            {
              ProductID: 11,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Sony-WH-1000XM5-Cancelling-Headphones-Connectivity/dp/B0BZP2H373",
              Price: "29990.00",
              Rating: "4.4",
            },
            {
              ProductID: 11,
              WebsiteName: "Sony Store",
              WebsiteURL: "https://www.sony.co.in/headphones/wh-1000xm5",
              Price: "32990.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r11",
              userName: "AudioLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Excellent noise cancellation",
              content: "The best headphones I've ever used. Noise cancellation is incredible.",
              date: "2023-09-10",
              helpfulCount: 52,
            },
          ],
        },
        {
          Id: 12,
          Name: "Bose QuietComfort 45",
          Description:
            "Premium noise-canceling headphones with legendary Bose sound quality and comfort for all-day listening.",
          specifications: {
            Type: "Over-ear wireless headphones",
            "Battery Life": "Up to 24 hours",
            Features: ["Aware Mode", "EQ Control"],
            "Noise Cancellation": "Active",
          },
          Images: ["https://m.media-amazon.com/images/I/51JKxzKoysL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 12,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Bose-QuietComfort-45-Bluetooth-Headphones/dp/B098FKXT8L",
              Price: "32900.00",
              Rating: "4.3",
            },
            {
              ProductID: 12,
              WebsiteName: "Bose Store",
              WebsiteURL: "https://www.bose.in/products/headphones/over-ear-headphones/quietcomfort-45-headphones",
              Price: "34500.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r12",
              userName: "MusicFan",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great comfort and sound",
              content: "Very comfortable for long listening sessions. Sound quality is excellent.",
              date: "2023-08-15",
              helpfulCount: 38,
            },
          ],
        },
        {
          Id: 13,
          Name: "Apple AirPods Max",
          Description:
            "Premium over-ear headphones with Apple's H1 chip, spatial audio, and seamless integration with Apple devices.",
          specifications: {
            Type: "Over-ear wireless headphones",
            "Battery Life": "Up to 20 hours",
            Features: ["Spatial Audio", "Adaptive EQ", "Transparency Mode"],
            Chip: "Apple H1",
          },
          Images: ["https://m.media-amazon.com/images/I/81A7MjCuNgL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 13,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Apple-AirPods-Max-Space-Gray/dp/B08PZJN7BD",
              Price: "59900.00",
              Rating: "4.2",
            },
            {
              ProductID: 13,
              WebsiteName: "Apple Store",
              WebsiteURL: "https://www.apple.com/in/airpods-max/",
              Price: "59900.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r13",
              userName: "AppleFan",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Premium Apple experience",
              content: "Great integration with Apple devices. Build quality is premium but heavy.",
              date: "2023-07-20",
              helpfulCount: 29,
            },
          ],
        },
        {
          Id: 14,
          Name: "Sennheiser HD 660S2",
          Description:
            "Open-back audiophile headphones with exceptional sound quality for critical listening and professional use.",
          specifications: {
            Type: "Open-back wired headphones",
            "Frequency Response": "8 Hz - 41,500 Hz",
            Impedance: "300 ohms",
            Features: ["Detachable cable", "Velour ear pads"],
          },
          Images: ["https://m.media-amazon.com/images/I/71QvGvJZzgL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 14,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Sennheiser-HD-660S2-Headphones/dp/B0F123456",
              Price: "54990.00",
              Rating: "4.6",
            },
            {
              ProductID: 14,
              WebsiteName: "Sennheiser Store",
              WebsiteURL: "https://www.sennheiser.com/hd-660s2",
              Price: "56990.00",
              Rating: "4.7",
            },
          ],
          reviews: [
            {
              id: "r14",
              userName: "Audiophile",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Exceptional sound quality",
              content: "Perfect for critical listening. Sound stage and detail are incredible.",
              date: "2023-06-25",
              helpfulCount: 41,
            },
          ],
        },
        {
          Id: 15,
          Name: "JBL Live 660NC",
          Description:
            "Wireless noise-canceling headphones with JBL signature sound, long battery life, and comfortable design.",
          specifications: {
            Type: "Over-ear wireless headphones",
            "Battery Life": "Up to 50 hours",
            Features: ["Adaptive Noise Cancelling", "Voice Assistant"],
            "Quick Charge": "2 hours in 10 minutes",
          },
          Images: ["https://m.media-amazon.com/images/I/71nP8YgVzBL._SX679_.jpg"],
          ProductLinks: [
            {
              ProductID: 15,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/JBL-Live-660NC-Wireless-Headphones/dp/B08G123456",
              Price: "14999.00",
              Rating: "4.1",
            },
            {
              ProductID: 15,
              WebsiteName: "JBL Store",
              WebsiteURL: "https://www.jbl.com/headphones/LIVE660NC.html",
              Price: "16999.00",
              Rating: "4.2",
            },
          ],
          reviews: [
            {
              id: "r15",
              userName: "BassLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great value for money",
              content: "Good sound quality and excellent battery life. Comfortable for long use.",
              date: "2023-05-30",
              helpfulCount: 26,
            },
          ],
        },
      ],
    },
    {
      Id: 4,
      Name: "Clothings",
      Products: [
        {
          Id: 16,
          Name: "Nike Air Force 1",
          Description:
            "Classic basketball sneakers with timeless design, premium leather construction, and iconic Nike styling.",
          specifications: {
            Material: "Premium leather upper",
            Sole: "Rubber outsole with pivot points",
            Closure: "Lace-up",
            Style: "Low-top basketball shoe",
          },
          Images: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
          ],
          ProductLinks: [
            {
              ProductID: 16,
              WebsiteName: "Nike Store",
              WebsiteURL: "https://www.nike.com/in/t/air-force-1-07-shoes-WrLlWX",
              Price: "7495.00",
              Rating: "4.5",
            },
            {
              ProductID: 16,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Nike-Air-Force-White-White/dp/B0H123456",
              Price: "7995.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r16",
              userName: "SneakerHead",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Timeless classic",
              content: "Perfect everyday sneaker. Quality is excellent and style never goes out of fashion.",
              date: "2023-12-10",
              helpfulCount: 33,
            },
          ],
        },
        {
          Id: 17,
          Name: "Adidas Ultraboost 22",
          Description:
            "Premium running shoes with Boost midsole technology, Primeknit upper, and responsive cushioning for ultimate comfort.",
          specifications: {
            Technology: "Boost midsole",
            Upper: "Primeknit",
            Outsole: "Continental Rubber",
            Use: "Running/Lifestyle",
          },
          Images: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
          ],
          ProductLinks: [
            {
              ProductID: 17,
              WebsiteName: "Adidas Store",
              WebsiteURL: "https://www.adidas.co.in/ultraboost-22-shoes/GZ0127.html",
              Price: "17999.00",
              Rating: "4.6",
            },
            {
              ProductID: 17,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/adidas-Ultraboost-22-Running-Shoes/dp/B0I123456",
              Price: "18999.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r17",
              userName: "Runner",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Amazing comfort",
              content: "Best running shoes I've ever owned. The Boost technology is incredible.",
              date: "2023-11-15",
              helpfulCount: 42,
            },
          ],
        },
        {
          Id: 18,
          Name: "Levi's 511 Slim Jeans",
          Description:
            "Classic slim-fit jeans with authentic Levi's styling, premium denim construction, and timeless appeal.",
          specifications: {
            Fit: "Slim",
            Material: "99% Cotton, 1% Elastane",
            Rise: "Mid-rise",
            Closure: "Zip fly with button",
          },
          Images: [
            "https://lsco.scene7.com/is/image/lsco/045113654-front-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=750&hei=1000",
          ],
          ProductLinks: [
            {
              ProductID: 18,
              WebsiteName: "Levi's Store",
              WebsiteURL: "https://www.levi.in/511-slim-jeans/p/045113654",
              Price: "3999.00",
              Rating: "4.3",
            },
            {
              ProductID: 18,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Levis-511-Slim-Jeans/dp/B0J123456",
              Price: "4299.00",
              Rating: "4.2",
            },
          ],
          reviews: [
            {
              id: "r18",
              userName: "FashionLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great fit and quality",
              content: "Perfect slim fit. Quality denim that lasts long. True to size.",
              date: "2023-10-20",
              helpfulCount: 28,
            },
          ],
        },
        {
          Id: 19,
          Name: "Puma Essentials Logo Hoodie",
          Description:
            "Comfortable cotton hoodie with classic Puma branding, perfect for casual wear and athletic activities.",
          specifications: {
            Material: "80% Cotton, 20% Polyester",
            Fit: "Regular",
            Features: ["Kangaroo pocket", "Drawstring hood"],
            Care: "Machine washable",
          },
          Images: [
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586688/06/mod01/fnd/IND/fmt/png/Essentials-Logo-Hoodie",
          ],
          ProductLinks: [
            {
              ProductID: 19,
              WebsiteName: "Puma Store",
              WebsiteURL: "https://in.puma.com/essentials-logo-hoodie/586688.html",
              Price: "2999.00",
              Rating: "4.4",
            },
            {
              ProductID: 19,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Puma-Essentials-Logo-Hoodie/dp/B0K123456",
              Price: "3299.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r19",
              userName: "ComfortSeeker",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Comfortable and stylish",
              content: "Great quality hoodie. Comfortable fabric and good fit.",
              date: "2023-09-25",
              helpfulCount: 19,
            },
          ],
        },
        {
          Id: 20,
          Name: "H&M Cotton T-Shirt",
          Description:
            "Basic cotton t-shirt with comfortable fit, available in multiple colors. Perfect for everyday casual wear.",
          specifications: {
            Material: "100% Cotton",
            Fit: "Regular",
            Neckline: "Crew neck",
            Sleeve: "Short sleeve",
          },
          Images: ["/placeholder.svg?height=400&width=400"],
          ProductLinks: [
            {
              ProductID: 20,
              WebsiteName: "H&M Store",
              WebsiteURL: "https://www2.hm.com/en_in/productpage.0713759001.html",
              Price: "799.00",
              Rating: "4.1",
            },
            {
              ProductID: 20,
              WebsiteName: "Myntra",
              WebsiteURL: "https://www.myntra.com/tshirts/hm/hm-men-cotton-tshirt/123456/buy",
              Price: "899.00",
              Rating: "4.0",
            },
          ],
          reviews: [
            {
              id: "r20",
              userName: "BasicWearer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Good basic tee",
              content: "Comfortable cotton fabric. Good for the price. Fits well.",
              date: "2023-08-10",
              helpfulCount: 15,
            },
          ],
        },
      ],
    },
    {
      Id: 5,
      Name: "Home Appliances",
      Products: [
        {
          Id: 21,
          Name: "Dyson V15 Detect",
          Description:
            "Advanced cordless vacuum with laser dust detection, powerful suction, and intelligent cleaning modes.",
          specifications: {
            Type: "Cordless stick vacuum",
            "Battery Life": "Up to 60 minutes",
            Features: ["Laser dust detection", "LCD screen", "5 cleaning modes"],
            "Bin Capacity": "0.77L",
          },
          Images: [
            "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/vacuum-cleaners/V15/V15-Detect/PDP/Dyson-V15-Detect-Absolute-PDP-Hero-1.jpg",
          ],
          ProductLinks: [
            {
              ProductID: 21,
              WebsiteName: "Dyson Store",
              WebsiteURL: "https://www.dyson.in/vacuum-cleaners/cordless/v15/detect-absolute",
              Price: "65900.00",
              Rating: "4.7",
            },
            {
              ProductID: 21,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Dyson-V15-Detect-Absolute/dp/B0L123456",
              Price: "67900.00",
              Rating: "4.6",
            },
          ],
          reviews: [
            {
              id: "r21",
              userName: "CleaningExpert",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Revolutionary cleaning",
              content: "The laser detection is amazing. You can see dust you never knew existed.",
              date: "2023-12-05",
              helpfulCount: 38,
            },
          ],
        },
        {
          Id: 22,
          Name: "LG 687L Side by Side Refrigerator",
          Description:
            "Large capacity side-by-side refrigerator with InstaView door, smart connectivity, and energy-efficient operation.",
          specifications: {
            Capacity: "687 Liters",
            Type: "Side by Side",
            Features: ["InstaView Door-in-Door", "Wi-Fi connectivity", "Linear Compressor"],
            "Energy Rating": "3 Star",
          },
          Images: [
            "https://www.lg.com/in/images/refrigerators/md07513049/gallery/GC-X247CSAV-Refrigerators-Front-View-D-01.jpg",
          ],
          ProductLinks: [
            {
              ProductID: 22,
              WebsiteName: "LG Store",
              WebsiteURL: "https://www.lg.com/in/refrigerators/lg-gc-x247csav",
              Price: "89990.00",
              Rating: "4.4",
            },
            {
              ProductID: 22,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/LG-687L-Side-Refrigerator/dp/B0M123456",
              Price: "92990.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r22",
              userName: "HomeOwner",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Great capacity and features",
              content: "Perfect for large families. InstaView feature is very convenient.",
              date: "2023-11-20",
              helpfulCount: 25,
            },
          ],
        },
        {
          Id: 23,
          Name: "Philips Air Fryer XXL",
          Description: "Large capacity air fryer with Rapid Air technology for healthy cooking with little to no oil.",
          specifications: {
            Capacity: "7.3 Liters",
            Technology: "Rapid Air",
            Features: ["Digital display", "7 preset programs", "Dishwasher safe"],
            Power: "2225W",
          },
          Images: [
            "https://www.philips.co.in/c-dam/b2c/category-pages/household/kitchen-appliances/air-fryers/HD9270_90-IMS-en_IN-001.jpg",
          ],
          ProductLinks: [
            {
              ProductID: 23,
              WebsiteName: "Philips Store",
              WebsiteURL: "https://www.philips.co.in/c-p/HD9270_90/airfryer-xxl",
              Price: "24995.00",
              Rating: "4.5",
            },
            {
              ProductID: 23,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Philips-HD9270-90-Digital-Airfryer/dp/B0N123456",
              Price: "26995.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r23",
              userName: "HealthyCook",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Excellent for healthy cooking",
              content: "Makes crispy food with minimal oil. Large capacity is perfect for families.",
              date: "2023-10-15",
              helpfulCount: 32,
            },
          ],
        },
        {
          Id: 24,
          Name: "Samsung 8kg Front Load Washing Machine",
          Description:
            "Energy-efficient front-load washing machine with AI-powered wash cycles and steam cleaning technology.",
          specifications: {
            Capacity: "8 kg",
            Type: "Front Load",
            Features: ["AI Wash", "Steam Wash", "Eco Bubble"],
            "Energy Rating": "5 Star",
          },
          Images: [
            "https://images.samsung.com/is/image/samsung/in-front-loading-washer-ww80t504dan-ww80t504dan-tl-frontsilver-279117803",
          ],
          ProductLinks: [
            {
              ProductID: 24,
              WebsiteName: "Samsung Store",
              WebsiteURL: "https://www.samsung.com/in/washers-and-dryers/front-load-washers/ww80t504dan-tl/",
              Price: "42990.00",
              Rating: "4.3",
            },
            {
              ProductID: 24,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Samsung-8kg-Front-Load-Washing-Machine/dp/B0O123456",
              Price: "44990.00",
              Rating: "4.2",
            },
          ],
          reviews: [
            {
              id: "r24",
              userName: "LaundryExpert",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Good washing performance",
              content: "Cleans clothes well. AI wash feature is convenient. Quiet operation.",
              date: "2023-09-30",
              helpfulCount: 27,
            },
          ],
        },
        {
          Id: 25,
          Name: "Voltas 1.5 Ton Split AC",
          Description:
            "Energy-efficient split air conditioner with copper condenser, fast cooling, and smart connectivity features.",
          specifications: {
            Capacity: "1.5 Ton",
            Type: "Split AC",
            Features: ["Copper condenser", "Wi-Fi enabled", "4-in-1 adjustable mode"],
            "Energy Rating": "3 Star",
          },
          Images: ["/placeholder.svg?height=400&width=400"],
          ProductLinks: [
            {
              ProductID: 25,
              WebsiteName: "Voltas Store",
              WebsiteURL: "https://www.voltasbeko.com/183v-cya-1-5-ton-3-star-split-ac",
              Price: "32990.00",
              Rating: "4.1",
            },
            {
              ProductID: 25,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Voltas-1-5-Ton-Split-AC/dp/B0P123456",
              Price: "34990.00",
              Rating: "4.0",
            },
          ],
          reviews: [
            {
              id: "r25",
              userName: "CoolingNeeded",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Good cooling performance",
              content: "Cools the room quickly. Installation was smooth. Good value for money.",
              date: "2023-08-20",
              helpfulCount: 21,
            },
          ],
        },
      ],
    },
    {
      Id: 6,
      Name: "Books",
      Products: [
        {
          Id: 26,
          Name: "Atomic Habits by James Clear",
          Description:
            "A practical guide to building good habits and breaking bad ones, with proven strategies for lasting change.",
          specifications: {
            Author: "James Clear",
            Pages: "320",
            Publisher: "Avery",
            Language: "English",
            Format: ["Paperback", "Hardcover", "Kindle", "Audiobook"],
          },
          Images: ["https://m.media-amazon.com/images/I/81wgcld4wxL._SY522_.jpg"],
          ProductLinks: [
            {
              ProductID: 26,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834",
              Price: "399.00",
              Rating: "4.6",
            },
            {
              ProductID: 26,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/atomic-habits/p/itmf8f8f8f8f8f8f",
              Price: "449.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r26",
              userName: "BookLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Life-changing book",
              content: "Excellent practical advice on building habits. Easy to read and implement.",
              date: "2023-12-01",
              helpfulCount: 45,
            },
          ],
        },
        {
          Id: 27,
          Name: "The Psychology of Money by Morgan Housel",
          Description:
            "Timeless lessons on wealth, greed, and happiness, exploring the psychology behind financial decisions.",
          specifications: {
            Author: "Morgan Housel",
            Pages: "256",
            Publisher: "Harriman House",
            Language: "English",
            Format: ["Paperback", "Hardcover", "Kindle", "Audiobook"],
          },
          Images: ["https://m.media-amazon.com/images/I/81cpDaCJJCL._SY522_.jpg"],
          ProductLinks: [
            {
              ProductID: 27,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/0857197681",
              Price: "350.00",
              Rating: "4.5",
            },
            {
              ProductID: 27,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/psychology-money/p/itmg9g9g9g9g9g9g",
              Price: "399.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r27",
              userName: "FinanceReader",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Must-read for financial literacy",
              content: "Great insights into financial behavior. Well-written and engaging.",
              date: "2023-11-10",
              helpfulCount: 38,
            },
          ],
        },
        {
          Id: 28,
          Name: "Sapiens by Yuval Noah Harari",
          Description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
          specifications: {
            Author: "Yuval Noah Harari",
            Pages: "512",
            Publisher: "Vintage Books",
            Language: "English",
            Format: ["Paperback", "Hardcover", "Kindle", "Audiobook"],
          },
          Images: ["https://m.media-amazon.com/images/I/713jIoMO3UL._SY522_.jpg"],
          ProductLinks: [
            {
              ProductID: 28,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085",
              Price: "499.00",
              Rating: "4.4",
            },
            {
              ProductID: 28,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/sapiens/p/itmh0h0h0h0h0h0h",
              Price: "549.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r28",
              userName: "HistoryBuff",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Fascinating perspective on humanity",
              content: "Thought-provoking book about human evolution and society. Dense but rewarding.",
              date: "2023-10-05",
              helpfulCount: 42,
            },
          ],
        },
        {
          Id: 29,
          Name: "Think and Grow Rich by Napoleon Hill",
          Description:
            "Classic self-help book on achieving success and wealth through positive thinking and goal setting.",
          specifications: {
            Author: "Napoleon Hill",
            Pages: "320",
            Publisher: "Ralston Society",
            Language: "English",
            Format: ["Paperback", "Hardcover", "Kindle", "Audiobook"],
          },
          Images: ["https://m.media-amazon.com/images/I/61y04z8SKEL._SY522_.jpg"],
          ProductLinks: [
            {
              ProductID: 29,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Think-Grow-Rich-Napoleon-Hill/dp/1585424331",
              Price: "199.00",
              Rating: "4.3",
            },
            {
              ProductID: 29,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/think-grow-rich/p/itmi1i1i1i1i1i1i",
              Price: "249.00",
              Rating: "4.2",
            },
          ],
          reviews: [
            {
              id: "r29",
              userName: "MotivationSeeker",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Timeless success principles",
              content: "Classic book with valuable lessons. Some concepts feel dated but core principles are solid.",
              date: "2023-09-15",
              helpfulCount: 29,
            },
          ],
        },
        {
          Id: 30,
          Name: "The Alchemist by Paulo Coelho",
          Description:
            "A philosophical novel about a young shepherd's journey to find treasure and discover his personal legend.",
          specifications: {
            Author: "Paulo Coelho",
            Pages: "208",
            Publisher: "HarperOne",
            Language: "English",
            Format: ["Paperback", "Hardcover", "Kindle", "Audiobook"],
          },
          Images: ["https://m.media-amazon.com/images/I/71aFt4+OTOL._SY522_.jpg"],
          ProductLinks: [
            {
              ProductID: 30,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/0062315005",
              Price: "299.00",
              Rating: "4.2",
            },
            {
              ProductID: 30,
              WebsiteName: "Flipkart",
              WebsiteURL: "https://www.flipkart.com/alchemist/p/itmj2j2j2j2j2j2j",
              Price: "349.00",
              Rating: "4.1",
            },
          ],
          reviews: [
            {
              id: "r30",
              userName: "PhilosophyLover",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Beautiful and inspiring",
              content: "A simple yet profound story. Great for anyone seeking inspiration and meaning.",
              date: "2023-08-25",
              helpfulCount: 35,
            },
          ],
        },
      ],
    },
    {
      Id: 7,
      Name: "Gaming Accessories",
      Products: [
        {
          Id: 31,
          Name: "Logitech G Pro X Superlight",
          Description:
            "Ultra-lightweight wireless gaming mouse designed for professional esports with HERO 25K sensor.",
          specifications: {
            Weight: "63 grams",
            Sensor: "HERO 25K",
            "Battery Life": "Up to 70 hours",
            Connectivity: "LIGHTSPEED wireless",
          },
          Images: [
            "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/gallery/pro-x-superlight-gallery-1.png",
          ],
          ProductLinks: [
            {
              ProductID: 31,
              WebsiteName: "Logitech Store",
              WebsiteURL: "https://www.logitechg.com/en-in/products/gaming-mice/pro-x-superlight-wireless-mouse.html",
              Price: "13495.00",
              Rating: "4.6",
            },
            {
              ProductID: 31,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Logitech-G-Pro-X-Superlight/dp/B0Q123456",
              Price: "14495.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r31",
              userName: "ProGamer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Perfect for competitive gaming",
              content: "Incredibly lightweight and responsive. Best gaming mouse I've used.",
              date: "2023-12-08",
              helpfulCount: 41,
            },
          ],
        },
        {
          Id: 32,
          Name: "Razer BlackWidow V4 Pro",
          Description:
            "Premium mechanical gaming keyboard with Razer Green switches, RGB lighting, and programmable macro keys.",
          specifications: {
            Switches: "Razer Green Mechanical",
            Features: ["RGB Chroma lighting", "Programmable macros", "Media controls"],
            Connectivity: "USB-C wired",
          },
          Images: [
            "https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168b8a8c8c8/razer-blackwidow-v4-pro-gallery-hero.jpg",
          ],
          ProductLinks: [
            {
              ProductID: 32,
              WebsiteName: "Razer Store",
              WebsiteURL: "https://www.razer.com/gaming-keyboards/razer-blackwidow-v4-pro",
              Price: "24999.00",
              Rating: "4.4",
            },
            {
              ProductID: 32,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Razer-BlackWidow-V4-Pro/dp/B0R123456",
              Price: "26999.00",
              Rating: "4.3",
            },
          ],
          reviews: [
            {
              id: "r32",
              userName: "KeyboardEnthusiast",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Excellent build quality",
              content: "Great tactile feedback and RGB lighting. A bit expensive but worth it.",
              date: "2023-11-25",
              helpfulCount: 33,
            },
          ],
        },
        {
          Id: 33,
          Name: "Xbox Wireless Controller",
          Description:
            "Official Xbox wireless controller with improved D-pad, textured grips, and cross-platform compatibility.",
          specifications: {
            Compatibility: "Xbox Series X|S, Xbox One, PC, Mobile",
            Features: ["Hybrid D-pad", "Textured grips", "3.5mm audio jack"],
            "Battery Life": "Up to 40 hours",
          },
          Images: ["/placeholder.svg?height=400&width=400"],
          ProductLinks: [
            {
              ProductID: 33,
              WebsiteName: "Xbox Store",
              WebsiteURL: "https://www.xbox.com/en-IN/accessories/controllers/xbox-wireless-controller",
              Price: "5990.00",
              Rating: "4.5",
            },
            {
              ProductID: 33,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Xbox-Wireless-Controller-Carbon-Black/dp/B0S123456",
              Price: "6490.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r33",
              userName: "ConsoleGamer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Best controller ever",
              content: "Comfortable grip and excellent build quality. Works great on PC too.",
              date: "2023-10-30",
              helpfulCount: 37,
            },
          ],
        },
        {
          Id: 34,
          Name: "PlayStation 5 DualSense Controller",
          Description:
            "Revolutionary gaming controller with haptic feedback, adaptive triggers, and built-in microphone.",
          specifications: {
            Features: ["Haptic feedback", "Adaptive triggers", "Built-in microphone"],
            Connectivity: "USB-C, Bluetooth",
            "Battery Life": "12-15 hours",
          },
          Images: ["/placeholder.svg?height=400&width=400"],
          ProductLinks: [
            {
              ProductID: 34,
              WebsiteName: "PlayStation Store",
              WebsiteURL: "https://www.playstation.com/en-in/accessories/dualsense-wireless-controller/",
              Price: "5990.00",
              Rating: "4.6",
            },
            {
              ProductID: 34,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/PlayStation-DualSense-Wireless-Controller/dp/B0T123456",
              Price: "6490.00",
              Rating: "4.5",
            },
          ],
          reviews: [
            {
              id: "r34",
              userName: "PS5Owner",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 5,
              title: "Amazing haptic feedback",
              content: "The haptic feedback is incredible. Makes gaming so much more immersive.",
              date: "2023-09-20",
              helpfulCount: 44,
            },
          ],
        },
        {
          Id: 35,
          Name: "Corsair K95 RGB Platinum XT",
          Description:
            "Premium mechanical gaming keyboard with Cherry MX switches, dedicated macro keys, and aircraft-grade aluminum frame.",
          specifications: {
            Switches: "Cherry MX Speed/Brown/Blue",
            Features: ["6 dedicated macro keys", "RGB per-key lighting", "USB passthrough"],
            Build: "Aircraft-grade aluminum frame",
          },
          Images: [
            "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Keyboards/CH-9127414-NA/Gallery/K95_PLAT_XT_01.webp",
          ],
          ProductLinks: [
            {
              ProductID: 35,
              WebsiteName: "Corsair Store",
              WebsiteURL:
                "https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/RGB-Mechanical-Gaming-Keyboards/K95-RGB-PLATINUM-XT-Mechanical-Gaming-Keyboard/p/CH-9127414-NA",
              Price: "19999.00",
              Rating: "4.5",
            },
            {
              ProductID: 35,
              WebsiteName: "Amazon India",
              WebsiteURL: "https://www.amazon.in/Corsair-K95-RGB-Platinum-XT/dp/B0U123456",
              Price: "21999.00",
              Rating: "4.4",
            },
          ],
          reviews: [
            {
              id: "r35",
              userName: "HardcoreGamer",
              userAvatar: "/placeholder.svg?height=60&width=60",
              rating: 4,
              title: "Premium gaming keyboard",
              content: "Excellent build quality and features. The macro keys are very useful.",
              date: "2023-08-15",
              helpfulCount: 28,
            },
          ],
        },
      ],
    },
  ],
}

// Transform the data to match our frontend structure
export async function getProducts(
  filters: {
    query?: string
    category?: string
    minPrice?: number
    maxPrice?: number
    brands?: string[]
    sort?: string
  } = {},
) {
  const { query, category, minPrice, maxPrice, brands, sort } = filters

  // Get all products from all categories
  const allProducts: any[] = []

  mockData.Categories.forEach((cat) => {
    cat.Products.forEach((product) => {
      // Calculate lowest price from ProductLinks
      const prices = product.ProductLinks.map((link) => Number.parseFloat(link.Price))
      const lowestPrice = Math.min(...prices)
      const highestPrice = Math.max(...prices)

      // Calculate average rating
      const ratings = product.ProductLinks.filter((link) => link.Rating).map((link) => Number.parseFloat(link.Rating))
      const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0

      // Transform to our expected format
      const transformedProduct = {
        id: product.Id.toString(),
        name: product.Name,
        description: product.Description,
        image: product.Images[0] || "/placeholder.svg?height=400&width=400",
        price: lowestPrice,
        originalPrice: highestPrice > lowestPrice ? highestPrice : undefined,
        discount: highestPrice > lowestPrice ? Math.round(((highestPrice - lowestPrice) / highestPrice) * 100) : 0,
        rating: Math.round(avgRating * 10) / 10,
        reviewCount: product.reviews?.length || 0,
        category: cat.Name,
        brand: product.Name.split(" ")[0], // Extract brand from product name
        specifications: product.specifications,
        prices: product.ProductLinks.map((link) => ({
          store: link.WebsiteName,
          price: Number.parseFloat(link.Price),
          url: link.WebsiteURL,
          rating: Number.parseFloat(link.Rating || "0"),
        })),
        reviews: product.reviews || [],
      }

      allProducts.push(transformedProduct)
    })
  })

  // Apply filters
  let filteredProducts = allProducts

  // Filter by search query
  if (query) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()),
    )
  }

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by price range
  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }
  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  // Filter by brands
  if (brands && brands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      brands.some((brand) => product.brand.toLowerCase().includes(brand.toLowerCase())),
    )
  }

  // Apply sorting
  switch (sort) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      // For demo purposes, sort by ID (assuming higher ID = newer)
      filteredProducts.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
      break
    default:
      // Default relevance sorting (by name)
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  return filteredProducts
}

export async function getProduct(id: string) {
  // Find product by ID across all categories
  for (const category of mockData.Categories) {
    const product = category.Products.find((p) => p.Id.toString() === id)
    if (product) {
      // Calculate lowest price from ProductLinks
      const prices = product.ProductLinks.map((link) => Number.parseFloat(link.Price))
      const lowestPrice = Math.min(...prices)
      const highestPrice = Math.max(...prices)

      // Calculate average rating
      const ratings = product.ProductLinks.filter((link) => link.Rating).map((link) => Number.parseFloat(link.Rating))
      const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0

      return {
        id: product.Id.toString(),
        name: product.Name,
        description: product.Description,
        image: product.Images[0] || "/placeholder.svg?height=400&width=400",
        images: product.Images,
        price: lowestPrice,
        originalPrice: highestPrice > lowestPrice ? highestPrice : undefined,
        discount: highestPrice > lowestPrice ? Math.round(((highestPrice - lowestPrice) / highestPrice) * 100) : 0,
        rating: Math.round(avgRating * 10) / 10,
        reviewCount: product.reviews?.length || 0,
        category: category.Name,
        brand: product.Name.split(" ")[0],
        specifications: product.specifications,
        prices: product.ProductLinks.map((link) => ({
          store: link.WebsiteName,
          price: Number.parseFloat(link.Price),
          url: link.WebsiteURL,
          rating: Number.parseFloat(link.Rating || "0"),
        })),
        reviews: product.reviews || [],
      }
    }
  }
  return null
}

export async function getCategories() {
  return mockData.Categories.map((category) => ({
    id: category.Id.toString(),
    name: category.Name,
    productCount: category.Products.length,
  }))
}

export async function getFeaturedProducts() {
  // Get first 6 products as featured
  const allProducts = await getProducts()
  return allProducts.slice(0, 6)
}

export async function getSimilarProducts(productId: string, limit = 4) {
  const product = await getProduct(productId)
  if (!product) return []

  // Get products from the same category, excluding the current product
  const similarProducts = await getProducts({ category: product.category })
  return similarProducts.filter((p) => p.id !== productId).slice(0, limit)
}
