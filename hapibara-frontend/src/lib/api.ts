const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('hapibara_token');
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('hapibara_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('hapibara_token');
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (this.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData: { name: string; email: string; password: string }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: { email: string; password: string }) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Recipe endpoints
  async getRecipes(params?: any) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/recipes?${searchParams}`);
  }

  async getRecipe(id: string) {
    return this.request(`/recipes/${id}`);
  }

  async saveRecipe(id: string) {
    return this.request(`/recipes/${id}/save`, { method: 'PUT' });
  }

  // Product endpoints
  async getProducts(params?: any) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/products?${searchParams}`);
  }

  async getProduct(id: string) {
    return this.request(`/products/${id}`);
  }

  // Blog endpoints
  async getBlogPosts(params?: any) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/blog?${searchParams}`);
  }

  async getBlogPost(id: string) {
    return this.request(`/blog/${id}`);
  }

  async likeBlogPost(id: string) {
    return this.request(`/blog/${id}/like`, { method: 'PUT' });
  }

  // Community endpoints
  async getCommunityStories(params?: any) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/community/stories?${searchParams}`);
  }

  async submitCommunityStory(storyData: any) {
    return this.request('/community/stories', {
      method: 'POST',
      body: JSON.stringify(storyData),
    });
  }

  // Newsletter endpoints
  async subscribeNewsletter(email: string) {
    return this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Cart endpoints
  async getCart() {
    return this.request('/cart');
  }

  async addToCart(productId: string, quantity: number = 1) {
    return this.request('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  async updateCartItem(productId: string, quantity: number) {
    return this.request('/cart/update', {
      method: 'PUT',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  async removeFromCart(productId: string) {
    return this.request(`/cart/remove/${productId}`, { method: 'DELETE' });
  }

  // Order endpoints
  async createOrder(orderData: any) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrders() {
    return this.request('/orders');
  }
}

export const apiClient = new ApiClient();