export default function ContactSection() {
  return (
    <section>
      <h2 className="text-lg font-medium section-title">Contact 📲</h2>
      <div className="space-y-2 ">
        <div className="container-card">
          <a
            href="mailto:muhammadsharifshaikh21@gmail.com"
            className="text-secondary hover:text-primary flex items-center gap-2 mb-4"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            muhammadsharifshaikh21@gmail.com
          </a>

          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/shaarifshykh"
              target="_blank"
              rel="noopener"
              className="social-icon"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <radialGradient
                    id="instagram-gradient"
                    r="150%"
                    cx="30%"
                    cy="107%"
                  >
                    <stop offset="0%" style={{ stopColor: "#fdf497" }}></stop>
                    <stop offset="5%" style={{ stopColor: "#fdf497" }}></stop>
                    <stop offset="45%" style={{ stopColor: "#fd5949" }}></stop>
                    <stop offset="60%" style={{ stopColor: "#d6249f" }}></stop>
                    <stop offset="90%" style={{ stopColor: "#285AEB" }}></stop>
                  </radialGradient>
                </defs>
                <path
                  fill="url(#instagram-gradient)"
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                ></path>
              </svg>
            </a>

            {/* Github */}
            <a
              href="http://github.com/ShaRifShykh"
              target="_blank"
              rel="noopener"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.116-3.176 0 0 1.008-.323 3.3 1.23a11.42 11.42 0 013.003-.403c1.02.005 2.047.137 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.65 1.653.24 2.873.117 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.474 5.923.43.37.813 1.103.813 2.222v3.293c0 .32.192.693.8.575C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/shaarifshaikh"
              target="_blank"
              rel="noopener"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="#0A66C2" rx="4" />
                <path
                  fill="#ffffff"
                  d="M6.94 7.33c0 .82-.66 1.48-1.48 1.48S4 8.15 4 7.33c0-.82.66-1.48 1.48-1.48s1.48.66 1.48 1.48zM4.24 10h3.42v9.75H4.24V10zM9.75 10h3.28v1.33h.05c.46-.86 1.58-1.76 3.25-1.76 3.48 0 4.13 2.28 4.13 5.24v6.09h-3.42v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86v5.5H9.75V10z"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/sharifshaikh_?s=21"
              target="_blank"
              rel="noopener"
              className="social-icon"
            >
              <svg className="w-6 h-6" fill="#1DA1F2" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
