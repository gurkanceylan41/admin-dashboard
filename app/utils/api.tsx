import { Order, Product, User } from "@/types";

export const getOrders = async (): Promise<Order[]> => {
  try {
    const res = await fetch("http://localhost:3090/orders");
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Siparişler alınırken bir sorun oluştu");
  }
};
export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost:3090/products?_sort=-id", {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün verileri alınırken bir sorun oluştu");
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3090/products/${id}`, {
      method: "DELETE",
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürünü silerken oluştu");
  }
};
export const createProduct = async (data: Product) => {
  try {
    const res = await fetch(`http://localhost:3090/products`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürünü gönderirken bir hata oluştu");
  }
};

export const getProductsById = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`http://localhost:3090/products/${id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün bulunamadı");
  }
};

export const editProduct = async (data: Product) => {
  try {
    const res = await fetch(`http://localhost:3090/products/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürünü gönderirken bir hata oluştu");
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch("http://localhost:3090/users", {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Kullanıcı verileri alınırken bir sorun oluştu");
  }
};
export const deleteUsers = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3090/users/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Kullanıcı verileri silerken bir sorun oluştu");
  }
};

export const getUserById = async (id: string): Promise<User> => {
  try {
    const res = await fetch(`http://localhost:3090/users/${id}`);
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Kullanıcı verisini alınırken bir sorun oluştu");
  }
};

export const getValues = async () => {
  const orderData = await getOrders();
  const userData = await getUsers();
  const productData = await getProducts();

  return {
    totalUsers: userData.length * 109,
    totalOrder:
      orderData.reduce(
        (a, b) => a + b.items.reduce((c, d) => c + d.quantity, 0),
        0
      ) * 63,
    totalIncome: "$" + orderData.reduce((a, b) => a + b.total_price, 0) * 67,
    productsCount: productData.length * 204,
  };
};
