services:
  web:
    build: .
    ports:
      - "80:80"

  redis:
    image: redis
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

volumes:
  redis-data:
