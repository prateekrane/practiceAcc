export interface Product {
    id: number;
    name: string;
    brand: string;
    category: "electronics" | "furniture" | "apparel";
    price: number;
    rating: number;
    instock: boolean;
    comments: string[];
    img: string;
}


export let products: Product[] = [
    {
        id: 1,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 50000,
        rating: 2,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://inventstore.in/wp-content/uploads/2024/07/63.webp"
    },
    {
        id: 2,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90"
    },
    {
        id: 3,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    },
    {
        id: 4,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 60000,
        rating: 4.5,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-14-pro-gold-1TB-front-and-back-view.png"
    },
    {
        id: 5,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90",
    },
    {
        id: 6,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    },
    {
        id: 7,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 50000,
        rating: 4.5,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-14-pro-gold-1TB-front-and-back-view.png"
    },
    {
        id: 8,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90"
    },
    {
        id: 9,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    },
    {
        id: 10,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 50000,
        rating: 4.5,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-14-pro-gold-1TB-front-and-back-view.png"
    },
    {
        id: 12,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90"
    },
    {
        id: 13,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    },
    {
        id: 14,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 50000,
        rating: 4.5,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-14-pro-gold-1TB-front-and-back-view.png"
    },
    {
        id: 15,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90"
    },
    {
        id: 16,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    },
    {
        id: 17,
        name: "mobile",
        brand: "apple",
        category: "electronics",
        price: 55000,
        rating: 4.5,
        instock: true,
        comments: ["good", "great", "super"],
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-14-pro-gold-1TB-front-and-back-view.png"
    },
    {
        id: 18,
        name: "latop",
        brand: "Dell",
        category: "electronics",
        price: 60000,
        rating: 4.0,
        instock: true,
        comments: ["good", "average", "Great"],
        img: "https://rukminim2.flixcart.com/image/480/480/xif0q/computer/i/7/r/latitude-3420-business-laptop-dell-original-imagn6hrwnczrmzv.jpeg?q=90"
    },
    {
        id: 19,
        name: "chair",
        brand: "wakefit",
        category: "furniture",
        price: 5000,
        rating: 4,
        instock: false,
        comments: ["good", "super"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6q-xbL9JHejhZdmsb_E5xtalryfVM_S9qdg&s"
    }
];