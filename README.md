# Guitar Chords App

Ứng dụng hỗ trợ người dùng guitar chơi đệm hát với giao diện đơn giản và trực quan.

## Các chức năng chính

### Cửa sổ chính
- **Giao diện cực kì đơn giản và trực quan** với 3 nút chính:
  - **Quen thuộc**: Chọn bài hát ngẫu nhiên từ danh sách yêu thích
  - **Tìm kiếm bằng giọng nói**: Mở cửa sổ tìm kiếm với AI
  - **List Bài gần nhất**: Hiển thị các bài hát đã chơi gần đây

### Cửa sổ Tìm kiếm (AI)
- **Tìm kiếm bằng giọng nói** (mặc định active)
- **Tùy chọn nhập text** nếu cần
- **Query đa dạng**:
  - Tên bài hát
  - Lời bài hát
  - Playlist ("vòng hợp âm canon", "vòng Am Dm F G C")
  - Ca sỹ (Hồ Ngọc Hà, Sơn Tùng M-TP...)
  - Điệu nhạc (rhumba, disco...)
  - Hợp âm đơn lẻ (G, Am, F...)
- **Auto-redirect**: Nếu tỉ lệ match > 90% → mở bài hát ngay lập tức

### Cửa sổ Chơi nhạc
- **Giao diện tập trung vào nội dung**, rõ chữ
- **Thanh tự động cuộn** có thể điều chỉnh tốc độ
- **Click vào hợp âm** để xem chi tiết cách bấm
- **Hiển thị hợp âm chi tiết** ngay trong lời bài hát
- **Controls**: Play/Pause, tốc độ cuộn, điều hướng
- **Liên kết bài hát** thành liên khúc nếu cùng vòng hợp âm

### Cửa sổ Hướng dẫn hợp âm
- **Hiển thị hợp âm chi tiết** với sơ đồ guitar
- **Minh họa vị trí ngón tay** trên đàn
- **Hướng dẫn từng bước** cách bấm hợp âm
- **Mức độ khó**: Dễ, Trung bình, Khó
- **Gợi ý bài hát** sử dụng hợp âm đó

## Tính năng nâng cao

### Cá nhân hóa
- Ghi lại các vòng hợp âm và điệu đàn người dùng hay sử dụng
- Tự động đánh dấu bài hát nếu mở quá 2 phút
- Đề xuất bài hát dựa trên sở thích

### Hợp âm được hỗ trợ
- **C Major**: Hợp âm cơ bản, dễ học
- **Am (A Minor)**: Hợp âm thứ đơn giản
- **F Major**: Hợp âm barré nâng cao
- **G Major**: Hợp âm mở với âm thanh tươi sáng
- **Dm (D Minor)**: Hợp âm buồn đặc trưng
- **Em (E Minor)**: Hợp âm dễ nhất với 2 ngón tay

## Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Cài đặt và chạy

#### Cách 1: Chạy trên cùng domain/port (Recommended)
```bash
# Từ thư mục gốc
npm run install:all

# Khởi tạo database và seed dữ liệu mẫu
npm run db:setup

# Chạy unified app (frontend + backend on same port)
npm run dev:unified
```
**Truy cập**: http://localhost:3001 (cả frontend và API)

#### Cách 2: Chạy development với 2 server riêng biệt
```bash
# Chạy cả backend và frontend trên port khác nhau
npm run dev
```
**Frontend**: http://localhost:3000  
**Backend API**: http://localhost:3001

#### Cách 3: Chạy từng phần riêng biệt

**Backend API**
```bash
cd backend
npm install
npm run db:push
npm run db:seed
npm run dev:api-only  # API only mode
```

**Frontend React App**
```bash
cd web
npm install
npm start
```

### Build cho production
```bash
# Build cả frontend và backend
npm run build

# Hoặc build riêng biệt
npm run build:web     # Frontend
npm run build:backend # Backend
```

### Chạy tests
```bash
npm test
```

## Công nghệ sử dụng

### Frontend
- **React 18** với TypeScript
- **Material-UI (MUI)** cho giao diện
- **React Router** cho điều hướng
- **Emotion** cho styling
- **SVG** cho sơ đồ hợp âm

### Backend
- **Node.js** với Express.js
- **TypeScript** cho type safety
- **Prisma ORM** với SQLite database
- **RESTful API** architecture
- **Helmet** cho security
- **CORS** cho cross-origin requests

## Cấu trúc dự án

```
guitar-chords/
├── web/                    # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── MainWindow.tsx      # Cửa sổ chính
│   │   │   ├── SearchWindow.tsx    # Cửa sổ tìm kiếm
│   │   │   ├── MusicPlayer.tsx     # Cửa sổ chơi nhạc
│   │   │   └── ChordTutorial.tsx   # Hướng dẫn hợp âm
│   │   ├── services/
│   │   │   └── api.ts             # API service layer
│   │   ├── App.tsx                # Component chính
│   │   └── index.tsx              # Entry point
│   ├── public/               # Static assets
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript config
├── backend/                # Backend API server
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── types/          # TypeScript types
│   │   └── index.ts        # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   └── seed.ts         # Database seed script
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
├── package.json            # Root package.json with scripts
└── README.md               # Main documentation
```

## API Endpoints

### Songs
- `GET /api/songs/recent` - Lấy bài hát được chơi nhiều nhất
- `GET /api/songs/:id` - Lấy thông tin bài hát theo ID
- `GET /api/songs` - Lấy tất cả bài hát (có phân trang)

### Chords  
- `GET /api/chords` - Lấy tất cả hợp âm
- `GET /api/chords/:name` - Lấy thông tin hợp âm theo tên
- `GET /api/chords/:name/songs` - Lấy bài hát sử dụng hợp âm

### Search
- `GET /api/search?q=query` - Tìm kiếm bài hát, hợp âm, ca sĩ
- `GET /api/search/popular` - Lấy nội dung phổ biến

### Artists
- `GET /api/artists` - Lấy tất cả ca sĩ
- `GET /api/artists/:id` - Lấy thông tin ca sĩ và bài hát

## Roadmap

- [ ] Tích hợp API âm nhạc thực tế
- [ ] Thêm nhiều hợp âm và bài hát
- [ ] Tính năng đăng nhập và đồng bộ
- [ ] Hỗ trợ capo và transpose
- [ ] Metronome tích hợp
- [ ] Ghi âm và phát lại
- [ ] Chia sẻ bài hát và hợp âm
