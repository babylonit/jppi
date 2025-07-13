// Chatbot Logic - Custom AI without external APIs
class JoanaChatBot {
  constructor() {
    this.responses = this.initializeResponses();
    this.context = '';
    this.notificationCurrentlyVisible = false;
    this.notificationDismissedByUser = false;
    this.init();
  }

  initializeResponses() {
    return {
      // Greetings
      greetings: {
        patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
        responses: [
          "Hello! Welcome to Joana Paper Product Industry. How can I help you today?",
          "Hi there! I'm here to assist you with any questions about our paper products.",
          "Hey! Thanks for reaching out. What would you like to know about our services?"
        ]
      },

      // Thanks
      thanks: {
        patterns: ['thank', 'thanks', 'appreciate', 'grateful'],
        responses: [
          "You're welcome! Feel free to ask if you have any other questions.",
          "Happy to help! Is there anything else you'd like to know?",
          "My pleasure! Let me know if you need any other information."
        ]
      },

      // Goodbye
      goodbye: {
        patterns: ['bye', 'goodbye', 'see you', 'talk later', 'have a good day'],
        responses: [
          "Goodbye! Thank you for your interest in Joana Paper Product Industry.",
          "Have a great day! Feel free to contact us anytime.",
          "See you later! Don't hesitate to reach out if you need anything."
        ]
      },

      // Products
      products: {
        patterns: ['product', 'what do you make', 'what do you sell', 'services', 'offerings'],
        responses: [
          "We manufacture a wide range of products including disposable paper cups, food packaging, retail packaging, medical packaging, office stationery, marketing materials, eco-friendly areca palm products, wooden items, and plastic food packaging. All products are QC-100 certified and eco-friendly."
        ]
      },

      // Paper Cups
      paperCups: {
        patterns: ['paper cup', 'cup', 'disposable cup', 'coffee cup', '50ml', '100ml', '120ml', '150ml', '200ml', '250ml', '350ml', '400ml'],
        responses: [
          "Our paper cups are available in sizes from 50ml to 400ml including 50ml, 60ml, 80ml, 100ml, 120ml, 150ml, 200ml, 250ml, 350ml, and 400ml. They're QC-100 certified, leak-proof, and made with FDA-approved materials. We also offer specialty cups like double-wall and ripple-wall. Custom printing available!"
        ]
      },

      // Food Packaging
      foodPackaging: {
        patterns: ['food packaging', 'pizza box', 'burger box', 'lunch box', 'food container', 'sandwich box', 'cake box'],
        responses: [
          "We offer comprehensive food packaging solutions including pizza boxes, burger boxes, lunch boxes, food containers, sandwich boxes, and cake boxes. All are grease-resistant, temperature-retaining, and food-safe with custom printing options available."
        ]
      },

      // Retail Packaging
      retailPackaging: {
        patterns: ['retail packaging', 'shopping bag', 'courier bag', 'product label', 'custom packaging'],
        responses: [
          "Our retail packaging includes eco-friendly shopping bags, courier bags, product labels, and custom packaging solutions. Perfect for enhancing your brand presence with durable, cost-effective options and custom branding."
        ]
      },

      // Medical Packaging
      medicalPackaging: {
        patterns: ['medical packaging', 'medicine packaging', 'patient file', 'x-ray envelope'],
        responses: [
          "We provide specialized medical packaging including tamper-proof medicine boxes, patient files, and X-ray envelopes. All products are designed for safety, compliance with health regulations, and feature child-resistant options."
        ]
      },

      // Office Stationery
      officeStationery: {
        patterns: ['office stationery', 'business card', 'letterhead', 'invoice', 'envelope'],
        responses: [
          "Our office stationery services include professional printing for business cards, letterheads, invoices, and envelopes. High-quality printing with custom branding to elevate your corporate image."
        ]
      },

      // Marketing Materials
      marketingMaterials: {
        patterns: ['marketing material', 'brochure', 'flyer', 'catalog', 'banner', 'sticker', 'hang tag'],
        responses: [
          "We print high-impact marketing materials including brochures, flyers, catalogs, banners, stickers, and hang tags. Our printing services help amplify your brand message with vibrant colors and professional quality."
        ]
      },

      // Areca Palm Products
      arecaPalm: {
        patterns: ['areca palm', 'palm leaf', 'areca plate', 'areca bowl', 'areca tray'],
        responses: [
          "Discover our 100% natural, biodegradable areca palm leaf plates, bowls, and trays. They are chemical-free, microwave-safe, water-resistant, and completely compostable within 60 days."
        ]
      },

      // Wooden Items
      woodenItems: {
        patterns: ['wooden item', 'wooden plate', 'wooden tray', 'cutlery set', 'wooden spoon', 'wooden fork', 'bamboo brush'],
        responses: [
          "Explore our handcrafted wooden and bamboo products including plates, trays, cutlery sets, spoons, forks, and bamboo brushes. All made from sustainable, FSC-certified materials with food-safe finishes."
        ]
      },

      // Plastic Food Packaging
      plasticPackaging: {
        patterns: ['plastic packaging', 'plastic container', 'plastic cup', 'plastic spoon', 'straw', 'ice cream box', 'pizza lid support', 'water bottle', 'food tray', 'biscuit tray', 'burger box', 'egg tray'],
        responses: [
          "We offer a complete range of durable, food-safe plastic packaging including containers, cups, takeaway spoons, straws, ice cream boxes, pizza lid supports, water bottles, food trays, and specialty items. All are BPA-free and FDA-approved."
        ]
      },

      // Pricing
      pricing: {
        patterns: ['price', 'cost', 'how much', 'pricing', 'rate', 'charge', 'expensive'],
        responses: [
          "Our pricing varies by product and quantity. Paper cups: MOQ 2,000-5,000 pieces. Custom printing: BDT 3,000 per color (one-time plate charge). Bulk discounts available for 100,000+ pieces (2% off). Contact us at +880 01976724401 for detailed quotes!"
        ]
      },

      // MOQ (Minimum Order Quantity)
      moq: {
        patterns: ['minimum order', 'moq', 'smallest order', 'minimum quantity'],
        responses: [
          "Our minimum order quantities vary by product: Ready stock items: 2,000 pieces, Custom orders: 30,000 pieces. We offer flexibility for smaller businesses and bulk discounts for larger orders."
        ]
      },

      // Location
      location: {
        patterns: ['location', 'address', 'where are you', 'where located', 'find you'],
        responses: [
          "Our manufacturing facility is located at 123 Industrial Area, Gazipur, Dhaka, Bangladesh. Our corporate office is at 319, Eastern Road (Lane # 4), Baridhara DOHS, Dhaka – 1206."
        ]
      },

      // Contact
      contact: {
        patterns: ['contact', 'phone', 'email', 'call', 'reach you'],
        responses: [
          "You can reach us at: Phone: +880 01976724401 / +880 01976724402, Email: info@joanapaper.com, WhatsApp: +8801976724402. Our business hours: Saturday-Thursday, 9 AM-8 PM."
        ]
      },

      // Business Hours
      hours: {
        patterns: ['hours', 'time', 'open', 'closed', 'when open', 'business hours'],
        responses: [
          "Our business hours are Saturday-Thursday, 9 AM-8 PM. We're closed on Fridays. You can reach us during these hours for immediate assistance."
        ]
      },

      // Delivery
      delivery: {
        patterns: ['delivery', 'shipping', 'how long', 'timeline', 'lead time'],
        responses: [
          "Delivery timelines: Ready stock items: 2-3 days, Custom orders: 20+ days. Free delivery for 50,000+ pieces, otherwise courier charges apply. We deliver nationwide across Bangladesh."
        ]
      },

      // Quality & Certification
      quality: {
        patterns: ['quality', 'certified', 'qc-100', 'fda', 'safe', 'leak proof'],
        responses: [
          "All our products are QC-100 certified (toxin-free production) and use FDA-approved materials. We're also CQE 2012 Geneva Award winners. Our cups are leak-proof with PE/PLA coatings and have a 2-year shelf life guarantee."
        ]
      },

      // Eco-friendly
      eco: {
        patterns: ['eco', 'environment', 'biodegradable', 'recyclable', 'green', 'sustainable'],
        responses: [
          "Yes! All our products are 100% biodegradable and eco-friendly. We use soy-based inks, recyclable materials, and sustainable production methods. Perfect for environmentally conscious businesses."
        ]
      },

      // Custom Printing
      customPrinting: {
        patterns: ['custom print', 'printing', 'logo', 'branding', 'design'],
        responses: [
          "We offer high-quality custom printing services! CMYK printing, custom designs, logo placement, and branding options available. Our in-house design team can help create your designs. Plate charge: BDT 3,000 per color."
        ]
      },

      // Clients
      clients: {
        patterns: ['client', 'customer', 'who uses', 'brands'],
        responses: [
          "We proudly serve top brands including Nestlé, Coca-Cola, KFC, Pizza Hut, Starbucks, airlines, embassies, and 500+ cafes and restaurants across Bangladesh. We're a trusted supplier for both local and international companies."
        ]
      },

      // Sample
      sample: {
        patterns: ['sample', 'trial', 'test', 'demo'],
        responses: [
          "Yes, we provide pre-production samples for approval before bulk production. Contact us to request sample kits and experience our product quality firsthand."
        ]
      },

      // Default fallback responses
      fallback: [
        "I'm sorry, I didn't quite understand that. Could you please rephrase your question?",
        "I'd be happy to help! You can ask me about our products, pricing, location, delivery, or quality certifications.",
        "For specific technical questions, please contact our team directly at +880 01976724401 or info@joanapaper.com."
      ]
    };
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeUI();
      this.initializeScrollNotification();
    });
  }

  initializeScrollNotification() {
    let scrollTimer = null;
    
    window.addEventListener('scroll', () => {
      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      
      // Check if user has scrolled down at least 500px and notification hasn't been dismissed
      if (window.scrollY > 500 && !this.notificationCurrentlyVisible && !this.notificationDismissedByUser) {
        // Show notification after a short delay to avoid showing on quick scrolls
        scrollTimer = setTimeout(() => {
          this.showScrollNotification();
        }, 1500);
      }
    });
  }

  showScrollNotification() {
    const notification = document.getElementById('chat-notification');
    const notificationDot = document.getElementById('notification-dot');
    
    if (notification && !this.notificationDismissedByUser && !this.notificationCurrentlyVisible) {
      notification.classList.remove('hidden');
      notificationDot.classList.remove('hidden');
      this.notificationCurrentlyVisible = true;
      
      // Auto-hide after 8 seconds if not dismissed by user
      setTimeout(() => {
        if (this.notificationCurrentlyVisible && !this.notificationDismissedByUser) {
          this.hideScrollNotification();
        }
      }, 8000);
    }
  }

  hideScrollNotification() {
    const notification = document.getElementById('chat-notification');
    const notificationDot = document.getElementById('notification-dot');
    
    if (notification) {
      notification.classList.add('hidden');
      notificationDot.classList.add('hidden');
      this.notificationCurrentlyVisible = false;
    }
  }

  initializeUI() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const quickActions = document.querySelectorAll('.quick-action');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');
    const notificationClose = document.getElementById('notification-close');
    const notificationChatBtn = document.getElementById('notification-chat-btn');

    // Notification close button
    if (notificationClose) {
      notificationClose.addEventListener('click', () => {
        this.notificationDismissedByUser = true;
        this.hideScrollNotification();
      });
    }

    // Notification chat button
    if (notificationChatBtn) {
      notificationChatBtn.addEventListener('click', () => {
        this.notificationDismissedByUser = true;
        this.hideScrollNotification();
        // Open chat window
        chatWindow.classList.remove('hidden');
        chatIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      });
    }

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      const isHidden = chatWindow.classList.contains('hidden');
      
      if (isHidden) {
        chatWindow.classList.remove('hidden');
        chatIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        // Hide notification when chat is opened
        if (this.notificationCurrentlyVisible) {
          this.notificationDismissedByUser = true;
          this.hideScrollNotification();
        }
      } else {
        chatWindow.classList.add('hidden');
        chatIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Send message
    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
        this.addUserMessage(message);
        this.processMessage(message);
        chatInput.value = '';
      }
    };

    sendButton.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Quick actions
    quickActions.forEach(button => {
      button.addEventListener('click', () => {
        const message = button.getAttribute('data-message');
        this.addUserMessage(message);
        this.processMessage(message);
      });
    });
  }

  addUserMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start justify-end';
    messageDiv.innerHTML = `
      <div class="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
        <p class="text-sm">${message}</p>
      </div>
    `;
    messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  addBotMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start';
    messageDiv.innerHTML = `
      <div class="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
        <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customer Support" class="w-full h-full rounded-full object-cover">
      </div>
      <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
        <p class="text-sm">${message}</p>
      </div>
    `;
    messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messagesContainer = document.getElementById('chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  processMessage(message) {
    // Simulate typing delay
    setTimeout(() => {
      const response = this.generateResponse(message.toLowerCase());
      this.addBotMessage(response);
    }, 1000);
  }

  generateResponse(message) {
    // Check each response category
    for (const [category, data] of Object.entries(this.responses)) {
      if (category === 'fallback') continue;
      
      const patterns = data.patterns;
      const responses = Array.isArray(data.responses) ? data.responses : [data.responses];
      
      // Check if any pattern matches the message
      for (const pattern of patterns) {
        if (message.includes(pattern)) {
          // Return a random response from the category
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // If no pattern matches, return a fallback response
    const fallbackResponses = this.responses.fallback;
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
}

// Initialize the chatbot
new JoanaChatBot();