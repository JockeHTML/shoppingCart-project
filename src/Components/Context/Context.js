const navData = [
    {
        icon: "fas fa-home",
        to: "/home",
        title: "HOME",
    },
    {
        icon: "fas fa-question-circle",
        to: "/contact",
        title: "CONTACT",
    },
    {
        icon: "fab fa-product-hunt",
        to: "/products",
        title: "PRODUCTS",
    },
    {
        icon: "fas fa-users",
        to: "/about",
        title: "ABOUT",
    },
]

const productsData = [
    {
            "_id": "1",
            "title": "Shoe One",
            "src": "https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
            "price": 23,
            "colors": ["white", "red", "black", "crimson", "teal"],
            "count": 1
    },
    {
            "_id": "2",
            "title": "Shoe Two",
            "src": "https://images.pexels.com/photos/5710075/pexels-photo-5710075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
            "price": 19,
            "colors": ["white", "red", "crimson", "teal"],
            "count": 1
    },
    {
            "_id": "3",
            "title": "Shoe Three",
            "src": "https://images.pexels.com/photos/6050913/pexels-photo-6050913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "price": 50,
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
            "colors": ["white", "lightblue", "white", "crimson", "teal"],
            "count": 1
    },
    {
            "_id": "4",
            "title": "Shoe Four",
            "src": "https://images.pexels.com/photos/5710081/pexels-photo-5710081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "price": 15,
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
            "colors": ["white", "orange", "black", "crimson", "teal"],
            "count": 1
    },
    {
            "_id": "5",
            "title": "Shoe Five",
            "src": "https://images.pexels.com/photos/5710077/pexels-photo-5710077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "price": 10,
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "colors": ["white", "orange", "black", "crimson", "teal"],
            "count": 1
    },
    {
            "_id": "6",
            "title": "Shoe Six",
            "src": "https://images.pexels.com/photos/5710076/pexels-photo-5710076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "price": 17,
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
            "colors": ["white", "orange", "black", "crimson", "teal"],
            "count": 1
    }
  ];

  const contactData = [
      {
        icon: "fas fa-mobile-alt",
        title: "PRODUCTS",
        phone: "+46070123456",
        time: "9:00 - 18:00",
        days: "Monday - Saturday",
        homepage: "https://www.jokeshoes.support",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "PAYMENT",
        phone: "+46070123456",
        time: "9:00 - 18:00",
        days: "Monday - Saturday",
        homepage: "https://www.jokeshoes.support",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "ORDERS",
        phone: "+46070123456",
        time: "9:00 - 18:00",
        days: "Monday - Saturday",
        homepage: "https://www.jokeshoes.support",
      },
  ]

export {navData, productsData, contactData}