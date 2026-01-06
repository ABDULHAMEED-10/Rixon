/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import MetaData from "../../Components/MataData";
import { 
  Image, 
  Scissors, 
  FileText, 
  DollarSign, 
  FileCheck, 
  Palette, 
  QrCode, 
  Code, 
  FileImage, 
  Video,
  Music,
  Archive,
  FileJson,
  Hash,
  Globe,
  Download,
  Upload,
  Zap,
  Maximize2,
  Type,
  Lock,
  Search,
  BarChart3,
  Link,
  Mail,
  Calendar,
  Clock,
  Calculator,
  FileCode,
  Layers,
  Sparkles,
  ImageIcon,
  Crop,
  Mic
} from "lucide-react";

const Tools = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tools = [
    {
      category: "Image & Photo Tools",
      items: [
        {
          name: "TinyPNG - Image Compression",
          description: "Compress PNG, JPEG, WebP, and AVIF images up to 80% smaller without losing quality. Perfect for optimizing website images, reducing file sizes, and improving page load times.",
          url: "https://tinypng.com/",
          keywords: "image compression, compress png, compress jpg, image optimizer, webp converter, reduce image size, image optimization tool",
          icon: Image
        },
        {
          name: "Erase BG - Background Remover",
          description: "Remove backgrounds from images for free with AI-powered technology. Supports HD and 4K resolution images. Perfect for creating transparent PNGs, product photos, and profile pictures.",
          url: "https://erasebg.org/",
          keywords: "remove background, background remover, transparent png, erase background, image background removal, free bg remover, photo background editor",
          icon: Scissors
        },
        {
          name: "ResizeImage - Image Resizer",
          description: "Resize images online for free. Adjust image dimensions, maintain aspect ratio, and convert between formats. Perfect for social media, websites, and documents.",
          url: "https://resizeimage.net/",
          keywords: "resize image, image resizer, resize photo, change image size, image dimensions, photo resizer online",
          icon: Maximize2
        },
        {
          name: "Photopea - Online Photo Editor",
          description: "Free online photo editor similar to Photoshop. Edit images, create graphics, and work with layers. No installation required, works in your browser.",
          url: "https://www.photopea.com/",
          keywords: "photo editor, image editor, online photoshop, edit photos online, free photo editor, image editing tool",
          icon: Crop
        }
      ]
    },
    {
      category: "File Conversion Tools",
      items: [
        {
          name: "CloudConvert - Universal File Converter",
          description: "Convert files between 200+ formats including documents, images, videos, audio, archives, and more. Supports PDF conversion, video encoding, and batch processing with high-quality results.",
          url: "https://cloudconvert.com/",
          keywords: "file converter, convert pdf, video converter, audio converter, document converter, format converter, online file converter, pdf to word, image converter",
          icon: FileText
        }
      ]
    },
    {
      category: "Currency & Finance Tools",
      items: [
        {
          name: "Wise Currency Converter",
          description: "Real-time currency conversion with live exchange rates. Convert between 160+ currencies with accurate mid-market rates. Perfect for international transactions and travel planning.",
          url: "https://wise.com/gb/currency-converter/",
          keywords: "currency converter, exchange rate, currency conversion, money converter, forex converter, real-time exchange rates, international currency, currency calculator",
          icon: DollarSign
        }
      ]
    },
    {
      category: "PDF Tools",
      items: [
        {
          name: "PDF24 - PDF Tools",
          description: "Free online PDF tools including merge, split, compress, convert, and edit PDF files. No registration required. Secure and privacy-focused PDF processing.",
          url: "https://tools.pdf24.org/en",
          keywords: "pdf tools, merge pdf, split pdf, compress pdf, pdf converter, edit pdf, pdf editor, free pdf tools",
          icon: FileCheck
        },
        {
          name: "ILovePDF - PDF Tools",
          description: "Comprehensive PDF toolkit for merging, splitting, compressing, converting, and editing PDF documents. Free online PDF solutions for all your document needs.",
          url: "https://www.ilovepdf.com/",
          keywords: "pdf merge, pdf split, pdf compress, pdf to word, pdf to jpg, pdf editor, pdf tools online",
          icon: FileText
        }
      ]
    },
    {
      category: "Developer Tools",
      items: [
        {
          name: "JSON Formatter",
          description: "Format, validate, and beautify JSON data online. Perfect for developers working with APIs and JSON configurations. Includes JSON validator and minifier.",
          url: "https://jsonformatter.org/",
          keywords: "json formatter, json validator, json beautifier, json minifier, format json, json parser",
          icon: FileJson
        },
        {
          name: "Base64 Encoder/Decoder",
          description: "Encode and decode Base64 strings online. Convert text, images, and files to Base64 format. Essential tool for web developers and API integrations.",
          url: "https://www.base64encode.org/",
          keywords: "base64 encoder, base64 decoder, base64 converter, encode base64, decode base64, base64 to image",
          icon: Code
        },
        {
          name: "QR Code Generator",
          description: "Generate QR codes for URLs, text, emails, and more. Free QR code generator with customizable designs and high-resolution downloads.",
          url: "https://www.qr-code-generator.com/",
          keywords: "qr code generator, create qr code, qr code maker, free qr code, qr code online",
          icon: QrCode
        },
        {
          name: "MD5 Hash Generator",
          description: "Generate MD5, SHA-1, SHA-256, and other hash values from text. Useful for password hashing, data integrity checks, and cryptographic operations.",
          url: "https://www.md5hashgenerator.com/",
          keywords: "md5 hash, sha1 hash, hash generator, password hash, cryptographic hash, hash calculator",
          icon: Hash
        },
        {
          name: "CSS Minifier",
          description: "Minify and compress CSS files to reduce file size. Remove whitespace and comments to optimize stylesheets for production. Improve website loading speed.",
          url: "https://www.minifier.org/",
          keywords: "css minifier, minify css, compress css, css optimizer, css compressor, reduce css size",
          icon: FileCode
        },
        {
          name: "HTML Validator",
          description: "Validate HTML code for errors and warnings. Check HTML syntax, accessibility, and standards compliance. Essential for web development quality assurance.",
          url: "https://validator.w3.org/",
          keywords: "html validator, validate html, html checker, html validator online, w3c validator, html syntax checker",
          icon: FileCode
        },
        {
          name: "Regex Tester",
          description: "Test and debug regular expressions online. Visualize regex patterns, test against sample text, and learn regex syntax with real-time feedback.",
          url: "https://regex101.com/",
          keywords: "regex tester, regular expression tester, regex debugger, regex validator, test regex online, regex tool",
          icon: Code
        },
        {
          name: "URL Encoder/Decoder",
          description: "Encode and decode URL strings online. Convert special characters to URL-safe format and vice versa. Essential for web development and API work.",
          url: "https://www.urlencoder.org/",
          keywords: "url encoder, url decoder, encode url, decode url, url encoding, percent encoding, url escape",
          icon: Link
        }
      ]
    },
    {
      category: "Color & Design Tools",
      items: [
        {
          name: "Coolors - Color Palette Generator",
          description: "Generate beautiful color palettes and schemes for your design projects. Explore millions of color combinations and export palettes for design tools.",
          url: "https://coolors.co/",
          keywords: "color palette generator, color scheme, color picker, color combinations, design colors, palette maker",
          icon: Palette
        },
        {
          name: "Canva - Design Tool",
          description: "Create stunning graphics, presentations, and social media posts with Canva's free design tool. Thousands of templates and design elements available.",
          url: "https://www.canva.com/",
          keywords: "design tool, graphic design, create graphics, social media design, presentation maker, free design",
          icon: FileImage
        }
      ]
    },
    {
      category: "Media Tools",
      items: [
        {
          name: "Online Video Converter",
          description: "Convert video files between different formats including MP4, AVI, MOV, and more. Compress videos and extract audio from video files.",
          url: "https://www.onlinevideoconverter.com/",
          keywords: "video converter, convert video, mp4 converter, video to mp3, compress video, video format converter",
          icon: Video
        },
        {
          name: "Online Audio Converter",
          description: "Convert audio files between MP3, WAV, OGG, FLAC, and other formats. Extract audio from videos and compress audio files.",
          url: "https://online-audio-converter.com/",
          keywords: "audio converter, mp3 converter, wav converter, audio format converter, convert audio online",
          icon: Music
        }
      ]
    },
    {
      category: "Utility Tools",
      items: [
        {
          name: "Archive Extractor",
          description: "Extract files from ZIP, RAR, 7Z, TAR, and other archive formats online. No software installation required. Secure file extraction.",
          url: "https://extract.me/",
          keywords: "extract zip, unzip online, rar extractor, archive extractor, zip opener, extract files online",
          icon: Archive
        },
        {
          name: "Website Screenshot",
          description: "Capture full-page screenshots of any website. Generate high-quality website screenshots for documentation, presentations, or analysis.",
          url: "https://www.screenshot.rocks/",
          keywords: "website screenshot, capture website, site screenshot, webpage screenshot, website image, screenshot tool",
          icon: Globe
        },
        {
          name: "Password Generator",
          description: "Generate strong, secure passwords with customizable length and character types. Create random passwords for enhanced security and account protection.",
          url: "https://www.lastpass.com/features/password-generator",
          keywords: "password generator, random password, secure password, password creator, strong password generator, password maker",
          icon: Lock
        },
        {
          name: "Word Counter",
          description: "Count words, characters, sentences, and paragraphs in your text. Perfect for writers, students, and content creators tracking document length.",
          url: "https://www.wordcounter.net/",
          keywords: "word counter, character counter, word count, text counter, word counter online, character count tool",
          icon: Type
        },
        {
          name: "Online Calculator",
          description: "Advanced online calculator with scientific functions. Perform calculations, conversions, and mathematical operations directly in your browser.",
          url: "https://www.calculator.net/",
          keywords: "calculator, online calculator, scientific calculator, math calculator, calculator online, free calculator",
          icon: Calculator
        }
      ]
    },
    {
      category: "Text & Writing Tools",
      items: [
        {
          name: "Grammarly - Grammar Checker",
          description: "Check grammar, spelling, and writing style online. Improve your writing with AI-powered suggestions for clarity, tone, and correctness.",
          url: "https://www.grammarly.com/",
          keywords: "grammar checker, spell checker, writing assistant, grammar check, proofreading tool, writing tool",
          icon: Type
        },
        {
          name: "Hemingway Editor",
          description: "Improve your writing clarity and readability. Highlights complex sentences, passive voice, and suggests improvements for better communication.",
          url: "https://hemingwayapp.com/",
          keywords: "writing editor, readability checker, writing tool, improve writing, clarity checker, writing assistant",
          icon: FileText
        },
        {
          name: "Lorem Ipsum Generator",
          description: "Generate placeholder text for design mockups and layouts. Create random Latin text in various lengths for web and print design projects.",
          url: "https://www.lipsum.com/",
          keywords: "lorem ipsum, placeholder text, dummy text, lorem ipsum generator, fake text generator, design text",
          icon: Type
        }
      ]
    },
    {
      category: "SEO & Analytics Tools",
      items: [
        {
          name: "Google PageSpeed Insights",
          description: "Analyze your website's performance and get optimization suggestions. Test page speed, mobile usability, and Core Web Vitals metrics.",
          url: "https://pagespeed.web.dev/",
          keywords: "page speed test, website speed test, page speed insights, website performance, speed test, page speed analyzer",
          icon: BarChart3
        },
        {
          name: "Meta Tags Generator",
          description: "Generate meta tags for your website including Open Graph, Twitter Cards, and SEO meta tags. Improve social media sharing and search visibility.",
          url: "https://metatags.io/",
          keywords: "meta tags generator, open graph generator, twitter cards, seo meta tags, social media tags, meta tag creator",
          icon: Search
        },
        {
          name: "Sitemap Generator",
          description: "Generate XML sitemaps for your website. Create sitemaps to help search engines crawl and index your pages more effectively.",
          url: "https://www.xml-sitemaps.com/",
          keywords: "sitemap generator, xml sitemap, sitemap creator, generate sitemap, website sitemap, seo sitemap",
          icon: Globe
        }
      ]
    },
    {
      category: "Productivity Tools",
      items: [
        {
          name: "Pomodoro Timer",
          description: "Boost productivity with the Pomodoro Technique. Work in focused 25-minute intervals with breaks. Free online timer for better time management.",
          url: "https://pomofocus.io/",
          keywords: "pomodoro timer, focus timer, productivity timer, work timer, pomodoro technique, time management tool",
          icon: Clock
        },
        {
          name: "Notepad Online",
          description: "Simple online notepad for quick notes and text editing. Save notes in your browser, no account required. Perfect for temporary text storage.",
          url: "https://www.onlinenotepad.org/",
          keywords: "online notepad, text editor, note taking, online notes, text pad, simple notepad",
          icon: FileText
        },
        {
          name: "Markdown Editor",
          description: "Write and preview Markdown documents online. Real-time preview, syntax highlighting, and export options. Perfect for documentation and blogging.",
          url: "https://dillinger.io/",
          keywords: "markdown editor, markdown preview, markdown online, markdown tool, markdown writer, markdown converter",
          icon: FileCode
        }
      ]
    },
    {
      category: "Business & AI Tools",
      items: [
        {
          name: "SayMic - AI Voice Solution",
          description: "SayMic is a versatile AI-powered voice solution that businesses can embed on their websites to capture customer requests instantly. Each mic is tied to a specific business via a unique key, allowing users to speak directly to that business, while the solution converts speech into structured text and translates it if needed. Businesses can customize the mic icon, shortcut name, and industry-specific fields—like pickup/drop for cabs, orders for restaurants, or appointments for salons—so leads are parsed accurately and delivered via email, WhatsApp, or dashboard notifications. Users can create mobile shortcuts to access a specific business mic instantly, making SayMic a fast, convenient, and actionable tool for generating high-quality leads across multiple industries, all through one general solution.",
          url: "https://saymic.com/",
          keywords: "saymic, ai voice solution, voice mic, voice to text, customer voice requests, ai voice assistant, business voice solution, voice lead generation, speech to text, voice capture tool, embedded voice solution, ai mic, voice automation",
          icon: Mic,
          embedded: true
        }
      ]
    }
  ];

  // Collect all keywords for meta tags
  const allKeywords = tools.flatMap(category => 
    category.items.flatMap(item => item.keywords.split(", "))
  ).join(", ");

  const pageTitle = "Free Online Tools - Image Compression, File Conversion & More | Rixon";
  const metaDescription = "Discover free online tools for image compression, background removal, file conversion, currency conversion, PDF tools, developer utilities, and more. Enhance your digital workflow with professional-grade tools.";

  return (
    <div className="bg-black min-h-screen">
      <MetaData 
        title={pageTitle}
        description={metaDescription}
        keywords={allKeywords}
      />
      
      {/* Hero Section */}
      <section className="py-20 my-10 overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-600/20 text-green-600 border border-green-600/30 text-sm font-medium mb-4">
              Free Tools
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Professional <span className="text-green-600">Online Tools</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover powerful free tools for image compression, file conversion, background removal, 
              currency conversion, PDF processing, developer utilities, and more. Enhance your digital 
              projects with these professional-grade utilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SayMic Embedded Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#0F1813] to-[#15201A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-700/20 border-2 border-green-600/50 text-green-600 rounded-xl mb-4">
              <Mic className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SayMic - <span className="text-green-600">AI Voice Solution</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Capture customer requests instantly with AI-powered voice technology. SayMic converts speech to structured text, 
              translates when needed, and delivers leads via email, WhatsApp, or dashboard notifications.
            </p>
          </motion.div>
          
          <div className="bg-black/30 rounded-xl p-6 md:p-8 border border-green-600/30 shadow-2xl">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900">
              <iframe
                src="https://saymic.com/"
                title="SayMic AI Voice Solution"
                className="w-full h-full border-0"
                allow="microphone"
                loading="lazy"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://saymic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Visit SayMic.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="pt-0 pb-20 overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 border border-green-600/30"
                }`}
              >
                All Tools
              </button>
              {tools.map((category) => {
                const tabId = category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <button
                    key={tabId}
                    onClick={() => setActiveTab(tabId)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tabId
                        ? "bg-green-600 text-white shadow-md scale-105"
                        : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 border border-green-600/30"
                    }`}
                  >
                    {category.category}
                  </button>
                );
              })}
            </div>

            {/* Tools Content - All visible for SEO, but hidden/shown with CSS */}
            {tools.map((category, categoryIndex) => {
              const tabId = category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const isVisible = activeTab === "all" || activeTab === tabId;
              
              return (
                <div 
                  key={categoryIndex} 
                  className={`mb-20 ${!isVisible ? "hidden" : ""}`}
                  style={{ display: isVisible ? "block" : "none" }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
                    {category.category}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((tool, toolIndex) => {
                      const IconComponent = tool.icon;
                      return (
                        <div
                          key={toolIndex}
                          className="group bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600/30 rounded-xl p-6 hover:scale-105 hover:border-green-600 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300 shadow-lg"
                        >
                          <div className="mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-600/20 to-green-700/20 border-2 border-green-600/50 text-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-green-600 transition-all duration-300">
                              <IconComponent className="w-7 h-7" />
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                            {tool.name}
                          </h3>
                          
                          <p className="text-gray-400 text-sm mb-5 leading-relaxed min-h-[60px]">
                            {tool.description}
                          </p>
                          
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm group/btn"
                          >
                            {tool.embedded ? "Visit Tool" : "Use Tool"}
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#0F1813] to-[#15201A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Use These Tools?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Image className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Image Compression Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Compressing images is essential for faster website loading times and better user experience. 
                Tools can reduce image file sizes by up to 80% without noticeable quality loss, making your 
                website faster and more SEO-friendly.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Background Removal Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Remove backgrounds from images instantly with AI-powered tools. Perfect for e-commerce product 
                photos, profile pictures, marketing materials, and social media content.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  File Conversion Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Convert files between different formats quickly and easily. Whether you need to convert PDFs 
                to Word documents, videos to different formats, or images to WebP, these tools handle it all.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Currency Conversion Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Get real-time exchange rates and convert between currencies accurately. Essential for 
                international business, travel planning, and e-commerce transactions.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Developer Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Streamline your development workflow with code formatters, validators, and converters. 
                Format JSON, test regex, encode URLs, and validate HTML to improve code quality and efficiency.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  PDF Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Merge, split, compress, and convert PDF documents effortlessly. Essential for document management, 
                sharing, and archiving. No software installation required.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Design Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Create stunning graphics and design assets with professional tools. Generate color palettes, 
                create social media posts, and design presentations without expensive software.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Media Conversion Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Convert video and audio files between formats, extract audio from videos, and compress media 
                files. Essential for content creators, marketers, and multimedia projects.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  SEO & Analytics Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Optimize your website for search engines with speed tests, meta tag generators, and sitemap 
                creators. Improve your search rankings and online visibility.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Type className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Writing & Text Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Improve your writing with grammar checkers, readability analyzers, and word counters. 
                Enhance clarity, fix errors, and create better content.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Productivity Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Boost your productivity with timers, note-taking apps, and markdown editors. Stay focused, 
                organize your work, and manage your time more effectively.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-green-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                  Security Tools
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Generate strong passwords, create secure hashes, and protect your data. Essential tools for 
                maintaining online security and privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1C2F27] via-[#15201A] to-[#0F1813] border border-green-600/30 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Custom Digital Solutions?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Rixon provides professional web development, app development, and digital transformation services. 
            Contact us to discuss your project needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tools;
