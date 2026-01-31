# Feature/Admin View

## Components Structure

```
app/(protected)/admin/
├── admin.tsx                 # Main admin screen
├── layout.tsx               # Admin layout wrapper
├── components/
│   └── Card/
│       └── Card.tsx         # Reusable metric/action card
├── dto/
│   └── CardProps.ts         # Card component interface
└── styles/
    ├── Admin.styles.ts      # Admin screen styles
    └── Card.styles.ts       # Card component styles
```

## Color Palette

- **Primary Purple**: `#4C3BCF`, `#5B4AC9`, `#2D1B69`
- **Accent Blue**: `#5856FF`
- **Background**: `#F8F9FE`
- **Text**: `#1A1A2E` (primary), `#A8A8C4` (secondary), `#B8B8D1` (tertiary)
- **Card Background**: `#FFFFFF`
- **Icon Container**: `#F3E8FF`

## Navigation

Access the admin view at route: `/admin`

## Dependencies

- `expo-linear-gradient` - For gradient backgrounds
- `@expo/vector-icons` - For Ionicons icons
- `react-native` - Core components
