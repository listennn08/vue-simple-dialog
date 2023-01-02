# Vue Simple Dialog

## Preview

![vue-simple-confirm-preview](https://user-images.githubusercontent.com/52522402/210203965-8f58fe9f-4314-4e02-bd6c-582f13d5c51a.gif)

## Install

```
pnpm install --save vue-simple-dialog
```

## Quick Start

In `main.ts` or `main.js`
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import VueSimpleConfirm from 'vue-simple-confirm'
import 'vue-simple-dialog/dist/index.css'

const app = createApp(App)

app
  .use(VueSimpleConfirm)
  .mount('#app')
```

In `App.vue` (or any SFC you want to add it)

Use `setup script`
```vue
<script setup lang="ts">
import { inject } from 'vue'
import { confirm } from 'vue-simple-confirm'

const $confirm = inject(confirm)!

const showPopup = () => $confirm({
  title: 'Title',
  mount: '#second',
  message: 'string',
  button: {
    yes:'Good',
  },
  okCallback() {
    alert('Ok')
  }
})
</script>
<template>
  <button @click="showPopup">
    Show
  </button>
  <div id="second"></div>
  <vue-simple-confirm />
</template>
```

Use `Option API`
```vue
<template>
  <button @click="showPopup">
    Show
  </button>
  <vue-simple-confirm />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { confirm } from 'vue-simple-dialog'

export default defineComponent({
  inject: {
    confirm: { from: confirm },
  },
  methods: {
    showPopup() {
      this.confirm({
        title: 'Title',
        message: 'string',
        button: {
          yes:'Good',
        },
        okCallback() {
          alert('Ok')
        }
      })
    }
  }
})
</script>
```
You also can put component in App.vue and inject confirm function in anywhere you want to use.

## Configuration

You can config your dialog theme in here, we provide `ios` and `material` design, default is `ios`.
```typescript
app.use(VueSimpleConfirm, {
  // options configuration
  theme: 'ios'
})
```

If you want to use your custom design, you can add your theme name and add theme to css file like below.
```typescript
app.use(VueSimpleConfirm, {
  // options configuration
  theme: 'custom'
})
```
You can use css or scss to design your theme
```css
.sd-layer.custom {
  background-color: rgba(225, 225, 225, 0.4); 
}

.sd-layer.custom .sd-container {
  border: 1px solid #000;
}

.sd-layer.custom .sd-body {
  text-align: center;
}
.sd-layer.custom .sd-body h3 {
  border-bottom: 1px solid #000;
  margin: 0;
  padding: 0.5rem;
}
.sd-layer.custom .sd-text {
  padding: 0.5rem;
}
.sd-layer.custom .sd-btn {
  width: 50%;
  border: 0;
  background-color: transparent;
}
.sd-layer.custom .sd-btn:hover {
  background-color: #000;
  color: #fff;
  transition: 0.5s all;
}

.sd-layer.custom .sd-btn:first-child {
  border-right: 1px solid #000;
}
.sd-layer.custom .sd-footer {
  display: flex;
  min-height: 2rem;
  border-top: 1px solid #000;
}
```


|Name|Type|Require|Default|
|:---:|:---:|:---:|:---:|
|theme|`ios / material`|optional|ios|
|layoutClose|boolean|optional|false|

## API
|Name|Type|Require|Default|
|:---:|:---:|:---:|:---:|
|title|string|optional|''|
|message|string|required|''|
|button.yes|string|optional|ok|
|button.no|string|optional|cancel|
|mount|string|optional|''|
|callback|(confirm: boolean) => void|optional|null|
