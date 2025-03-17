# Feature Components

This directory contains components that are specific to individual features of the application.

Each feature should:
- Have its own directory
- Include all related components
- Be self-contained
- Have clear boundaries
- Follow consistent patterns

## Structure

```
features/
├── posts/           # Post feature components
│   ├── PostCard.tsx
│   ├── PostList.tsx
│   └── PostEditor.tsx
├── users/           # User feature components
│   ├── UserCard.tsx
│   ├── UserList.tsx
│   └── UserProfile.tsx
└── settings/        # Settings feature components
    ├── SettingsForm.tsx
    └── PreferencesPanel.tsx
```