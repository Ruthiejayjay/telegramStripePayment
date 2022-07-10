class Products {
    constructor() {
        this.chat_id = "";
        this.title = "";
        this.description = "";
        this.prices = "";
        this.currency = "USD";
        this.provider_token = "284685063:TEST:OGVmODhlMjFjOTMz";
        this.photo_url = "";
        this.payload = {
            data: "Books",
            message: "Nice work"
        };
    }
}

class Buns extends Products {
    constructor() {
        super();
        this.title = "Buns";
        this.description =" Very Sweet Buns";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = "https://img-global.cpcdn.com/recipes/1034a8316f83f873/1200x630cq70/photo.jpg";
    }
}

class Pizza extends Products {
    constructor() {
        super();
        this.title = "Pizza";
        this.description =" Yummy Pizza!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = "https://static.toiimg.com/photo/msid-87930581/87930581.jpg";
    }
}
class Cake extends Products {
    constructor() {
        super();
        this.title = "Cake";
        this.description ="Amazing!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg";
    }
}

class Bread extends Products {
    constructor() {
        super();
        this.title = "Bread";
        this.description =" Delicious!!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1200px-Fresh_made_bread_05.jpg";
    }
}

class IceCream extends Products {
    constructor() {
        super();
        this.title = "IceCream";
        this.description =" Perfectly Made!!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = 
        "https://articles.connectnigeria.com/wp-content/uploads/2021/06/homemade-chocolate-ice-cream-recipe-7.jpg";
    }
}

class PanCakes extends Products {
    constructor() {
        super();
        this.title = "PanCakes";
        this.description =" Delicious!!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = 
        "https://kickassbaker.com/wp-content/uploads/2022/04/self-rising-flour-pancake-recipe.jpg";
    }
}

class Donut extends Products {
    constructor() {
        super();
        this.title = "Donut";
        this.description =" Delicious!!!";
        this.prices = [{ label: "Invoice Title", amount: 100 * 100 }];
        this.photo_url = 
        "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg";
    }
}

export {
    Products as default,
    Buns,
    Cake,
    Pizza,
    Bread,
    IceCream,
    PanCakes,
    Donut,
}