// Chatbot Logic - Custom AI without external APIs
class JoanaChatBot {
  constructor() {
    this.responses = this.initializeResponses();
    this.context = '';
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
          "We manufacture biodegradable paper cups (100ml-250ml), lunch boxes, pizza boxes, paper plates, and custom packaging solutions. We also offer offset printing services. All our products are QC-100 certified and eco-friendly."
        ]
      },

      // Paper Cups
      paperCups: {
        patterns: ['paper cup', 'cup', 'disposable cup', 'coffee cup', '100ml', '120ml', '150ml', '250ml'],
        responses: [
          "Our paper cups are available in 100ml, 120ml, 150ml, and 250ml sizes. They're QC-100 certified, leak-proof, and made with FDA-approved materials. Minimum order: 2,000-5,000 pieces depending on size. Custom printing available!"
        ]
      },

      // Pricing
      pricing: {
        patterns: ['price', 'cost', 'how much', 'pricing', 'rate', 'charge', 'expensive'],
        responses: [
          "Our pricing varies by product and quantity. For paper cups: MOQ 2,000-5,000 pieces. Custom printing: BDT 3,000 per color (one-time plate charge). Bulk discounts available for 100,000+ pieces (2% off). Contact us at +880 01976724401 for detailed quotes!"
        ]
      },

      // MOQ (Minimum Order Quantity)
      moq: {
        patterns: ['minimum order', 'moq', 'smallest order', 'minimum quantity'],
        responses: [
          "Our minimum order quantities are: Ready stock items: 2,000 pieces, Custom orders: 30,000 pieces. We offer flexibility for smaller businesses and bulk discounts for larger orders."
        ]
      },

      // Location
      location: {
        patterns: ['location', 'address', 'where are you', 'where located', 'find you'],
        responses: [
          "Our company is located at 123 Industrial Area, Gazipur, Dhaka, Bangladesh. However, offer corporate office located in 319, Eastern Road (Lane # 4), Baridhara DOHS, Dhaka – 1206."
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
          "We proudly serve top brands including Nestlé, Coats, airlines, embassies, and 500+ cafes and restaurants across Bangladesh. We're a trusted supplier for both local and international companies."
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
    });
  }

  initializeUI() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const quickActions = document.querySelectorAll('.quick-action');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      const isHidden = chatWindow.classList.contains('hidden');
      
      if (isHidden) {
        chatWindow.classList.remove('hidden');
        chatIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
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
      <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
        <span class="text-white text-xs font-bold">J</span>
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