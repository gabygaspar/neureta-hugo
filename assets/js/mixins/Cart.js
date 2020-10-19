import { loadStripe } from '@stripe/stripe-js';

export default {
  data: {
    cart: [],
    lineItems: [],
    $stripe: null,
    showCart: false,
    showMenu: false,
  },
  created: async function() {
    this.$stripe = await loadStripe(window.skey);
    if (this.$cookies.isKey('cart')) {
      this.cart = JSON.parse(this.$cookies.get('cart'));
    }
  },
  watch: {
    cart: function () {
      this.lineItems = this.cart.map(item => {
        return { price: item.price, quantity: item.quantity };
      });
    }
  },
  computed: {
    requiresShippingAddress: function () {
      const index = this.cart.findIndex(item => item.type === 'book');
      return (index != -1);
    }
  },
  methods: {
    toggleShow: function() {
      this.showCart = !this.showCart; 
    },
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
    add: function (data) {
      // Logic to set item
      const index = this.cart.findIndex(item => item.price === data.price);
      if (index === -1) {
        this.cart.push(data);
      } else {
        // 
        const element = this.cart[index];
        this.$set(this.cart, index, { ...element, quantity: element.quantity + 1});
      }
      this.$cookies.set('cart', JSON.stringify(this.cart));
    },
    buySingleCheckout: function() {},
    goToCheckout: async function () {
      const options = {
        lineItems: [...this.lineItems],
        mode: 'payment',
        successUrl: window.successUrl,
        cancelUrl: window.cancelUrl,
      };

      if (this.requiresShippingAddress) {
        options.shippingAddressCollection = {
          allowedCountries: ['MX'],
        };
      }

      const { error } = this.$stripe.redirectToCheckout(options);

      if (error) {
        console.log(error.message);
      }
    }
  },
}