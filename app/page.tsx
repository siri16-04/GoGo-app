"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Star, Heart, Share2, Filter, Globe, Users, Sparkles, Camera, Coffee, Utensils, Palette, Music, Theater, Landmark, Map, Languages, Copy, Volume2, RotateCcw, DollarSign, TrendingUp, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const experiences = [
  // Europe - France
  {
    id: 1,
    title: "Café de Flore - Parisian Literary Haven",
    location: "Saint-Germain-des-Prés, Paris, France",
    category: "Café",
    rating: 4.8,
    reviews: 2847,
    price: "€8-25",
    image: "/cafe-de-flore-paris.png",
    description: "Historic sidewalk café where Sartre and de Beauvoir held court. Philosophy over coffee in the heart of intellectual Paris.",
    contributor: {
      name: "Marie Dubois",
      avatar: "/placeholder.svg?height=40&width=40&text=MD",
      local: true,
      contributions: 34
    },
    tags: ["Historic", "Philosophy", "Literary", "Sidewalk Café"],
    aiInsight: "Best visited mid-morning (10-11am) for the authentic Parisian café experience",
    languages: ["Français", "English"],
    country: "France",
    continent: "Europe",
    coordinates: "48.8542, 2.3335",
    mapUrl: "https://maps.google.com/?q=48.8542,2.3335"
  },
  {
    id: 2,
    title: "Hidden Michelin Star Bistro in Montmartre",
    location: "Montmartre, Paris, France",
    category: "Restaurant",
    rating: 4.9,
    reviews: 156,
    price: "€45-80",
    image: "/montmartre-bistro-paris.png",
    description: "Tiny 12-seat restaurant where a former Michelin chef creates magic with traditional French techniques and local ingredients.",
    contributor: {
      name: "Pierre Laurent",
      avatar: "/placeholder.svg?height=40&width=40&text=PL",
      local: true,
      contributions: 28
    },
    tags: ["Michelin", "Wine", "Cheese", "Intimate"],
    aiInsight: "Reservations essential. Chef's tasting menu changes daily based on market finds",
    languages: ["Français", "English"],
    country: "France",
    continent: "Europe",
    coordinates: "48.8867, 2.3431",
    mapUrl: "https://maps.google.com/?q=48.8867,2.3431"
  },

  // Europe - Italy
  {
    id: 3,
    title: "Nonna's Secret Trattoria in Trastevere",
    location: "Trastevere, Rome, Italy",
    category: "Restaurant",
    rating: 4.9,
    reviews: 423,
    price: "€15-35",
    image: "/trastevere-trattoria-rome.png",
    description: "Family-run trattoria where Nonna still makes pasta by hand every morning. No menu, just what's fresh that day.",
    contributor: {
      name: "Giuseppe Romano",
      avatar: "/placeholder.svg?height=40&width=40&text=GR",
      local: true,
      contributions: 67
    },
    tags: ["Authentic", "Handmade Pasta", "Family-run", "No Menu"],
    aiInsight: "Arrive early (7pm) or late (9:30pm) to avoid crowds. Ask for 'quello che ha Nonna'",
    languages: ["Italiano", "English"],
    country: "Italy",
    continent: "Europe",
    coordinates: "41.8896, 12.4695",
    mapUrl: "https://maps.google.com/?q=41.8896,12.4695"
  },
  {
    id: 4,
    title: "Artisan Gelato Lab in Florence",
    location: "Oltrarno, Florence, Italy",
    category: "Café",
    rating: 4.8,
    reviews: 892,
    price: "€3-8",
    image: "/florence-gelato-lab.png",
    description: "Experimental gelato maker creates flavors inspired by Renaissance art. Try the 'Botticelli Blue' made with butterfly pea flowers.",
    contributor: {
      name: "Lucia Bianchi",
      avatar: "/placeholder.svg?height=40&width=40&text=LB",
      local: true,
      contributions: 45
    },
    tags: ["Artisan", "Experimental", "Renaissance", "Instagram-worthy"],
    aiInsight: "New flavors introduced every Tuesday. Best lighting for photos around 4pm",
    languages: ["Italiano", "English"],
    country: "Italy",
    continent: "Europe",
    coordinates: "43.7696, 11.2558",
    mapUrl: "https://maps.google.com/?q=43.7696,11.2558"
  },

  // Europe - Spain
  {
    id: 5,
    title: "Flamenco Tapas Bar in Seville",
    location: "Barrio Santa Cruz, Seville, Spain",
    category: "Restaurant",
    rating: 4.7,
    reviews: 634,
    price: "€12-28",
    image: "/seville-flamenco-tapas.png",
    description: "Intimate tapas bar where local flamenco artists perform impromptu shows. The jamón ibérico is legendary.",
    contributor: {
      name: "Carmen Vega",
      avatar: "/placeholder.svg?height=40&width=40&text=CV",
      local: true,
      contributions: 52
    },
    tags: ["Flamenco", "Tapas", "Live Music", "Jamón Ibérico"],
    aiInsight: "Flamenco performances usually start around 10pm on weekends",
    languages: ["Español", "English"],
    country: "Spain",
    continent: "Europe",
    coordinates: "37.3891, -5.9845",
    mapUrl: "https://maps.google.com/?q=37.3891,-5.9845"
  },

  // Asia - Japan
  {
    id: 6,
    title: "Robot Café in Harajuku",
    location: "Harajuku, Tokyo, Japan",
    category: "Café",
    rating: 4.6,
    reviews: 1247,
    price: "¥1200-2500",
    image: "/harajuku-robot-cafe.png",
    description: "Futuristic café where robots serve matcha lattes and anime-inspired desserts. A glimpse into Tokyo's pop culture.",
    contributor: {
      name: "Yuki Tanaka",
      avatar: "/asian-man-smiling.png",
      local: true,
      contributions: 89
    },
    tags: ["Robot", "Anime", "Matcha", "Futuristic"],
    aiInsight: "Less crowded on weekday mornings. Robot shows every hour on the hour",
    languages: ["日本語", "English"],
    country: "Japan",
    continent: "Asia",
    coordinates: "35.6702, 139.7016",
    mapUrl: "https://maps.google.com/?q=35.6702,139.7016"
  },
  {
    id: 7,
    title: "Hidden Ramen Master's Counter",
    location: "Shibuya, Tokyo, Japan",
    category: "Restaurant",
    rating: 4.9,
    reviews: 156,
    price: "¥800-1500",
    image: "/shibuya-ramen-counter.png",
    description: "6-seat counter where a ramen master perfects his craft. No English menu, just point and trust the process.",
    contributor: {
      name: "Hiroshi Sato",
      avatar: "/placeholder.svg?height=40&width=40&text=HS",
      local: true,
      contributions: 73
    },
    tags: ["Ramen", "Master Chef", "No English", "Counter Seating"],
    aiInsight: "Peak flavor achieved during lunch rush (12-2pm). Expect to wait in line",
    languages: ["日本語"],
    country: "Japan",
    continent: "Asia",
    coordinates: "35.6598, 139.7006",
    mapUrl: "https://maps.google.com/?q=35.6598,139.7006"
  },

  // Asia - South Korea
  {
    id: 8,
    title: "K-Pop Themed Dessert Café",
    location: "Gangnam, Seoul, South Korea",
    category: "Café",
    rating: 4.5,
    reviews: 2156,
    price: "₩8000-15000",
    image: "/gangnam-kpop-cafe.png",
    description: "Instagram-perfect café with BTS-themed desserts and holographic decorations. Popular with international K-pop fans.",
    contributor: {
      name: "Min-jun Kim",
      avatar: "/placeholder.svg?height=40&width=40&text=MK",
      local: true,
      contributions: 41
    },
    tags: ["K-pop", "Desserts", "Instagram", "BTS"],
    aiInsight: "Avoid weekends if you want photos without crowds. New themed items monthly",
    languages: ["한국어", "English"],
    country: "South Korea",
    continent: "Asia",
    coordinates: "37.4979, 127.0276",
    mapUrl: "https://maps.google.com/?q=37.4979,127.0276"
  },

  // North America - USA
  {
    id: 9,
    title: "Original Starbucks Pike Place",
    location: "Pike Place Market, Seattle, USA",
    category: "Café",
    rating: 4.3,
    reviews: 8934,
    price: "$4-12",
    image: "/pike-place-starbucks.png",
    description: "The very first Starbucks store, still serving coffee with the original 1971 logo and vintage equipment.",
    contributor: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      local: true,
      contributions: 156
    },
    tags: ["Historic", "Coffee Culture", "Original", "Tourist Favorite"],
    aiInsight: "Early morning visits (7-8am) avoid tourist crowds. Try the Pike Place Roast",
    languages: ["English"],
    country: "USA",
    continent: "North America",
    coordinates: "47.6101, -122.3421",
    mapUrl: "https://maps.google.com/?q=47.6101,-122.3421"
  },

  // North America - Mexico
  {
    id: 10,
    title: "Street Taco Stand in Mexico City",
    location: "Roma Norte, Mexico City, Mexico",
    category: "Restaurant",
    rating: 4.8,
    reviews: 567,
    price: "$2-8",
    image: "/mexico-city-tacos.png",
    description: "Family taco stand serving al pastor from a vertical trompo. Three generations of recipes and techniques.",
    contributor: {
      name: "Carlos Mendoza",
      avatar: "/placeholder-prhjb.png",
      local: true,
      contributions: 92
    },
    tags: ["Street Food", "Al Pastor", "Family Recipe", "Authentic"],
    aiInsight: "Best tacos served between 8-10pm when the trompo is perfectly cooked",
    languages: ["Español", "English"],
    country: "Mexico",
    continent: "North America",
    coordinates: "19.4326, -99.1332",
    mapUrl: "https://maps.google.com/?q=19.4326,-99.1332"
  },

  // Asia - Thailand
  {
    id: 11,
    title: "Floating Market Coffee Boat",
    location: "Damnoen Saduak, Bangkok, Thailand",
    category: "Café",
    rating: 4.6,
    reviews: 423,
    price: "฿50-150",
    image: "/bangkok-floating-coffee.png",
    description: "Traditional longtail boat converted into a mobile coffee shop. Serves Thai iced coffee while floating through canals.",
    contributor: {
      name: "Siriporn Chai",
      avatar: "/placeholder.svg?height=40&width=40&text=SC",
      local: true,
      contributions: 38
    },
    tags: ["Floating Market", "Thai Coffee", "Boat", "Traditional"],
    aiInsight: "Best experience during morning market hours (6-9am) when vendors are most active",
    languages: ["ไทย", "English"],
    country: "Thailand",
    continent: "Asia",
    coordinates: "13.5186, 99.9570",
    mapUrl: "https://maps.google.com/?q=13.5186,99.9570"
  },

  // Asia - India
  {
    id: 12,
    title: "Heritage Chai Stall in Old Delhi",
    location: "Chandni Chowk, Delhi, India",
    category: "Café",
    rating: 4.7,
    reviews: 892,
    price: "₹10-50",
    image: "/delhi-chai-stall.png",
    description: "100-year-old chai stall where the tea master creates perfect masala chai using secret family spices.",
    contributor: {
      name: "Rajesh Sharma",
      avatar: "/placeholder.svg?height=40&width=40&text=RS",
      local: true,
      contributions: 67
    },
    tags: ["Chai", "Heritage", "Spices", "Family Recipe"],
    aiInsight: "Morning chai (7-9am) is freshest. Watch the tea master's technique - it's an art form",
    languages: ["हिन्दी", "English"],
    country: "India",
    continent: "Asia",
    coordinates: "28.6562, 77.2410",
    mapUrl: "https://maps.google.com/?q=28.6562,77.2410"
  },

  // South America - Brazil
  {
    id: 13,
    title: "Samba Café in Rio",
    location: "Santa Teresa, Rio de Janeiro, Brazil",
    category: "Café",
    rating: 4.5,
    reviews: 634,
    price: "R$8-25",
    image: "/rio-samba-cafe.png",
    description: "Bohemian café where local musicians practice samba rhythms. Strong cafézinho and live music create the perfect Rio vibe.",
    contributor: {
      name: "Isabella Santos",
      avatar: "/placeholder.svg?height=40&width=40&text=IS",
      local: true,
      contributions: 45
    },
    tags: ["Samba", "Live Music", "Cafézinho", "Bohemian"],
    aiInsight: "Spontaneous samba sessions usually happen on Sunday afternoons",
    languages: ["Português", "English"],
    country: "Brazil",
    continent: "South America",
    coordinates: "-22.9068, -43.1729",
    mapUrl: "https://maps.google.com/?q=-22.9068,-43.1729"
  },

  // South America - Argentina
  {
    id: 14,
    title: "Historic Café Tortoni",
    location: "San Telmo, Buenos Aires, Argentina",
    category: "Café",
    rating: 4.4,
    reviews: 3421,
    price: "$5-18",
    image: "/buenos-aires-tortoni.png",
    description: "Buenos Aires' oldest café, where tango legends and writers like Borges once gathered. Still serves traditional cortado.",
    contributor: {
      name: "Diego Morales",
      avatar: "/placeholder.svg?height=40&width=40&text=DM",
      local: true,
      contributions: 78
    },
    tags: ["Historic", "Tango", "Literature", "Cortado"],
    aiInsight: "Tango shows on weekends. Sit in the back room where Borges used to write",
    languages: ["Español", "English"],
    country: "Argentina",
    continent: "South America",
    coordinates: "-34.6118, -58.3960",
    mapUrl: "https://maps.google.com/?q=-34.6118,-58.3960"
  },

  // Africa - Morocco
  {
    id: 15,
    title: "Mint Tea Salon in Marrakech Riad",
    location: "Medina, Marrakech, Morocco",
    category: "Café",
    rating: 4.8,
    reviews: 567,
    price: "20-60 MAD",
    image: "/marrakech-mint-tea.png",
    description: "Hidden riad courtyard where mint tea is served in traditional glasses. Escape from the medina's chaos.",
    contributor: {
      name: "Amina El-Fassi",
      avatar: "/placeholder.svg?height=40&width=40&text=AE",
      local: true,
      contributions: 52
    },
    tags: ["Mint Tea", "Riad", "Traditional", "Peaceful"],
    aiInsight: "Sunset tea service (6-7pm) offers the most magical lighting in the courtyard",
    languages: ["العربية", "Français", "English"],
    country: "Morocco",
    continent: "Africa",
    coordinates: "31.6295, -7.9811",
    mapUrl: "https://maps.google.com/?q=31.6295,-7.9811"
  },

  // Oceania - Australia
  {
    id: 16,
    title: "Melbourne's Hidden Laneway Café",
    location: "Centre Place, Melbourne, Australia",
    category: "Café",
    rating: 4.7,
    reviews: 1234,
    price: "AUD $4-16",
    image: "/melbourne-laneway-cafe.png",
    description: "Tiny café in a graffiti-covered laneway, serving world-class flat whites. Melbourne's coffee culture at its finest.",
    contributor: {
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40&text=ET",
      local: true,
      contributions: 89
    },
    tags: ["Laneway", "Flat White", "Coffee Culture", "Street Art"],
    aiInsight: "Peak coffee quality between 8-10am. The barista is a three-time latte art champion",
    languages: ["English"],
    country: "Australia",
    continent: "Oceania",
    coordinates: "-37.8136, 144.9631",
    mapUrl: "https://maps.google.com/?q=-37.8136,144.9631"
  }
]

const categories = [
  { name: "Café", icon: Coffee, count: 2849, color: "from-amber-600 to-yellow-600" },
  { name: "Restaurant", icon: Utensils, count: 2170, color: "from-red-600 to-pink-600" },
  { name: "Art", icon: Palette, count: 2460, color: "from-purple-600 to-indigo-600" },
  { name: "Culture", icon: Theater, count: 1872, color: "from-green-600 to-emerald-600" },
  { name: "Location", icon: MapPin, count: 1234, color: "from-blue-600 to-cyan-600" },
  { name: "Music", icon: Music, count: 987, color: "from-pink-600 to-rose-600" },
  { name: "Historic", icon: Landmark, count: 756, color: "from-yellow-600 to-amber-600" }
]

const continents = [
  { name: "All Continents", value: "all" },
  { name: "Europe", value: "Europe" },
  { name: "Asia", value: "Asia" },
  { name: "North America", value: "North America" },
  { name: "South America", value: "South America" },
  { name: "Africa", value: "Africa" },
  { name: "Oceania", value: "Oceania" }
]

const translationLanguages = [
  { code: "en", name: "English", flag: "🇺🇸", geminiCode: "en" },
  { code: "es", name: "Español", flag: "🇪🇸", geminiCode: "es" },
  { code: "fr", name: "Français", flag: "🇫🇷", geminiCode: "fr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", geminiCode: "de" },
  { code: "it", name: "Italiano", flag: "🇮🇹", geminiCode: "it" },
  { code: "pt", name: "Português", flag: "🇧🇷", geminiCode: "pt" },
  { code: "ru", name: "Русский", flag: "🇷🇺", geminiCode: "ru" },
  { code: "ja", name: "日本語", flag: "🇯🇵", geminiCode: "ja" },
  { code: "ko", name: "한국어", flag: "🇰🇷", geminiCode: "ko" },
  { code: "zh", name: "中文", flag: "🇨🇳", geminiCode: "zh" },
  { code: "ar", name: "العربية", flag: "🇸🇦", geminiCode: "ar" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", geminiCode: "hi" },
  { code: "th", name: "ไทย", flag: "🇹🇭", geminiCode: "th" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", geminiCode: "vi" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷", geminiCode: "tr" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", geminiCode: "nl" },
  { code: "sv", name: "Svenska", flag: "🇸🇪", geminiCode: "sv" },
  { code: "da", name: "Dansk", flag: "🇩🇰", geminiCode: "da" },
  { code: "no", name: "Norsk", flag: "🇳🇴", geminiCode: "no" },
  { code: "fi", name: "Suomi", flag: "🇫🇮", geminiCode: "fi" },
  { code: "pl", name: "Polski", flag: "🇵🇱", geminiCode: "pl" },
  { code: "uk", name: "Українська", flag: "🇺🇦", geminiCode: "uk" },
  { code: "cs", name: "Čeština", flag: "🇨🇿", geminiCode: "cs" },
  { code: "hu", name: "Magyar", flag: "🇭🇺", geminiCode: "hu" },
  { code: "ro", name: "Română", flag: "🇷🇴", geminiCode: "ro" },
  { code: "bg", name: "Български", flag: "🇧🇬", geminiCode: "bg" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷", geminiCode: "hr" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰", geminiCode: "sk" },
  { code: "sl", name: "Slovenščina", flag: "🇸🇮", geminiCode: "sl" },
  { code: "et", name: "Eesti", flag: "🇪🇪", geminiCode: "et" },
  { code: "lv", name: "Latviešu", flag: "🇱🇻", geminiCode: "lv" },
  { code: "lt", name: "Lietuvių", flag: "🇱🇹", geminiCode: "lt" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", geminiCode: "id" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾", geminiCode: "ms" },
  { code: "tl", name: "Filipino", flag: "🇵🇭", geminiCode: "tl" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪", geminiCode: "sw" },
  { code: "he", name: "עברית", flag: "🇮🇱", geminiCode: "he" },
  { code: "fa", name: "فارسی", flag: "🇮🇷", geminiCode: "fa" },
  { code: "ur", name: "اردو", flag: "🇵🇰", geminiCode: "ur" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", geminiCode: "bn" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳", geminiCode: "ta" },
  { code: "te", name: "తెలుగు", flag: "🇮🇳", geminiCode: "te" },
  { code: "ml", name: "മലയാളം", flag: "🇮🇳", geminiCode: "ml" },
  { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳", geminiCode: "kn" },
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳", geminiCode: "gu" },
  { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳", geminiCode: "pa" },
  { code: "mr", name: "मराठी", flag: "🇮🇳", geminiCode: "mr" },
  { code: "ne", name: "नेपाली", flag: "🇳🇵", geminiCode: "ne" },
  { code: "si", name: "සිංහල", flag: "🇱🇰", geminiCode: "si" },
  { code: "my", name: "မြန်မာ", flag: "🇲🇲", geminiCode: "my" },
  { code: "km", name: "ខ្មែរ", flag: "🇰🇭", geminiCode: "km" },
  { code: "lo", name: "ລາວ", flag: "🇱🇦", geminiCode: "lo" }
]

// Popular currencies for travel
const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", symbol: "$" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", symbol: "€" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", symbol: "¥" },
  { code: "KRW", name: "South Korean Won", flag: "🇰🇷", symbol: "₩" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", symbol: "₹" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭", symbol: "฿" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", symbol: "S$" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", symbol: "A$" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", symbol: "C$" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", symbol: "CHF" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪", symbol: "kr" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴", symbol: "kr" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰", symbol: "kr" },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱", symbol: "zł" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿", symbol: "Kč" },
  { code: "HUF", name: "Hungarian Forint", flag: "🇭🇺", symbol: "Ft" },
  { code: "RUB", name: "Russian Ruble", flag: "🇷🇺", symbol: "₽" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷", symbol: "₺" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", symbol: "R$" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽", symbol: "$" },
  { code: "ARS", name: "Argentine Peso", flag: "🇦🇷", symbol: "$" },
  { code: "CLP", name: "Chilean Peso", flag: "🇨🇱", symbol: "$" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", symbol: "R" },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬", symbol: "£" },
  { code: "MAD", name: "Moroccan Dirham", flag: "🇲🇦", symbol: "DH" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", symbol: "د.إ" },
  { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦", symbol: "﷼" },
  { code: "ILS", name: "Israeli Shekel", flag: "🇮🇱", symbol: "₪" },
  { code: "VND", name: "Vietnamese Dong", flag: "🇻🇳", symbol: "₫" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", symbol: "Rp" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", symbol: "RM" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", symbol: "₱" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", symbol: "HK$" },
  { code: "TWD", name: "Taiwan Dollar", flag: "🇹🇼", symbol: "NT$" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", symbol: "NZ$" }
]

// Google Gemini API translation function
const translateWithGemini = async (text: string, targetLanguage: string): Promise<string> => {
  const API_KEY = "AIzaSyCJaHFMg0gtxz9nwI2Z44Ks3QCpygnSPAw"
  
  try {
    const targetLang = translationLanguages.find(lang => lang.code === targetLanguage)
    const targetLangName = targetLang?.name || targetLanguage
    
    // Try the newer API endpoint first
    let response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Translate the following text to ${targetLangName}. Only return the translation, nothing else:\n\n"${text}"`
          }]
        }],
        generationConfig: {
          temperature: 0.1,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    })

    // If first endpoint fails, try alternative endpoint
    if (!response.ok && response.status === 503) {
      console.log('Trying alternative endpoint...')
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Translate the following text to ${targetLangName}. Only return the translation, nothing else:\n\n"${text}"`
            }]
          }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 2048,
          }
        })
      })
    }

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', errorText)
      
      if (response.status === 503) {
        throw new Error('Translation service is temporarily unavailable. Please try again in a few moments.')
      } else if (response.status === 400) {
        throw new Error('Invalid request. Please check your text and try again.')
      } else if (response.status === 403) {
        throw new Error('API access denied. Please check your API key.')
      } else if (response.status === 429) {
        throw new Error('Too many requests. Please wait a moment and try again.')
      } else {
        throw new Error(`Translation service error (${response.status}). Please try again.`)
      }
    }

    const data = await response.json()
    console.log('API Response:', data)
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      let translation = data.candidates[0].content.parts[0].text.trim()
      
      // Clean up the translation by removing quotes if they wrap the entire text
      if ((translation.startsWith('"') && translation.endsWith('"')) || 
          (translation.startsWith("'") && translation.endsWith("'"))) {
        translation = translation.slice(1, -1)
      }
      
      return translation
    } else if (data.error) {
      throw new Error(`API Error: ${data.error.message || 'Unknown error occurred'}`)
    } else {
      throw new Error('Invalid response format from translation service')
    }
  } catch (error) {
    console.error('Translation error:', error)
    
    if (error instanceof Error) {
      // If it's a network error, provide a more user-friendly message
      if (error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection and try again.')
      }
      throw error
    } else {
      throw new Error('Translation failed. Please try again.')
    }
  }
}

// Currency conversion API function
const convertCurrency = async (amount: number, fromCurrency: string, toCurrency: string): Promise<number> => {
  try {
    // Using exchangerate-api.com (free tier)
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates')
    }
    
    const data = await response.json()
    
    if (!data.rates || !data.rates[toCurrency]) {
      throw new Error(`Exchange rate not available for ${toCurrency}`)
    }
    
    const rate = data.rates[toCurrency]
    return amount * rate
  } catch (error) {
    console.error('Currency conversion error:', error)
    throw new Error('Currency conversion failed. Please try again.')
  }
}

export default function TravelDiscoveryPlatform() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedContinent, setSelectedContinent] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [likedExperiences, setLikedExperiences] = useState<number[]>([])
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [isSignUpMode, setIsSignUpMode] = useState(false)

  // Translator state
  const [inputText, setInputText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [sourceLanguage, setSourceLanguage] = useState("en")
  const [targetLanguage, setTargetLanguage] = useState("es")
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationError, setTranslationError] = useState("")
  const [translationHistory, setTranslationHistory] = useState<Array<{
    id: number
    input: string
    output: string
    from: string
    to: string
    timestamp: Date
  }>>([])

  // Currency converter state
  const [amount, setAmount] = useState<string>("100")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [conversionError, setConversionError] = useState("")
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [conversionHistory, setConversionHistory] = useState<Array<{
    id: number
    amount: number
    from: string
    to: string
    result: number
    rate: number
    timestamp: Date
  }>>([])

  const toggleLike = (id: number) => {
    setLikedExperiences(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = searchQuery === "" ||
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      exp.contributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.continent.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || exp.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesContinent = selectedContinent === "all" || exp.continent === selectedContinent

    return matchesSearch && matchesCategory && matchesContinent
  })

  const openAllLocationsMap = () => {
    const allCoordinates = experiences
      .filter(exp => exp.coordinates)
      .map(exp => exp.coordinates)
      .join('|')

    const mapUrl = `https://www.google.com/maps/dir/${allCoordinates}`
    window.open(mapUrl, '_blank')
  }

const handleTranslate = async () => {
  if (!inputText.trim()) return

  setIsTranslating(true)
  setTranslationError("")
  
  let retryCount = 0
  const maxRetries = 2
  
  while (retryCount <= maxRetries) {
    try {
      const result = await translateWithGemini(inputText, targetLanguage)
      setTranslatedText(result)
      
      // Add to history
      const newTranslation = {
        id: Date.now(),
        input: inputText,
        output: result,
        from: sourceLanguage,
        to: targetLanguage,
        timestamp: new Date()
      }
      setTranslationHistory(prev => [newTranslation, ...prev.slice(0, 9)]) // Keep last 10 translations
      break // Success, exit retry loop
      
    } catch (error) {
      console.error(`Translation attempt ${retryCount + 1} failed:`, error)
      
      if (retryCount === maxRetries) {
        // Final attempt failed
        setTranslationError(error instanceof Error ? error.message : "Translation failed. Please try again.")
        setTranslatedText("")
      } else {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)))
      }
      
      retryCount++
    }
  }
  
  setIsTranslating(false)
}

  const handleCurrencyConversion = async () => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setConversionError("Please enter a valid amount")
      return
    }

    setIsConverting(true)
    setConversionError("")
    
    try {
      const result = await convertCurrency(numAmount, fromCurrency, toCurrency)
      const rate = result / numAmount
      
      setConvertedAmount(result)
      setExchangeRate(rate)
      setLastUpdated(new Date())
      
      // Add to history
      const newConversion = {
        id: Date.now(),
        amount: numAmount,
        from: fromCurrency,
        to: toCurrency,
        result: result,
        rate: rate,
        timestamp: new Date()
      }
      setConversionHistory(prev => [newConversion, ...prev.slice(0, 9)]) // Keep last 10 conversions
      
    } catch (error) {
      console.error('Currency conversion error:', error)
      setConversionError(error instanceof Error ? error.message : "Conversion failed. Please try again.")
      setConvertedAmount(null)
      setExchangeRate(null)
    } finally {
      setIsConverting(false)
    }
  }

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage)
    setTargetLanguage(sourceLanguage)
    setInputText(translatedText)
    setTranslatedText(inputText)
    setTranslationError("")
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    if (convertedAmount && exchangeRate) {
      setAmount(convertedAmount.toFixed(2))
      setConvertedAmount(parseFloat(amount))
      setExchangeRate(1 / exchangeRate)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const speakText = (text: string, language: string) => {
    if ('speechSynthesis' in window && text.trim()) {
      // Cancel any ongoing speech
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      
      // Map language codes to speech synthesis language codes
      const speechLangMap: { [key: string]: string } = {
        'en': 'en-US',
        'es': 'es-ES',
        'fr': 'fr-FR',
        'de': 'de-DE',
        'it': 'it-IT',
        'pt': 'pt-BR',
        'ru': 'ru-RU',
        'ja': 'ja-JP',
        'ko': 'ko-KR',
        'zh': 'zh-CN',
        'ar': 'ar-SA',
        'hi': 'hi-IN',
        'th': 'th-TH',
        'vi': 'vi-VN',
        'tr': 'tr-TR',
        'nl': 'nl-NL',
        'sv': 'sv-SE',
        'da': 'da-DK',
        'no': 'nb-NO',
        'fi': 'fi-FI'
      }
      
      utterance.lang = speechLangMap[language] || language
      utterance.rate = 0.9
      utterance.pitch = 1
      
      speechSynthesis.speak(utterance)
    }
  }

  const clearTranslation = () => {
    setInputText("")
    setTranslatedText("")
    setTranslationError("")
  }

  const clearConversion = () => {
    setAmount("100")
    setConvertedAmount(null)
    setExchangeRate(null)
    setConversionError("")
  }

  // Auto-convert when amount or currencies change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (amount && parseFloat(amount) > 0 && fromCurrency && toCurrency && fromCurrency !== toCurrency) {
        handleCurrencyConversion()
      }
    }, 500) // Debounce for 500ms

    return () => clearTimeout(timeoutId)
  }, [amount, fromCurrency, toCurrency])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDE6ED] via-[#F8EFE5] to-[#D9CBC2]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#3C5070] to-[#112250] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F8EFE5] to-[#D9CBC2] rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
                <MapPin className="w-6 h-6 text-[#112250]" />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                GoGo!!
              </h1>
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-[#F8EFE5] text-lg">✨</span>
                <span className="text-white text-sm font-medium">Discover Amazing Places</span>
                <span className="text-[#F8EFE5] text-lg">🌟</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-28 bg-white/20 border-white/30 text-white">
                  <Globe className="w-4 h-4 mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">🇺🇸 EN</SelectItem>
                  <SelectItem value="es">🇪🇸 ES</SelectItem>
                  <SelectItem value="zh">🇨🇳 中文</SelectItem>
                  <SelectItem value="ja">🇯🇵 日本語</SelectItem>
                  <SelectItem value="de">🇩🇪 DE</SelectItem>
                  <SelectItem value="fr">🇫🇷 FR</SelectItem>
                  <SelectItem value="it">🇮🇹 IT</SelectItem>
                  <SelectItem value="ko">🇰🇷 한국어</SelectItem>
                  <SelectItem value="th">🇹🇭 ไทย</SelectItem>
                  <SelectItem value="hi">🇮🇳 हिन्दी</SelectItem>
                  <SelectItem value="pt">🇧🇷 PT</SelectItem>
                  <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={() => setShowLoginModal(true)}
              >
                <Users className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3C5070]/10 via-[#112250]/10 to-[#3C5070]/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-6">
            <span className="text-6xl">🌍</span>
            <span className="text-6xl ml-2">✈️</span>
            <span className="text-6xl ml-2">🎉</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#112250] mb-6 leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#3C5070] to-[#112250] bg-clip-text text-transparent animate-pulse">
              Authentic
            </span>{" "}
            Experiences!
          </h2>
          <p className="text-xl text-[#3C5070] mb-8 max-w-2xl mx-auto font-medium">
            🚀 Uncover hidden gems and local favorites from around the world! From vibrant Parisian cafés to exciting Tokyo experiences,
            explore authentic adventures shared by locals who know their cities best! 🌟
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C5070] to-[#112250] rounded-full blur opacity-30"></div>
            <div className="relative bg-[#DDE6ED] rounded-full shadow-2xl border-4 border-[#DDE6ED]">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#3C5070] w-6 h-6" />
              <Input
                type="text"
                placeholder="🔍 Search amazing cafés, restaurants, festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-4 py-6 text-lg rounded-full border-0 focus:ring-4 focus:ring-[#3C5070]/30 bg-transparent text-[#112250]"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-[#3C5070] to-[#112250] hover:from-[#112250] hover:to-[#3C5070] shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                AI Magic ✨
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Continent Filter */}
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-44 bg-[#DDE6ED]/90 border-2 border-[#3C5070]/20 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Globe className="w-5 h-5 mr-2 text-[#3C5070]" />
                <SelectValue placeholder="🌍 Continent" />
              </SelectTrigger>
              <SelectContent>
                {continents.map((continent) => (
                  <SelectItem key={continent.value} value={continent.value}>
                    {continent.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View All Locations Map Button */}
            <Button
              variant="outline"
              onClick={openAllLocationsMap}
              className="rounded-full bg-[#DDE6ED]/90 border-2 border-[#112250]/20 hover:bg-[#112250]/10 shadow-lg hover:shadow-xl transition-all"
            >
              <Map className="w-5 h-5 mr-2 text-[#112250]" />
              🗺️ View All on Map
            </Button>

            {/* Category Pills */}
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full shadow-lg hover:shadow-xl transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-[#3C5070] to-[#112250] text-white"
                  : "bg-[#DDE6ED]/90 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10 text-[#112250]"
              }`}
            >
              🌟 All Categories
            </Button>
            {categories.slice(0, 4).map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-full shadow-lg hover:shadow-xl transition-all ${
                  selectedCategory === category.name
                    ? `bg-gradient-to-r from-[#3C5070] to-[#112250] text-white`
                    : "bg-[#DDE6ED]/90 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10 text-[#112250]"
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-[#F8EFE5]/30 text-current">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
<Tabs defaultValue="overview" className="w-full">
  <TabsList className="flex justify-center mb-8 bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 w-fit mx-auto">
    <TabsTrigger value="overview" className="rounded-xl font-bold text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3C5070] data-[state=active]:to-[#112250] data-[state=active]:text-white text-[#112250] px-8">
      📋 Overview ({filteredExperiences.length})
    </TabsTrigger>
    <TabsTrigger value="experiences" className="rounded-xl font-bold text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3C5070] data-[state=active]:to-[#112250] data-[state=active]:text-white text-[#112250] px-8">
      🌟 Experiences
    </TabsTrigger>
    <TabsTrigger value="translator" className="rounded-xl font-bold text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3C5070] data-[state=active]:to-[#112250] data-[state=active]:text-white text-[#112250] px-8">
      🌐 Translator
    </TabsTrigger>
    <TabsTrigger value="currency" className="rounded-xl font-bold text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3C5070] data-[state=active]:to-[#112250] data-[state=active]:text-white text-[#112250] px-8">
      💱 Currency
    </TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    {filteredExperiences.length === 0 ? (
      <div className="text-center py-12 bg-[#DDE6ED]/80 rounded-3xl shadow-lg border-2 border-[#3C5070]/10">
        <div className="text-6xl mb-4">😢</div>
        <Search className="w-16 h-16 text-[#3C5070]/60 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-[#112250]">No amazing experiences found!</h3>
        <p className="text-[#3C5070] mb-6 text-lg">
          Try searching for "café Paris", "ramen Tokyo", "festivals Spain", or adjust your filters! 🔍
        </p>
        <Button
          onClick={() => {
            setSearchQuery("")
            setSelectedCategory("all")
            setSelectedContinent("all")
          }}
          className="bg-gradient-to-r from-[#3C5070] to-[#112250] hover:from-[#112250] hover:to-[#3C5070] rounded-full text-lg px-8 py-3 shadow-lg"
        >
          ✨ Clear All Filters
        </Button>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((experience) => (
          <Card key={experience.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-[#DDE6ED]/90 backdrop-blur-sm border-2 border-[#3C5070]/10 rounded-3xl">
            <div className="relative">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-[#DDE6ED]/90 hover:bg-[#DDE6ED] rounded-full shadow-lg"
                onClick={() => toggleLike(experience.id)}
              >
                <Heart
                  className={`w-5 h-5 ${
                    likedExperiences.includes(experience.id)
                      ? "fill-red-500 text-red-500"
                      : "text-[#3C5070]"
                          }`}
                />
              </Button>
              <div className="absolute top-3 left-3">
                <Badge className="bg-gradient-to-r from-[#3C5070] to-[#112250] text-white font-bold px-3 py-1 rounded-full shadow-lg">
                  {experience.country}
                </Badge>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge className={`font-bold px-3 py-1 rounded-full shadow-lg text-white bg-gradient-to-r from-[#3C5070] to-[#112250]`}>
                  {experience.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 line-clamp-2 text-[#112250]">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-sm text-[#3C5070] mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-[#3C5070]" />
                    {experience.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center bg-[#F8EFE5]/30 rounded-full px-3 py-1">
                    <Star className="w-4 h-4 fill-[#F8EFE5] text-[#F8EFE5] mr-1" />
                    <span className="font-bold text-[#112250]">{experience.rating}</span>
                  </div>
                  <div className="text-sm text-[#3C5070] mt-1">
                    {experience.reviews} reviews
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-[#3C5070] text-sm mb-4 line-clamp-2 leading-relaxed">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {experience.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-[#3C5070]/10 text-[#112250] hover:bg-[#3C5070]/20 rounded-full px-3 py-1">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#3C5070]/10 to-[#112250]/10 rounded-2xl p-4 mb-4 border border-[#3C5070]/20">
                <div className="flex items-start">
                  <Sparkles className="w-5 h-5 text-[#3C5070] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#112250] font-medium leading-relaxed">
                    🤖 {experience.aiInsight}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="w-8 h-8 mr-3 border-2 border-[#3C5070]/20">
                    <AvatarImage src={experience.contributor.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-[#3C5070] to-[#112250] text-white font-bold">
                      {experience.contributor.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-[#112250]">{experience.contributor.name}</span>
                      {experience.contributor.local && (
                        <Badge variant="outline" className="ml-2 text-xs bg-[#F8EFE5]/30 text-[#112250] border-[#3C5070]/30 rounded-full">
                          🏠 Local
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-[#3C5070]">
                      ✨ {experience.contributor.contributions} contributions
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {experience.coordinates && experience.mapUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                      onClick={() => window.open(experience.mapUrl, '_blank')}
                      title="Open in Google Maps"
                    >
                      <MapPin className="w-4 h-4 text-[#3C5070]" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20">
                    <Share2 className="w-4 h-4 text-[#3C5070]" />
                  </Button>
                  <div className="text-sm font-bold text-[#112250] bg-[#F8EFE5]/30 px-3 py-1 rounded-full">
                    💰 {experience.price}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
  </TabsContent>

  <TabsContent value="experiences">
  <div className="space-y-12">
    {/* East Asia */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🏯</div>
        <h2 className="text-3xl font-black text-[#112250]">East Asia</h2>
      </div>
      
      {/* Japan */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇯🇵</span>
          <h3 className="text-2xl font-bold text-[#112250]">Japan</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Stay in a Ryokan (traditional inn) in Kyoto with an onsen (hot spring)",
            "Witness Cherry Blossom Season (Sakura) in Tokyo or Osaka",
            "Explore ancient temples in Nara and the Fushimi Inari Shrine in Kyoto",
            "Eat authentic sushi at Toyosu Market, Tokyo",
            "Experience futuristic tech and pop culture in Akihabara and Shibuya"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* South Korea */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇰🇷</span>
          <h3 className="text-2xl font-bold text-[#112250]">South Korea</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Traditional Hanbok dress-up & palace tour in Seoul (Gyeongbokgung Palace)",
            "Eat street food in Myeongdong (tteokbokki, hotteok, etc.)",
            "Hike Bukhansan Mountain for panoramic views of Seoul",
            "Visit Jeju Island for nature, waterfalls, and lava tubes",
            "Dance & enjoy nightlife in Hongdae or Itaewon"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* China */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇨🇳</span>
          <h3 className="text-2xl font-bold text-[#112250]">China</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Walk the Great Wall (Mutianyu or Jinshanling for less crowd)",
            "Wander through the Forbidden City and Tiananmen Square, Beijing",
            "Cruise on the Li River in Guilin for karst mountain landscapes",
            "See the Terracotta Army in Xi'an",
            "Eat dim sum or street noodles in Chengdu or Shanghai"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* South Asia */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🕌</div>
        <h2 className="text-3xl font-black text-[#112250]">South Asia</h2>
      </div>
      
      {/* India */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇮🇳</span>
          <h3 className="text-2xl font-bold text-[#112250]">India</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "See the Taj Mahal at sunrise",
            "Take a houseboat ride in Kerala's backwaters",
            "Attend a Holi or Diwali festival",
            "Explore the palaces & bazaars of Jaipur or Udaipur",
            "Eat thali meals and street chaat across cities"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nepal */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇳🇵</span>
          <h3 className="text-2xl font-bold text-[#112250]">Nepal</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Trek to Everest Base Camp or Annapurna Circuit",
            "Explore ancient cities like Bhaktapur and Patan",
            "Do yoga or meditation retreats in Pokhara",
            "Visit the birthplace of Buddha in Lumbini"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sri Lanka */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇱🇰</span>
          <h3 className="text-2xl font-bold text-[#112250]">Sri Lanka</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Ride the scenic train from Kandy to Ella",
            "Go on a wildlife safari in Yala National Park",
            "Surf and relax on the beaches of Mirissa or Arugam Bay",
            "Visit Sigiriya Rock Fortress"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Southeast Asia */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🧧</div>
        <h2 className="text-3xl font-black text-[#112250]">Southeast Asia</h2>
      </div>
      
      {/* Thailand */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇹🇭</span>
          <h3 className="text-2xl font-bold text-[#112250]">Thailand</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Enjoy night markets & floating markets in Bangkok",
            "Participate in Songkran (Thai New Year Water Festival)",
            "Relax or party on islands like Phuket, Koh Phi Phi, or Koh Samui",
            "Get a traditional Thai massage",
            "Visit temples like Wat Arun or Wat Pho"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vietnam */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇻🇳</span>
          <h3 className="text-2xl font-bold text-[#112250]">Vietnam</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Cruise Halong Bay",
            "Motorbike the Hai Van Pass",
            "Eat pho and banh mi in Hanoi or Saigon",
            "Explore lantern-lit streets of Hoi An",
            "Row through Ninh Binh's river caves"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indonesia */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇮🇩</span>
          <h3 className="text-2xl font-bold text-[#112250]">Indonesia</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Sunrise hike to Mount Bromo or Ijen Crater",
            "Temple hopping in Yogyakarta (Borobudur & Prambanan)",
            "Surf or yoga in Bali",
            "Explore Komodo National Park"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Malaysia */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇲🇾</span>
          <h3 className="text-2xl font-bold text-[#112250]">Malaysia</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Street food tour in Penang or Kuala Lumpur",
            "Visit the Petronas Towers",
            "Walk through rainforests in Borneo or Cameron Highlands"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philippines */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇵🇭</span>
          <h3 className="text-2xl font-bold text-[#112250]">Philippines</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Island hopping in El Nido or Coron",
            "Swim with whale sharks in Donsol",
            "Explore rice terraces in Banaue",
            "Surf in Siargao"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Myanmar */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇲🇲</span>
          <h3 className="text-2xl font-bold text-[#112250]">Myanmar <span className="text-sm text-[#3C5070]">(if safe to travel)</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Sunrise balloon ride over Bagan temples",
            "Inle Lake boat tour",
            "Shwedagon Pagoda visit in Yangon"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Central Asia */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🏔️</div>
        <h2 className="text-3xl font-black text-[#112250]">Central Asia</h2>
      </div>
      
      {/* Kazakhstan */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇰🇿</span>
          <h3 className="text-2xl font-bold text-[#112250]">Kazakhstan</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Almaty mountains: hike and ski",
            "Visit Charyn Canyon",
            "Explore the futuristic city of Nur-Sultan"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Uzbekistan */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇺🇿</span>
          <h3 className="text-2xl font-bold text-[#112250]">Uzbekistan</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Explore Silk Road cities: Samarkand, Bukhara, Khiva",
            "Taste plov and other local dishes"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kyrgyzstan */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇰🇬</span>
          <h3 className="text-2xl font-bold text-[#112250]">Kyrgyzstan</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Stay in a yurt by Lake Issyk-Kul",
            "Horse trek through alpine valleys"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Europe */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🏰</div>
        <h2 className="text-3xl font-black text-[#112250]">Europe</h2>
      </div>
      
      {/* France */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇫🇷</span>
          <h3 className="text-2xl font-bold text-[#112250]">France</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Climb the Eiffel Tower and enjoy Paris from above",
            "Taste wine in Bordeaux or Champagne region",
            "Walk through Montmartre's art lanes",
            "Visit the Louvre Museum for art lovers (Mona Lisa, Venus de Milo)",
            "Relax in the lavender fields of Provence (June–July)"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Italy */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇮🇹</span>
          <h3 className="text-2xl font-bold text-[#112250]">Italy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Gondola ride in Venice's canals",
            "Explore the ruins of Pompeii",
            "Eat pizza in Naples, pasta in Bologna, and gelato in Rome",
            "Tour the Vatican Museums and Sistine Chapel",
            "Enjoy the Tuscan countryside with wine and villa stays"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spain */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇪🇸</span>
          <h3 className="text-2xl font-bold text-[#112250]">Spain</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Watch a Flamenco show in Seville",
            "Attend La Tomatina or Running of the Bulls (if adventurous)",
            "Visit Sagrada Familia in Barcelona",
            "Eat tapas and churros in Madrid",
            "Relax on Costa Brava beaches"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Greece */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇬🇷</span>
          <h3 className="text-2xl font-bold text-[#112250]">Greece</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Watch sunset in Santorini",
            "Explore ancient ruins of the Acropolis in Athens",
            "Island hop in the Cyclades",
            "Try moussaka, souvlaki, and ouzo",
            "Visit monasteries in Meteora"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portugal */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇵🇹</span>
          <h3 className="text-2xl font-bold text-[#112250]">Portugal</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Ride Tram 28 in Lisbon",
            "Eat pastéis de nata and drink port wine",
            "Listen to Fado music",
            "Explore fairytale palaces in Sintra",
            "Surf in Nazaré or Algarve beaches"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Germany */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇩🇪</span>
          <h3 className="text-2xl font-bold text-[#112250]">Germany</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Celebrate Oktoberfest in Munich",
            "Tour Berlin's historical sites: Berlin Wall, Brandenburg Gate",
            "Explore medieval towns like Rothenburg ob der Tauber",
            "Drive on the Autobahn",
            "Cruise the Rhine River past castles and vineyards"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Netherlands */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇳🇱</span>
          <h3 className="text-2xl font-bold text-[#112250]">Netherlands</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Cycle through Amsterdam's canals and tulip fields",
            "Visit the Van Gogh Museum & Rijksmuseum",
            "Explore windmills in Zaanse Schans",
            "Taste Dutch cheese in Gouda"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Switzerland */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇨🇭</span>
          <h3 className="text-2xl font-bold text-[#112250]">Switzerland</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Ride scenic trains like Glacier Express or Bernina Express",
            "Ski or hike the Alps",
            "Visit Interlaken, Lucerne, and Zermatt (Matterhorn)",
            "Eat Swiss chocolate and fondue"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Austria */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇦🇹</span>
          <h3 className="text-2xl font-bold text-[#112250]">Austria</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Attend a classical concert in Vienna",
            "Visit Mozart's birthplace in Salzburg",
            "Sound of Music tour",
            "Ski in the Tyrol region",
            "Cafe culture: Sachertorte & Viennese coffeehouses"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Czech Republic */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇨🇿</span>
          <h3 className="text-2xl font-bold text-[#112250]">Czech Republic</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Explore Prague Castle and Charles Bridge",
            "Drink world-famous Czech beer in a pub",
            "Wander through medieval Old Town Square"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hungary */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇭🇺</span>
          <h3 className="text-2xl font-bold text-[#112250]">Hungary</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Relax in thermal baths in Budapest (e.g., Széchenyi Baths)",
            "Take a Danube river cruise at night",
            "Try goulash and chimney cakes"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Croatia */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇭🇷</span>
          <h3 className="text-2xl font-bold text-[#112250]">Croatia</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Sail the Dalmatian coast (Dubrovnik to Split)",
            "Walk Dubrovnik's old city walls",
            "Visit Plitvice Lakes National Park"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Poland */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇵🇱</span>
          <h3 className="text-2xl font-bold text-[#112250]">Poland</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Explore Krakow's Old Town and Wawel Castle",
            "Visit Auschwitz-Birkenau Memorial",
            "Enjoy pierogi and Polish desserts"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Norway */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇳🇴</span>
          <h3 className="text-2xl font-bold text-[#112250]">Norway</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "See the Northern Lights (Tromsø)",
            "Cruise through the fjords (Geirangerfjord, Nærøyfjord)",
            "Hike to Trolltunga or Preikestolen"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sweden */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇸🇪</span>
          <h3 className="text-2xl font-bold text-[#112250]">Sweden</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Visit Stockholm's Gamla Stan (Old Town)",
            "Stay in the ICEHOTEL (Lapland)",
            "Explore Scandinavian design and fika culture"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Finland */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇫🇮</span>
          <h3 className="text-2xl font-bold text-[#112250]">Finland</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Santa Claus Village in Rovaniemi",
            "Relax in a traditional Finnish sauna",
            "See auroras from a glass igloo"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Iceland */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇮🇸</span>
          <h3 className="text-2xl font-bold text-[#112250]">Iceland</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Bathe in the Blue Lagoon",
            "Drive the Golden Circle",
            "See geysers, waterfalls, and volcanic landscapes",
            "Chase Northern Lights (Sept–March)"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Turkey */}
    <section className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
      <div className="flex items-center mb-8">
        <div className="text-4xl mr-4">🕌</div>
        <h2 className="text-3xl font-black text-[#112250]">Transcontinental</h2>
      </div>
      
      {/* Turkey */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🇹🇷</span>
          <h3 className="text-2xl font-bold text-[#112250]">Turkey <span className="text-sm text-[#3C5070]">(Europe & Asia)</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Hot air balloon ride in Cappadocia",
            "Visit Hagia Sophia & Blue Mosque in Istanbul",
            "Pamukkale thermal pools",
            "Try Turkish coffee and baklava"
          ].map((experience, index) => (
            <div key={index} className="bg-[#F8EFE5]/50 rounded-2xl p-4 border border-[#3C5070]/10 hover:shadow-lg transition-all">
              <p className="text-[#112250] font-medium">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</TabsContent>

  <TabsContent value="translator">
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="text-6xl mr-4">🌐</div>
          <Languages className="w-12 h-12 text-[#3C5070]" />
        </div>
        <h2 className="text-4xl font-black text-[#112250] mb-4">AI-Powered Translator</h2>
        <p className="text-xl text-[#3C5070] max-w-2xl mx-auto">
          Break down language barriers! Translate words, sentences, or entire paragraphs instantly with our advanced Google Gemini AI translator. Perfect for travelers exploring the world! ✈️
        </p>
      </div>

      {/* Main Translator Interface */}
      <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#112250] flex items-center">
                <span className="text-2xl mr-2">📝</span>
                From
              </h3>
              <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                <SelectTrigger className="w-48 bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {translationLanguages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <Textarea
                placeholder="Type your text here... (words, sentences, or paragraphs)"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[200px] bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 rounded-2xl p-4 text-[#112250] placeholder:text-[#3C5070]/60 focus:ring-4 focus:ring-[#3C5070]/30 resize-none"
              />
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => speakText(inputText, sourceLanguage)}
                  className="w-8 h-8 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                  disabled={!inputText.trim()}
                >
                  <Volume2 className="w-4 h-4 text-[#3C5070]" />
                </Button>
                <span className="text-sm text-[#3C5070]/60">
                  {inputText.length} characters
                </span>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#112250] flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                To
              </h3>
              <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                <SelectTrigger className="w-48 bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {translationLanguages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <div className="min-h-[200px] bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 rounded-2xl p-4 text-[#112250]">
                {isTranslating ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3C5070]"></div>
                      <span className="text-[#3C5070]">Translating with Google Gemini AI...</span>
                    </div>
                  </div>
                ) : translationError ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-red-500 text-4xl mb-2">⚠️</div>
                      <p className="text-red-600 font-medium">{translationError}</p>
                    </div>
                  </div>
                ) : translatedText ? (
                  <p className="leading-relaxed">{translatedText}</p>
                ) : (
                  <p className="text-[#3C5070]/60 italic">Translation will appear here...</p>
                )}
              </div>
              {translatedText && (
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => speakText(translatedText, targetLanguage)}
                    className="w-8 h-8 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                  >
                    <Volume2 className="w-4 h-4 text-[#3C5070]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(translatedText)}
                    className="w-8 h-8 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                  >
                    <Copy className="w-4 h-4 text-[#3C5070]" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button
            onClick={swapLanguages}
            variant="outline"
            className="rounded-full bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10"
            disabled={isTranslating}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Swap Languages
          </Button>
          
          <Button
            onClick={handleTranslate}
            disabled={!inputText.trim() || isTranslating}
            className="bg-gradient-to-r from-[#3C5070] to-[#112250] hover:from-[#112250] hover:to-[#3C5070] rounded-full px-8 py-3 text-lg font-bold shadow-lg"
          >
            {isTranslating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Translating...
              </>
            ) : (
              <>
                <Languages className="w-5 h-5 mr-2" />
                Translate with Gemini AI ✨
              </>
            )}
          </Button>
          
          <Button
            onClick={clearTranslation}
            variant="outline"
            className="rounded-full bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10"
            disabled={isTranslating}
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Translation History */}
      {translationHistory.length > 0 && (
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
          <h3 className="text-2xl font-bold text-[#112250] mb-6 flex items-center">
            <span className="text-3xl mr-3">📚</span>
            Translation History
          </h3>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {translationHistory.map((translation) => (
              <div key={translation.id} className="bg-[#F8EFE5]/30 rounded-2xl p-4 border border-[#3C5070]/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#3C5070]/10 text-[#112250] border-[#3C5070]/20">
                      {translationLanguages.find(l => l.code === translation.from)?.flag} {translationLanguages.find(l => l.code === translation.from)?.name}
                    </Badge>
                    <span className="text-[#3C5070]">→</span>
                    <Badge className="bg-[#112250]/10 text-[#112250] border-[#112250]/20">
                      {translationLanguages.find(l => l.code === translation.to)?.flag} {translationLanguages.find(l => l.code === translation.to)?.name}
                    </Badge>
                  </div>
                  <span className="text-sm text-[#3C5070]/60">
                    {translation.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#3C5070] mb-1">Original:</p>
                    <p className="text-[#112250] bg-white/50 rounded-lg p-3 text-sm">{translation.input}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3C5070] mb-1">Translation:</p>
                    <div className="relative">
                      <p className="text-[#112250] bg-white/50 rounded-lg p-3 text-sm pr-12">{translation.output}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(translation.output)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                      >
                        <Copy className="w-3 h-3 text-[#3C5070]" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Phrases */}
      <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
        <h3 className="text-2xl font-bold text-[#112250] mb-6 flex items-center">
          <span className="text-3xl mr-3">⚡</span>
          Quick Travel Phrases
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Hello, how are you?",
            "Thank you very much",
            "Where is the bathroom?",
            "How much does this cost?",
            "I don't speak this language",
            "Can you help me?",
            "Where is the nearest restaurant?",
            "I would like to order food",
            "Excuse me, sorry",
            "I'm lost, can you help me?",
            "What time is it?",
            "I love traveling and exploring new places.",
            "Do you speak English?",
            "I need a doctor",
            "Where is the train station?",
            "How do I get to the airport?",
            "I'm allergic to nuts",
            "The food is delicious"
          ].map((phrase, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => setInputText(phrase)}
              className="text-left justify-start h-auto p-4 bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10 rounded-2xl"
            >
              <span className="text-sm text-[#112250] leading-relaxed">{phrase}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">🤖</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">Google Gemini AI</h4>
          <p className="text-[#3C5070] text-sm">Powered by Google's advanced Gemini AI for accurate, context-aware translations.</p>
        </div>
        
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">🔊</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">Text-to-Speech</h4>
          <p className="text-[#3C5070] text-sm">Listen to pronunciations in native accents to improve your speaking skills.</p>
        </div>
        
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">🌍</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">50+ Languages</h4>
          <p className="text-[#3C5070] text-sm">Support for over 50 languages including major world languages and regional dialects.</p>
        </div>
      </div>
    </div>
  </TabsContent>

  <TabsContent value="currency">
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="text-6xl mr-4">💱</div>
          <DollarSign className="w-12 h-12 text-[#3C5070]" />
        </div>
        <h2 className="text-4xl font-black text-[#112250] mb-4">Live Currency Converter</h2>
        <p className="text-xl text-[#3C5070] max-w-2xl mx-auto">
          Get real-time exchange rates for your travels! Convert between 35+ major world currencies with live market data. Perfect for budget planning and expense tracking! 💰
        </p>
      </div>

      {/* Main Currency Converter Interface */}
      <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#112250] flex items-center">
                <span className="text-2xl mr-2">💵</span>
                From
              </h3>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-48 bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3C5070] font-bold text-lg">
                {currencies.find(c => c.code === fromCurrency)?.symbol || fromCurrency}
              </div>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-16 pr-4 py-6 text-2xl font-bold bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 rounded-2xl text-[#112250] placeholder:text-[#3C5070]/60 focus:ring-4 focus:ring-[#3C5070]/30"
              />
              <div className="absolute bottom-4 right-4">
                <span className="text-sm text-[#3C5070]/60 font-medium">
                  {fromCurrency}
                </span>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#112250] flex items-center">
                <span className="text-2xl mr-2">💰</span>
                To
              </h3>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-48 bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <div className="min-h-[88px] bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 rounded-2xl p-4 flex items-center justify-center text-[#112250]">
                {isConverting ? (
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3C5070]"></div>
                    <span className="text-[#3C5070]">Converting...</span>
                  </div>
                ) : conversionError ? (
                  <div className="text-center">
                    <div className="text-red-500 text-2xl mb-1">⚠️</div>
                    <p className="text-red-600 font-medium text-sm">{conversionError}</p>
                  </div>
                ) : convertedAmount !== null ? (
                  <div className="text-center w-full">
                    <div className="text-3xl font-black text-[#112250] mb-1">
                      {currencies.find(c => c.code === toCurrency)?.symbol || toCurrency} {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-[#3C5070] font-medium">
                      {toCurrency}
                    </div>
                  </div>
                ) : (
                  <p className="text-[#3C5070]/60 italic">Converted amount will appear here...</p>
                )}
              </div>
              
              {exchangeRate && (
                <div className="absolute -bottom-8 left-0 right-0 text-center">
                  <div className="inline-flex items-center bg-[#3C5070]/10 rounded-full px-3 py-1 text-xs text-[#112250]">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <Button
            onClick={swapCurrencies}
            variant="outline"
            className="rounded-full bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10"
            disabled={isConverting}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Swap Currencies
          </Button>
          
          <Button
            onClick={handleCurrencyConversion}
            disabled={!amount || parseFloat(amount) <= 0 || isConverting}
            className="bg-gradient-to-r from-[#3C5070] to-[#112250] hover:from-[#112250] hover:to-[#3C5070] rounded-full px-8 py-3 text-lg font-bold shadow-lg"
          >
            {isConverting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Converting...
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5 mr-2" />
                Convert Currency 💱
              </>
            )}
          </Button>
          
          <Button
            onClick={clearConversion}
            variant="outline"
            className="rounded-full bg-[#F8EFE5]/50 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10"
            disabled={isConverting}
          >
            Clear All
          </Button>
        </div>

        {/* Last Updated */}
        {lastUpdated && (
          <div className="text-center mt-6">
            <p className="text-sm text-[#3C5070]/60">
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          </div>
        )}
      </div>

      {/* Conversion History */}
      {conversionHistory.length > 0 && (
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
          <h3 className="text-2xl font-bold text-[#112250] mb-6 flex items-center">
            <span className="text-3xl mr-3">📊</span>
            Conversion History
          </h3>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {conversionHistory.map((conversion) => (
              <div key={conversion.id} className="bg-[#F8EFE5]/30 rounded-2xl p-4 border border-[#3C5070]/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#3C5070]/10 text-[#112250] border-[#3C5070]/20">
                      {currencies.find(c => c.code === conversion.from)?.flag} {conversion.from}
                    </Badge>
                    <span className="text-[#3C5070]">→</span>
                    <Badge className="bg-[#112250]/10 text-[#112250] border-[#112250]/20">
                      {currencies.find(c => c.code === conversion.to)?.flag} {conversion.to}
                    </Badge>
                  </div>
                  <span className="text-sm text-[#3C5070]/60">
                    {conversion.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#3C5070] mb-1">Amount:</p>
                    <p className="text-[#112250] bg-white/50 rounded-lg p-3 text-sm font-bold">
                      {currencies.find(c => c.code === conversion.from)?.symbol}{conversion.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3C5070] mb-1">Converted:</p>
                    <div className="relative">
                      <p className="text-[#112250] bg-white/50 rounded-lg p-3 text-sm font-bold pr-12">
                        {currencies.find(c => c.code === conversion.to)?.symbol}{conversion.result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(conversion.result.toFixed(2))}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#3C5070]/10 hover:bg-[#3C5070]/20"
                      >
                        <Copy className="w-3 h-3 text-[#3C5070]" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3C5070] mb-1">Exchange Rate:</p>
                    <p className="text-[#112250] bg-white/50 rounded-lg p-3 text-sm">
                      1 {conversion.from} = {conversion.rate.toFixed(4)} {conversion.to}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popular Currency Pairs */}
      <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#3C5070]/10 p-8">
        <h3 className="text-2xl font-bold text-[#112250] mb-6 flex items-center">
          <span className="text-3xl mr-3">🔥</span>
          Popular Currency Pairs
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { from: "USD", to: "EUR", label: "US Dollar → Euro" },
            { from: "USD", to: "GBP", label: "US Dollar → British Pound" },
            { from: "USD", to: "JPY", label: "US Dollar → Japanese Yen" },
            { from: "EUR", to: "GBP", label: "Euro → British Pound" },
            { from: "USD", to: "CNY", label: "US Dollar → Chinese Yuan" },
            { from: "USD", to: "INR", label: "US Dollar → Indian Rupee" },
            { from: "EUR", to: "CHF", label: "Euro → Swiss Franc" },
            { from: "GBP", to: "USD", label: "British Pound → US Dollar" },
            { from: "USD", to: "CAD", label: "US Dollar → Canadian Dollar" }
          ].map((pair, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                setFromCurrency(pair.from)
                setToCurrency(pair.to)
                setAmount("100")
              }}
              className="text-left justify-start h-auto p-4 bg-[#F8EFE5]/30 border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/10 rounded-2xl"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <span className="text-lg">{currencies.find(c => c.code === pair.from)?.flag}</span>
                  <span className="font-bold text-[#112250]">{pair.from}</span>
                </div>
                <span className="text-[#3C5070]">→</span>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">{currencies.find(c => c.code === pair.to)?.flag}</span>
                  <span className="font-bold text-[#112250]">{pair.to}</span>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">📈</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">Real-Time Rates</h4>
          <p className="text-[#3C5070] text-sm">Live exchange rates updated from global financial markets for accurate conversions.</p>
        </div>
        
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">🌍</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">35+ Currencies</h4>
          <p className="text-[#3C5070] text-sm">Support for major world currencies including USD, EUR, GBP, JPY, CNY, and more.</p>
        </div>
        
        <div className="bg-[#DDE6ED]/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3C5070]/10 p-6 text-center">
          <div className="text-4xl mb-4">💼</div>
          <h4 className="text-lg font-bold text-[#112250] mb-2">Travel Ready</h4>
          <p className="text-[#3C5070] text-sm">Perfect for budget planning, expense tracking, and understanding local prices while traveling.</p>
        </div>
      </div>
    </div>
  </TabsContent>
</Tabs>
        
        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
              <button
                onClick={() => {
                  setShowLoginModal(false)
                  setIsSignUpMode(false)
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3C5070] to-[#112250] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#112250] mb-2">
                  {isSignUpMode ? "Join GoGo!!" : "Welcome to GoGo!!"}
                </h2>
                <p className="text-[#3C5070]">
                  {isSignUpMode ? "Create your account to start exploring" : "Sign in to discover amazing experiences"}
                </p>
              </div>

              <form className="space-y-4">
                {isSignUpMode && (
                  <div>
                    <label className="block text-sm font-medium text-[#112250] mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-[#3C5070]/20 rounded-xl focus:ring-2 focus:ring-[#3C5070]/30 focus:border-[#3C5070]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#112250] mb-2">
                    Email or Phone Number
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your email or phone number"
                    className="w-full px-4 py-3 border border-[#3C5070]/20 rounded-xl focus:ring-2 focus:ring-[#3C5070]/30 focus:border-[#3C5070]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#112250] mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-[#3C5070]/20 rounded-xl focus:ring-2 focus:ring-[#3C5070]/30 focus:border-[#3C5070]"
                  />
                </div>

                {isSignUpMode && (
                  <div>
                    <label className="block text-sm font-medium text-[#112250] mb-2">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border border-[#3C5070]/20 rounded-xl focus:ring-2 focus:ring-[#3C5070]/30 focus:border-[#3C5070]"
                    />
                  </div>
                )}

                {!isSignUpMode && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-[#3C5070] hover:text-[#112250] font-medium"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-[#3C5070] to-[#112250] hover:from-[#112250] hover:to-[#3C5070] text-white py-3 rounded-xl font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    // Process login/signup
                    alert(isSignUpMode ? "Account created successfully! 🎉" : "Welcome back! 🌟")
                    setShowLoginModal(false)
                    setIsSignUpMode(false)
                  }}
                >
                  {isSignUpMode ? "Create Account" : "Sign In"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#3C5070]/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#3C5070]">or</span>
                  </div>
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-2 border-[#3C5070]/20 hover:bg-[#3C5070]/5 py-3 rounded-xl font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    // Process Google sign in/up
                    alert("Signing in with Google... 🚀")
                    setShowLoginModal(false)
                    setIsSignUpMode(false)
                  }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>

                <div className="text-center pt-4 border-t border-[#3C5070]/10">
                  <p className="text-sm text-[#3C5070]">
                    {isSignUpMode ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                      type="button"
                      className="text-[#112250] font-medium hover:underline"
                      onClick={() => setIsSignUpMode(!isSignUpMode)}
                    >
                      {isSignUpMode ? "Sign in here" : "Sign up here"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
