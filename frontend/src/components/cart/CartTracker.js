class CartTracker {
    constructor() {
        this.ProductList = [];
        this.ExpiryDate = new Date();
        this.ExpiryDate.setHours(this.ExpiryDate.getHours()+1);
    }
    addItem(pid, cost, image, max) {
        if (this.ProductList.length === 0) {
            this.ExpiryDate.setHours(this.ExpiryDate.getHours()+1);
            this.ProductList.push({
                "name": pid,
                "count": 1,
                "cost": cost,
                "image": image
            });
        }
        else {
            let found = false;
            for (let x of this.ProductList) {
                if (x.name === pid) {
                    if (x.count < max) {
                        x.count++;
                    }
                    else {
                        return false;
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.ProductList.push({
                        "name": pid,
                        "count": 1,
                        "cost": cost,
                        "image": image
                    });
            }
        }
        console.log(this.ProductList);
        return true;
    }
    getItems() {
        console.log("returning product list");
        console.log(this.ProductList);
        return this.ProductList;
    }
    clearItems() {
        this.ProductList = [];
    }
    async sendOrder(email, meno, ulica, cislo, psc, mesto) {
        let order = [];
        for (var x of this.ProductList) {
            order.push({id: x.name, count: x.count})
        }
        const requestObject = { 
            orderItems: order,
            customerInfo: {
                meno: meno,
                email: email,
                ulica: ulica,
                cislo: cislo,
                psc: psc,
                mesto: mesto
            }
        };
        console.log("Request object:");
        console.log(requestObject);
        const response = await fetch('http://localhost:3001/order', {
        method: 'POST',
        body: JSON.stringify(requestObject),
        headers: {
            'Content-Type': 'application/json'
        }
        });
        console.log("Order post response:");
        console.log(response);
        if (response.status === 400) {
            alert("Email already in use (or other error)");
        }
        else {
            console.log("Navigating to ad.");
            window.location = '/completed';
        }
    }
}

const CartState = new CartTracker([]);
export default CartState