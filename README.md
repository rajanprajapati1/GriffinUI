# 🦅 Griffin UI

**Griffin UI** is a modern, comprehensive React component library designed to help developers build fast, clean, and responsive interfaces with minimal effort. Built for React and Next.js applications, it includes a rich collection of reusable UI components ranging from basic elements to complex interactive components.

> ⚡️ Fast setup. 🎨 Clean design. 🧩 Developer friendly. 📱 Mobile responsive.

[![NPM Version](https://img.shields.io/npm/v/griffinui?style=flat-square)](https://www.npmjs.com/package/griffinui)
[![License](https://img.shields.io/npm/l/griffinui?style=flat-square)](https://github.com/rajanprajapati1/GriffinUI/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/griffinui?style=flat-square)](https://bundlephobia.com/package/griffinui)

---

## 📦 Installation

```bash
npm install griffinui
```

or

```bash
yarn add griffinui
```

---

## 🚀 Quick Start

1. **Import global styles** (once in your root entry file):

```tsx
import 'griffinui/dist/index.css';
```

2. **Use components in your app:**

```tsx
import {
  Button,
  Badge,
  Card,
  Input,
  Modal,
  Tabs,
  DataTable,
  DatePicker
} from 'griffinui';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Get Started
      </Button>
      <Badge color="green">New</Badge>
    </div>
  );
}
```

---

## 🧩 Component Categories

### 🔘 **Basic Components**
Essential building blocks for any UI:

- **Button** - Primary, secondary, outline variants with multiple sizes
- **Badge** - Color-coded labels and indicators
- **Avatar** - User profile pictures and initials
- **Divider** - Visual content separators
- **Spacer** - Flexible spacing utility
- **Skeleton** - Loading placeholders

### 📝 **Form Components**
Complete form building toolkit:

- **Input** - Text input with validation states
- **InputField** - Enhanced input with labels and helpers
- **TextField** - Multi-line text input
- **Textarea** - Flexible text area
- **Select** - Dropdown selection
- **Checkbox** - Single and group selections
- **RadioGroup** - Exclusive option selection
- **Switch** - Toggle switches
- **Slider** - Range input controls
- **Rating** - Star rating component
- **FormControl** - Form layout wrapper

### 🎛️ **Interactive Components**
Advanced user interactions:

- **Modal** - Overlay dialogs
- **Dialog** - System dialogs
- **AlertDialog** - Confirmation dialogs
- **Drawer** - Side navigation panels
- **Sheet** - Bottom sheets and panels
- **Popover** - Contextual overlays
- **Tooltip** - Hover information
- **HoverCard** - Rich hover content
- **ContextMenu** - Right-click menus
- **DropdownMenu** - Action menus
- **Command** - Command palette
- **Toast** - Notification messages

### 🗂️ **Layout Components**
Structure and organization:

- **Card** - Content containers
- **Tabs** - Tabbed interfaces
- **Accordion** - Collapsible sections
- **Collapsible** - Expandable content
- **Stepper** - Step-by-step flows
- **Timeline** - Chronological displays
- **Breadcrumbs** - Navigation trails
- **NavigationMenu** - Main navigation
- **Menubar** - Application menu bars
- **Pagination** - Page navigation
- **ScrollArea** - Custom scrollbars
- **Resizable** - Resizable panels
- **SplitPane** - Divided layouts
- **AspectRatio** - Responsive ratios

### 📊 **Data Components**
Data visualization and tables:

- **Table** - Basic data tables
- **DataTable** - Advanced sortable/filterable tables
- **ProgressBar** - Progress indicators
- **Carousel** - Image/content sliders
- **ImageViewer** - Image galleries
- **Calendar** - Date selection
- **DatePicker** - Date input controls

### 🎨 **Visual Components**
Enhanced visual elements:

- **Alert** - Status messages
- **Chip** - Compact information tags
- **FlashView** - Animated notifications
- **Textura** - Rich text formatting
- **Toggle** - Binary switches
- **ToggleGroup** - Multiple toggle options

---

## 📖 Component Examples

### 🔘 Button

```tsx
<Button 
  onClick={() => alert('Clicked!')} 
  variant="primary" 
  size="md"
>
  Click Me
</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `outline` | `ghost`
- `size`: `sm` | `md` | `lg`
- `disabled`: boolean
- `loading`: boolean

### 🎖️ Badge

```tsx
<Badge color="green">New Feature</Badge>
<Badge color="red">Urgent</Badge>
<Badge color="blue">Info</Badge>
```

**Props:**
- `color`: `blue` | `green` | `red` | `gray` | `yellow`
- `variant`: `solid` | `outline` | `subtle`

### 🗂️ Tabs

```tsx
<Tabs
  tabs={[
    { label: 'Overview', content: <div>Overview content</div> },
    { label: 'Details', content: <div>Details content</div> },
    { label: 'Settings', content: <div>Settings content</div> }
  ]}
/>
```

### 📊 DataTable

```tsx
<DataTable
  data={users}
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', filterable: true }
  ]}
  searchable={true}
  pagination={true}
/>
```

### 📅 DatePicker

```tsx
<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  placeholder="Select a date"
  format="yyyy-MM-dd"
/>
```

### 🎠 Carousel

```tsx
<Carousel
  items={[
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' }
  ]}
  autoplay={true}
  interval={3000}
/>
```

---

## 🛠 Customization

Griffin UI components are built with customization in mind:

### CSS Custom Properties
```css
:root {
  --griffin-primary: #3b82f6;
  --griffin-secondary: #64748b;
  --griffin-success: #10b981;
  --griffin-danger: #ef4444;
  --griffin-warning: #f59e0b;
  --griffin-border-radius: 8px;
  --griffin-font-family: 'Inter', sans-serif;
}
```

### Theme Override
```tsx
import { ThemeProvider } from 'griffinui';

const customTheme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
  },
  borderRadius: '12px',
  fontFamily: 'Poppins, sans-serif'
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## 🔧 Advanced Usage

### Form Integration
```tsx
import { useForm } from 'react-hook-form';
import { InputField, Button, FormControl } from 'griffinui';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl error={errors.name?.message}>
        <InputField
          label="Name"
          {...register('name', { required: 'Name is required' })}
        />
      </FormControl>
      
      <FormControl error={errors.email?.message}>
        <InputField
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
      </FormControl>
      
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Data Management
```tsx
import { DataTable, useDataTable } from 'griffinui';

function UserTable() {
  const {
    data,
    loading,
    error,
    pagination,
    sorting,
    filtering
  } = useDataTable('/api/users');

  return (
    <DataTable
      data={data}
      loading={loading}
      error={error}
      pagination={pagination}
      sorting={sorting}
      filtering={filtering}
      columns={columns}
    />
  );
}
```

---

## 📚 Documentation

Comprehensive documentation and interactive examples are available in our Storybook:

🔗 **[View Storybook Documentation](https://rajanprajapati1.github.io/GriffinUI/)**

The Storybook includes:
- Interactive component playground
- Code examples and snippets
- API documentation
- Design tokens and theming guide
- Best practices and patterns

---

## 🌟 Features

- **🎨 Modern Design**: Clean, contemporary aesthetics
- **📱 Responsive**: Mobile-first approach
- **♿ Accessible**: WCAG 2.1 AA compliant
- **🔧 Customizable**: Extensive theming options
- **⚡ Performance**: Optimized bundle size
- **🧪 TypeScript**: Full type safety
- **🎯 Tree Shakeable**: Import only what you need
- **🌐 SSR Ready**: Server-side rendering support

---

## 🚀 Performance

Griffin UI is optimized for production:

- **Bundle Size**: Minimal footprint with tree-shaking
- **Runtime Performance**: Efficient React patterns
- **Memory Usage**: Optimized component lifecycle
- **Loading Speed**: Lazy loading for complex components

---

## 🧪 Testing

Components are thoroughly tested:

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run visual regression tests
npm run test:visual
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

```bash
# Clone the repository
git clone https://github.com/rajanprajapati1/GriffinUI.git

# Install dependencies
cd GriffinUI
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook
```

### Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run storybook` - Launch Storybook
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.

---

## 📄 License

MIT License © [Rajan Prajapati](https://www.npmjs.com/~rajanprajapati)

---

## 🌟 Support

- **GitHub Issues**: [Report bugs](https://github.com/rajanprajapati1/GriffinUI/issues)
- **Discussions**: [Community forum](https://github.com/rajanprajapati1/GriffinUI/discussions)
- **Documentation**: [Storybook](https://rajanprajapati1.github.io/GriffinUI/)

---

## 🔗 Links

- **📦 NPM Package**: [griffinui](https://www.npmjs.com/package/griffinui)
- **📚 Documentation**: [Storybook](https://rajanprajapati1.github.io/GriffinUI/)
- **💻 Source Code**: [GitHub](https://github.com/rajanprajapati1/GriffinUI)
- **🐛 Issues**: [Bug Reports](https://github.com/rajanprajapati1/GriffinUI/issues)

---

**Griffin UI** - Building beautiful React applications, one component at a time. 🦅

*Star the repo ⭐ and share your feedback to help improve Griffin UI!*