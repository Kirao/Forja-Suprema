# Forja Suprema - Loja de Dados de RPG

Loja online de dados artesanais de RPG com temática medieval. Desenvolvida em React + TypeScript + Tailwind CSS.

## 🚀 Características

- ✅ Interface responsiva (mobile + desktop)
- ✅ Carrinho de compras funcional
- ✅ 4 produtos premium
- ✅ Seção de avaliações
- ✅ Animações e efeitos visuais
- ✅ Sem dependências de IA (Gemini removido)
- ✅ Pronto para deploy

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```
Abre em `http://localhost:3000`

### 3. Build para Produção
```bash
npm run build
```

### 4. Preview do Build
```bash
npm run preview
```

## 📁 Estrutura

```
src/
├── components/          # Componentes React
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx
│   ├── Features.tsx
│   ├── ProductsSection.tsx
│   ├── ProductCard.tsx
│   ├── Reviews.tsx
│   ├── Cart.tsx
│   ├── Footer.tsx
│   └── Notification.tsx
├── pages/
│   └── Home.tsx
├── lib/
│   ├── types.ts
│   └── products.ts
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
```

## 🎨 Customização

### Adicionar Produto
Edite `src/lib/products.ts`

### Mudar Cores
Edite `tailwind.config.js`

### Mudar Imagens
Edite URLs em `src/lib/products.ts`

## 🌐 Deploy

### Vercel
```bash
git init && git add . && git commit -m "Forja Suprema"
git push origin main
```
Depois conecte em vercel.com

### Netlify
- Build: `npm run build`
- Publish: `dist`

## 📝 Scripts

- `npm run dev` - Desenvolvimento
- `npm run build` - Build produção
- `npm run preview` - Preview do build
- `npm run type-check` - Verificar tipos TypeScript

## 🔧 Tecnologias

- React 18.2.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- Vite 5.0.8
- React Router 6.20.0
- Lucide React (ícones)

---

**Pronto para customizar e fazer deploy!** 🎉
